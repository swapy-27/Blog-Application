// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQZYEI8VwLnbzxGaKiou6P_1-6fetMs_U",
  authDomain: "react-hooks-blog-8f5d3.firebaseapp.com",
  projectId: "react-hooks-blog-8f5d3",
  storageBucket: "react-hooks-blog-8f5d3.appspot.com",
  messagingSenderId: "426840629005",
  appId: "1:426840629005:web:6471cb3145275a58891a44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;