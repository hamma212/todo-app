// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAj6VxrW3Cac5Br10SvFc6Uvg_gjHE6RoI",
  authDomain: "homework-2-hamma212.firebaseapp.com",
  projectId: "homework-2-hamma212",
  storageBucket: "homework-2-hamma212.appspot.com",
  messagingSenderId: "435989141258",
  appId: "1:435989141258:web:1a8802b3cfe43ae3ea0cf3",
  measurementId: "G-0WV3K3R1MV"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// initalize components
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export const db = firebase.firestore();