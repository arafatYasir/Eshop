import { createUserWithEmailAndPassword } from "firebase/auth"
import auth from "./firebaseconfig"
import store from "../store"
import { clearUser, setUser } from "../slices/authSlice"

// Listen for auth changes and update redux
auth.onAuthStateChanged((user) => {
    if(user) {
        store.dispatch(setUser({
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL
        }));
    }
    else {
        store.dispatch(clearUser());
    }
})

export function handleCreateUserWithEmailAndPassword(auth, email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
}