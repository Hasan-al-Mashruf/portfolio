import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDsPAseMFciFfc6pc4iRayVHHOD6lWNHfU",
  authDomain: "portfolio-51169.firebaseapp.com",
  projectId: "portfolio-51169",
  storageBucket: "portfolio-51169.appspot.com",
  messagingSenderId: "420495720266",
  appId: "1:420495720266:web:9f6060dd2c78c0a3b70bb3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);
export { db, storage, auth };
