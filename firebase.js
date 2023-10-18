// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-YYHqBxHR_qBnxuehMvwy6dQtZF3k5xI",
  authDomain: "task7-1p-26b6b.firebaseapp.com",
  databaseURL: "https://task7-1p-26b6b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "task7-1p-26b6b",
  storageBucket: "task7-1p-26b6b.appspot.com",
  messagingSenderId: "578177180775",
  appId: "1:578177180775:web:e23a9562b2213ee320e0c2",
  measurementId: "G-TZLTLMC68E"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export const googleProvider = new GoogleAuthProvider();



export { app, analytics, auth, db };

