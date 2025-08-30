import { collection, doc, getDocs, query, serverTimestamp, setDoc, where } from "firebase/firestore"
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


// Get a specific product
export const getProduct = async (productId) => {
    try {
        const q = query(collection(db, "Products"), where("id", "==", productId));
        const snapshot = await getDocs(q);

        if(!snapshot.empty) {
            const doc = snapshot.docs[0].data();

            return {
                ...doc,
                createdAt: doc.createdAt ? doc.createdAt.toDate().getTime() : null
            };
        }
        else {
            console.error("No product found on id: ", productId);
            return;
        }
    }
    catch(e) {
        console.error(e.message);
        return null;
    }
}