import { DataModel } from "../data/datamodel";
import { _updateProfile } from "./auth";
import { saveTask } from "./task";

const sync = async (firebaseApp) => {
    if(window.navigator.onLine){
        sincronizarDados(firebaseApp);
    }
}

const sincronizarDados = async (firebaseApp) => {
    const dataModelUser = new DataModel('user', firebaseApp, 'user', 'user');
    const dataModelTask = new DataModel('user', firebaseApp, 'tasks', 'tasks');

    const user = await dataModelUser.getLocal({ synced: false });
    const tasks = await dataModelTask.getLocal({ synced: false });

    
    if(user.length > 0){
        _updateProfile(firebaseApp, {
            displayName: user[0].displayName, 
            photoURL: user[0].photoURL, 
            birthday: user[0].birthday, 
            role: user[0].role
        })
    }
    if(tasks.length > 0){
        for(let task of tasks){
            const data = {
                id: task.id,
                title: task.title, 
                day: task.day, 
                hour: task.hour, 
                category: task.category, 
                description: task.description
            }
            saveTask(firebaseApp, data);
        }
    }
}

export {
    sync
}