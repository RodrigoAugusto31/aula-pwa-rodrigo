import { getDatabase, ref, onValue, set, update, child, get } from "firebase/database";
import { db } from "./database";

export class DataModel{
    constructor(model, firebaseApp, modelSufix=null, databaseName=null){
        this.model = model;
        this.databaseName = databaseName || model;
        this.modelSufix = modelSufix;
        this.db = db;
        this.realtimeDb = getDatabase(firebaseApp)
    }

    async get(id){
        if(id){
            return await this.getLocal({ id });
        }
        return await this.getLocal(null);
    }

    async list(){
        return await this.getLocal();
    }

    async generateUid(){
        // Gere um uid com js
        let dt = new Date().getTime();
        let uuid = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            let r = (dt + Math.random()*16)%16 | 0;
            dt = Math.floor(dt/16);
            return (c=='x' ? r :(r&0x3|0x8)).toString(16);
        });

        return uuid;
    }

    async create(data, saveLocal=true){
        if(data.id === null || data.id === undefined){
            const id = await this.generateUid();
            data.id = id;
        }
        if(window.navigator.onLine){
            if(this.modelSufix){
                set(ref(this.realtimeDb, `${this.model}/` + data.uid + `/${this.modelSufix}/${data.id}`), data);
            }else{
                set(ref(this.realtimeDb, `${this.model}/` + data.uid), data);
            }
        }

        if(saveLocal){
            await this.createLocal(data);
        }
    }

    async update(data, id, locais, saveLocal=true){
        if(locais){
            for(let local of locais){
                const keyLocal = local.replace("Local", "")
                data[keyLocal] = data[local]
                delete data[local];
            }
        }
        if(saveLocal){
            await this.createLocal(data);
        }

        try{
            if(window.navigator.onLine){
                const dbRef = ref(this.realtimeDb);
    
                const updates = {};
    
                for(let key of Object.keys(data)){
                    updates[`${this.model}/${id}/${key}`] = data[key];
                }
    
                update(dbRef, updates);
            }
        }catch(e){
            console.log(e)
        }
    }

    async delete(id){
        ref(this.realtimeDb, `${this.model}/` + id).remove()
    }

    async getLocal(condition=null){
        let result = null;
        if(condition){
            result = await this.getDbTable(this.databaseName).toArray()
            for(let key of Object.keys(condition)){
                result = result.filter((item) => item[key] === condition[key]);
            }
            return result;
        }
        return await this.getDbTable(this.databaseName).toArray();
    }

    async deleteLocal(condition){
        return await this.getDbTable(this.databaseName).where(condition).delete();
    }

    async updateLocal(id, data){
        return await this.getDbTable(this.databaseName).update(id, data);
    }

    async clearDatabase(list=null){
        if(list){
            for(let l of list){
                this.getDbTable(l).clear();
            }
        }else{
            this.getDbTable(this.databaseName).clear();
        }
    }

    async createLocal(data, id=null){
        if(window.navigator.onLine){
            data.synced = true;
        }else{
            data.synced = false;
        }

        if(id){
            await this.getDbTable(this.databaseName).put({
                id: id,
                ...data
            });
        }else{
            await this.getDbTable(this.databaseName).put(data);
        }
    }

    getDbTable(database){
        if(database === 'user'){
            return this.db.user;
        }
        else if(database === 'tasks'){
            return this.db.tasks;
        }
    }
}