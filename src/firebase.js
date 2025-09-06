// src/firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
// ここに、先ほどコピーしたfirebaseConfigオブジェクトを貼り付けます
const firebaseConfig = {
    apiKey: "AIzaSyCM0Yucz0nBnnSy7AKw67O6ILloAgsHZ5M",
    authDomain: "kakeibo-app-react-d139a.firebaseapp.com",
    projectId: "kakeibo-app-react-d139a",
    storageBucket: "kakeibo-app-react-d139a.firebasestorage.app",
    messagingSenderId: "311678666389",
    appId: "1:311678666389:web:d05db2779434f514e03d9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// FirestoreとAuthのインスタンスを取得してエクスポート
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(); // Google認証プロバイダ
