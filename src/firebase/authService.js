import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth"
import auth from "./firebaseconfig";


export function handleCreateUser(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
}

export function handleSignOut() {
    return signOut(auth);
}