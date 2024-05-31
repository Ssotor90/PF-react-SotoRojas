import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../main';
import './ItemDetail.css';
import ItemQuantitySelector from '../ItemQuantitySelector/ItemQuantitySelector';
import CartContext from '../../context/CartContext';

export default function ItemDetail() {
    const { itemId } = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const { addToCart } = useContext(CartContext); 

    useEffect(() => {
    const fetchItem = async () => {
        try {
        const itemDoc = doc(db, 'items', itemId); 
        const itemSnapshot = await getDoc(itemDoc);

        if (itemSnapshot.exists()) {
            setItem({ id: itemSnapshot.id, ...itemSnapshot.data() });
        } else {
        }
        } catch (error) {
        } finally {
        setLoading(false);
        }
    };

    fetchItem();
    }, [itemId]);

    const handleAddToCart = (quantity) => {
    if (item) {
        addToCart(item, quantity);
        console.log(`Added ${quantity} of item ${item.title} to cart.`);
    }
    };

    if (loading) {
    return <div>Cargando...</div>;
    }

    if (!item) {
    return <div>Item no encontrado</div>;
    }

    return (
    <div className="item-detail">
        <h2 className="item--title">{item.title}</h2>
        <div className="item--img__container">
        <img className="item--img" src={item.image} alt={item.title} />
        </div>
        <p className="item--description">{item.description}</p>
        <p className="item--price">${item.price}</p>
        <div className="item--properties">
        <div>Category: {item.category}</div>
        <div>Stock: {item.stock}</div>
        </div>
        <ItemQuantitySelector stock={item.stock} onAddToCart={handleAddToCart} />
    </div>
    );
}