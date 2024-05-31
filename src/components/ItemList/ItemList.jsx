import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useProducts } from '../../hooks/useProducts';
import './Item.css';

export default function ItemList() {
    const { categoryName } = useParams();
    const { products, loading } = useProducts();

    if (loading) {
    return <div>Cargando...</div>;
    }

    const filteredProducts = categoryName 
    ? products.filter(product => product.category.toLowerCase() === categoryName.toLowerCase())
    : products;

    return (
    <div>
        <div className="item--list__container">
        {filteredProducts.map((product) => (
            <div key={product.id} className="item__container">
            <Link to={`/item/${product.id}`}>
                <h2 className="item--title">{product.title}</h2>
                <div className="item--img__container">
                <img className="item--img" src={product.image} alt={product.title} />
                </div>
                <p className="item--description">{product.description}</p>
                <p className="item--price">${product.price}</p>
            </Link>
            </div>
        ))}
        </div>
    </div>
    );
}