// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "portfolio-51169.firebaseapp.com",
  projectId: "portfolio-51169",
  storageBucket: "portfolio-51169.appspot.com",
  messagingSenderId: "420495720266",
  appId: "1:420495720266:web:9f6060dd2c78c0a3b70bb3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
