import { DataModel } from "../data/datamodel";
import { getUserLocal } from "./auth";

const saveTask = async (firebaseApp, data) => {
    const dataModel = new DataModel('user', firebaseApp, 'tasks', 'tasks');

    const user = await getUserLocal();
    data.uid = user.uid;
    if(!navigator.onLine){
        data.synced = false;
    }
    dataModel.create(data, true);
}

const getTasks = async (firebaseApp) => {
    const dataModel = new DataModel('user', firebaseApp, 'tasks', 'tasks');
    return await dataModel.list();
}

const loadTask = async (firebaseApp, id) => {
    const dataModel = new DataModel('user', firebaseApp, 'tasks', 'tasks');
    const task = await dataModel.get(id);
    return task[0];
}

export {
    loadTask,
    saveTask,
    getTasks
}