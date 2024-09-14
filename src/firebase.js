// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXaPTV7FuHIV4VwyiCQkVL3OBCbfhG7aY",
  authDomain: "pixonoids-freshman-2k24.firebaseapp.com",
  projectId: "pixonoids-freshman-2k24",
  storageBucket: "pixonoids-freshman-2k24.appspot.com",
  messagingSenderId: "925056208459",
  appId: "1:925056208459:web:69839014fc5833b66047ce",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
