import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyApUi9PZGbmZQqNSwwmL9R7ei_W9pejwLE",
    authDomain: "e-commerce-95f71.firebaseapp.com",
    projectId: "e-commerce-95f71",
    storageBucket: "e-commerce-95f71.appspot.com",
    messagingSenderId: "1009384635778",
    appId: "1:1009384635778:web:e5b0a256c3201c4cd2a39b"
};

initializeApp(firebaseConfig);

const db = getFirestore()
const auth = getAuth()

export { db, auth}
