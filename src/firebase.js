import { initializeApp } from 'firebase/app';
let
  resolve,
  firebaseInstance,
  firestoreInstance

const firebaseConfig = {
    apiKey: "AIzaSyBR3d_ndeIBTSodCxAz4oofivbTU7Fjy9Q",
    authDomain: "philoapp-77b03.firebaseapp.com",
    databaseURL: "https://philoapp-77b03-default-rtdb.firebaseio.com",
    projectId: "philoapp-77b03",
    storageBucket: "philoapp-77b03.appspot.com",
    messagingSenderId: "893275799967",
    appId: "1:893275799967:web:6633e25241350951473daa",
    measurementId: "G-PFWQ71TMKF"
};

const promise = new Promise(res => resolve = res)

export async function initialize() {
    if (firebaseInstance) return firebaseInstance

    firebaseInstance = initializeApp(firebaseConfig)
    resolve(firebaseInstance)
    return firebaseInstance
}

export async function getInstance () {
    if (firebaseInstance) return firebaseInstance

    return promise
}

export async function getFirestore() {
    if (firestoreInstance) return firestoreInstance

    const { getFirestore } = import('firebase/firestore')
    await getInstance()
    firestoreInstance = getFirestore()
    return firestoreInstance
}

export default {
    initialize,
    getInstance,
    getFirestore,
}