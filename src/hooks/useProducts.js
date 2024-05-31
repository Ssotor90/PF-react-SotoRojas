import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../main";

export function useProducts() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    const fetchProducts = async () => {
        try {
        const productsCollection = collection(db, "items");
        const productsSnapshot = await getDocs(productsCollection);
        const productsList = productsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setProducts(productsList);
        } catch (error) {
        console.error("Error fetching products: ", error);
        } finally {
        setLoading(false);
        }
    };

    fetchProducts();
    }, []);

    return { products, loading };
}