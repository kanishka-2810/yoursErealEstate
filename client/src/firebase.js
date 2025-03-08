// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "yours-erealstate.firebaseapp.com",
  projectId: "yours-erealstate",
  storageBucket: "yours-erealstate.firebasestorage.app",
  messagingSenderId: "826265479185",
  appId: "1:826265479185:web:e967e093a0dde8ce6a29b0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);