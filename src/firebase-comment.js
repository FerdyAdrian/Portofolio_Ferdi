// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
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

// Cek apakah app sudah diinisialisasi
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0]; // Gunakan instance yang sudah ada
}

const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };