// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:  import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-7e941.firebaseapp.com",
  projectId: "mern-blog-7e941",
  storageBucket: "mern-blog-7e941.appspot.com",
  messagingSenderId: "511468461443",
  appId: "1:511468461443:web:cd47487c21febe4968aab6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);