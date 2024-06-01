import { useContext } from "react";
import { Link } from "react-router-dom";
import CartDetails from "../CartDetails/CartDetails";
import CartContext from "../../context/CartContext";
import "./CartContainer.css"

export default function CartContainer() {
    const { cart, clearCart, cartTotal } = useContext(CartContext);

    return (
        <div className="cart-container">
            <div className="cart-content">
                <h2 className="cart-title">Mi Carrito</h2>
                {cart.length === 0 ? (
                    <p>No hay productos en el carrito</p>
                ) : (
                    <CartDetails cart={cart} cartTotal={cartTotal} />
                )}
            </div>
            <div className="cart-actions">
                <button className="cart-button" onClick={clearCart}>
                    Limpiar carrito
                </button>
                <Link className="cart-button" to="/checkout">
                    Terminar mi compra
                </Link>
            </div>
        </div>
    );
}