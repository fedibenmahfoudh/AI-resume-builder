// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDErY18E_A6dN1lBKZNn_d7zl9r5dpM_is",
  authDomain: "ai-resume-b1aaa.firebaseapp.com",
  projectId: "ai-resume-b1aaa",
  storageBucket: "ai-resume-b1aaa.appspot.com",
  messagingSenderId: "768336323599",
  appId: "1:768336323599:web:fd438c42aee291aef82f7a",
  measurementId: "G-32Y94V0JPK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
