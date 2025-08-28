import { collection, doc, serverTimestamp, setDoc } from "firebase/firestore"
import { db } from "./firebaseconfig"

// Function to save product
export const saveProduct = async (product) => {
    try {
        // Refference to "Products" collection
        const productsCollectionRef = collection(db, "Products");

        // Generating a new document with unique ID
        const newProductRef = doc(productsCollectionRef);

        // Adding server timestamp
        const productWithTimestamp = {
            ...product,
            createdAt: serverTimestamp()
        };

        // Saving the product
        await setDoc(newProductRef, productWithTimestamp);

        console.log("Product saved with ID: ", newProductRef.id);
        return newProductRef.id;
    }
    catch (e) {
        alert(e.message);
    }
}