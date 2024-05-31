import "./CategoryList.css"
import {Link} from 'react-router-dom'

const MIS_RUTAS = [
    {
        path: "category/hogar",
        label: "Hogar",
    },
    {
        path: "category/seguridad",
        label: "Seguridad",
    },
]

function CategoryList(){
    return (
        <nav>
            <ul className="category__list">
                {MIS_RUTAS.map((ruta) => (
                    <li key={ruta.path}>
                        <Link to = {ruta.path}>{ruta.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default CategoryList;