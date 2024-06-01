import { useContext, useState } from "react";
import CartDetails from "../CartDetails/CartDetails";
import CartContext from "../../context/CartContext";
import firebase from "firebase/compat/app";
import "./CartContainer.css";

export default function CartContainer() {
    const { cart, clearCart, cartTotal } = useContext(CartContext);
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        address: "",
        city: "",
        postalCode: "",
        country: "",
        phoneNumber: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const ordersCollection = firebase.firestore().collection("orders");
            const newOrderRef = await ordersCollection.add({
                name: userData.name,
                email: userData.email,
                address: userData.address,
                city: userData.city,
                postalCode: userData.postalCode,
                country: userData.country,
                phoneNumber: userData.phoneNumber,
                cartItems: cart,
                total: cartTotal,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            });
        } catch (error) {
            console.error("Error al crear la orden:", error);
        }
    };

    const handleClearCart = () => {
        clearCart();
    };

    return (
        <div className="cart-container">
            <div className="cart-details">
                <h2 className="cart-title">Mi Carrito</h2>
                {cart.length === 0 ? (
                    <p>No hay productos en el carrito</p>
                ) : (
                    <CartDetails cart={cart} cartTotal={cartTotal} />
                )}
            </div>
            <div className="cart-content">
                <form onSubmit={handleSubmit} className="cart-form">
                    <h3>Detalles del comprador</h3>
                    <label htmlFor="name">Nombre:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={userData.name}
                        onChange={handleInputChange}
                        required
                    />
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={userData.email}
                        onChange={handleInputChange}
                        required
                    />
                    <label htmlFor="address">Dirección:</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={userData.address}
                        onChange={handleInputChange}
                        required
                    />
                    <label htmlFor="city">Ciudad:</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        value={userData.city}
                        onChange={handleInputChange}
                        required
                    />
                    <label htmlFor="postalCode">Código Postal:</label>
                    <input
                        type="text"
                        id="postalCode"
                        name="postalCode"
                        value={userData.postalCode}
                        onChange={handleInputChange}
                        required
                    />
                    <label htmlFor="country">País:</label>
                    <input
                        type="text"
                        id="country"
                        name="country"
                        value={userData.country}
                        onChange={handleInputChange}
                        required
                    />
                    <label htmlFor="phoneNumber">Número de Teléfono:</label>
                    <input
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={userData.phoneNumber}
                        onChange={handleInputChange}
                        required
                    />
                    <button type="submit">Completar compra</button>
                    <button type="button" onClick={handleClearCart}>Limpiar carrito</button>
                </form>
            </div>
        </div>
    );
}
