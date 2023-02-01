import { initializeApp } from "firebase/app";
import {
    addDoc,
    collection,
    getDocs,
    getFirestore,
} from "firebase/firestore/lite";

const firebaseConfig = {
    apiKey: "AIzaSyBP5YVhBKw55GGq7gHWxJJZt54VuVu8dLI",
    authDomain: "rait-iitism.firebaseapp.com",
    projectId: "rait-iitism",
    storageBucket: "rait-iitism.appspot.com",
    messagingSenderId: "230074753984",
    appId: "1:230074753984:web:874215d4a85296b69b5e25",
    databaseURL:
        "https://rait-iitism-default-rtdb.asia-southeast1.firebasedatabase.app",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export async function getItem(item: string) {
    const itemRef = collection(db, item);
    const itemSnapshot = await getDocs(itemRef);

    return itemSnapshot.docs.map((x) => ({
        id: x.id,
        doc: x.data(),
    }));
}

export async function addItem(item: string, data: Object) {
    const itemRef = collection(db, item);
    const result = await addDoc(itemRef, data);

    return result.id;
}
