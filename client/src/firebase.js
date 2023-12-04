// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realestate-93066.firebaseapp.com",
  projectId: "realestate-93066",
  storageBucket: "realestate-93066.appspot.com",
  messagingSenderId: "428690344887",
  appId: "1:428690344887:web:cc88aa9ab72fb3934f7632"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);