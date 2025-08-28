import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAKOdjVu8VMRd3XhEznbAXQ54_pqwQume8",
  authDomain: "e-shop-ce907.firebaseapp.com",
  projectId: "e-shop-ce907",
  storageBucket: "e-shop-ce907.firebasestorage.app",
  messagingSenderId: "824513045240",
  appId: "1:824513045240:web:244ad7e710075f595e510d"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const auth = getAuth(app);

export default auth;