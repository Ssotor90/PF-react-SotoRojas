import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList";
import useProducts from "../../hooks/useProducts";

function ItemListContainer({ saludo }){
    const { isLoading, products } = useProducts()

    if(isLoading) return <h1>Cargando...</h1>


    return(
        <div className="itemListContainer__style">
            <h1>{saludo}</h1>
            <ItemList products={products} />
        </div>
    )
}
export default ItemListContainer;