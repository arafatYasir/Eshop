// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKOdjVu8VMRd3XhEznbAXQ54_pqwQume8",
  authDomain: "e-shop-ce907.firebaseapp.com",
  projectId: "e-shop-ce907",
  storageBucket: "e-shop-ce907.firebasestorage.app",
  messagingSenderId: "824513045240",
  appId: "1:824513045240:web:244ad7e710075f595e510d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);