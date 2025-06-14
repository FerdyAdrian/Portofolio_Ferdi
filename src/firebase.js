// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBq8hcQYBi7FKyQGh-1bSGPRW807kvUHGc",
  authDomain: "belajar-firebase-cebfb.firebaseapp.com",
  projectId: "belajar-firebase-cebfb",
  storageBucket: "belajar-firebase-cebfb.firebasestorage.app",
  messagingSenderId: "525737983238",
  appId: "1:525737983238:web:5bd21f0205ea7c2358f287",
  measurementId: "G-3TTDSVSV3F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db, collection, addDoc };