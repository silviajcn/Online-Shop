import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCjS7g2SWhdOMVDo268nzqZj6TohZl05wk",
  authDomain: "prueba-tecnica-3.firebaseapp.com",
  projectId: "prueba-tecnica-3",
  storageBucket: "prueba-tecnica-3.appspot.com",
  messagingSenderId: "1018502898976",
  appId: "1:1018502898976:web:2d226002c4f9c30eb36345"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();

//llevar la base de datos de firebase a una constante y luego exportarla
const db = getFirestore();

export {
    app,
    google,
    facebook,
    db
}