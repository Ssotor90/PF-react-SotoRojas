import "./Brand.css"
import { NavLink } from "react-router-dom"

function Brand() {
    return(
        <NavLink to="/" className={({ isActive }) =>
        isActive ? "brand__style" : "brand__style"}
        >RobCo Industries</NavLink>
    );
}

export default Brand;