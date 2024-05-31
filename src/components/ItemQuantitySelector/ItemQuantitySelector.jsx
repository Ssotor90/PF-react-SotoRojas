import React, { useState } from 'react';
import "./ItemQuantitySelector.css"


export default function ItemQuantitySelector({ stock, onAddToCart }) {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
    if (quantity < stock) {
        setQuantity(quantity + 1);
    }
    };

    const decrement = () => {
    if (quantity > 1) {
        setQuantity(quantity - 1);
    }
    };

    const handleAddToCart = () => {
    onAddToCart(quantity);
    };

    return (
    <div className="item-quantity-selector">
        <div className="quantity-controls">
        <button onClick={decrement} disabled={quantity <= 1}>-</button>
        <span>{quantity}</span>
        <button onClick={increment} disabled={quantity >= stock}>+</button>
        </div>
        <button className="add-to-cart" onClick={handleAddToCart} disabled={stock === 0}>
        Agregar al carro
        </button>
    </div>
    );
}