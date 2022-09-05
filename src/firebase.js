import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

import * as dotenv from 'dotenv'
dotenv.config()

const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
export async function getCollectionSnapshot(collectionName = "users") {
    const col = collection(db, collectionName);
    const snapshot = await getDocs(col);
    return snapshot;
}

export async function returnDocMap(snapshot) {
    return await snapshot.docs.map(doc => doc.data())
}

export async function getDocMapFromCollection(collectionName = "users") {
    const col = collection(db, collectionName)
    const snapshot = await getDocs(col)
    return await snapshot.docs.map(doc => doc.data())