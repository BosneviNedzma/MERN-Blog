// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-60add.firebaseapp.com",
  projectId: "mern-blog-60add",
  storageBucket: "mern-blog-60add.appspot.com",
  messagingSenderId: "984593386464",
  appId: "1:984593386464:web:5e6ab38fc40f016949f985",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
