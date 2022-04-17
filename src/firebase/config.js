// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBT5GxskgasW2zVvWdKzqs-kkLi8XydWoc",
  authDomain: "gypsy-store.firebaseapp.com",
  projectId: "gypsy-store",
  storageBucket: "gypsy-store.appspot.com",
  messagingSenderId: "70170319083",
  appId: "1:70170319083:web:6d045f84e13e674e3946ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const db = getFirestore(app);

