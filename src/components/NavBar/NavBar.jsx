import CartWidget from "../CartWidget/CartWidget";
import CategoryList from "../CategoryList/CategoryList";
import "./NavBar.css"
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";


export default function NavBar() {
    const { cart } = useContext(CartContext);

    return (
    <div className="navbar__wrapper">
        <CategoryList />
        <div className={`${cart.length === 0 ? "hidden" : ""}`}>
            <Link to="/checkout">
                <CartWidget />
            </Link>
        </div>
    </div>
    );
}