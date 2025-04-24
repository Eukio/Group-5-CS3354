import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBIYJ17JkxfQc_HeQrF-Wd8GyMYYYcQhuA",
  authDomain: "utd-bulletin-board.firebaseapp.com",
  projectId: "utd-bulletin-board",
  storageBucket: "utd-bulletin-board.firebasestorage.app",
  messagingSenderId: "73428660381",
  appId: "1:73428660381:web:d54759766ff2e784a1a474",
  measurementId: "G-D6G0CJ3F7F"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);