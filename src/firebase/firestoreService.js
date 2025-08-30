import { collection, doc, getDocs, serverTimestamp, setDoc } from "firebase/firestore"
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

// Get all products
export const getProducts = async () => {
    try {
        const productsCollectionRef = collection(db, "Products");
        const snapshot = await getDocs(productsCollectionRef);

        const products = snapshot.docs.map(doc => {
            const product = doc.data();

            return {
                ...product,
                createdAt: product.createdAt ? product.createdAt.toDate().getTime() : null
            };
        })

        return products;
    }
    catch(e) {
        console.error(e.message);
        return [];
    }
}