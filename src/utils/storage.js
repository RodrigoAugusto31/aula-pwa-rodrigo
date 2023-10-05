import { getStorage, ref, uploadString, getDownloadURL } from "firebase/storage";

const saveImageB64 = async (firebaseApp, file, name) => {
    const storage = getStorage(firebaseApp);
    const storageRef = ref(storage, `profile/${name}.jpeg`);
    await uploadString(storageRef, file.replace('data:image/jpeg;base64,', ''), 'base64');
    return await getDownloadURL(storageRef);
}

export {
    saveImageB64
}