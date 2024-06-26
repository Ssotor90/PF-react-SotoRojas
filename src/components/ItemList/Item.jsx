import useCount from "../../hooks/useCount";
import ItemCount from "../ItemCount/ItemCount";
import "./Item.css"


export default function item({ item }){
    const { count, increment, decrement } =useCount(0)
    const onAdd = (nombreDeItem, cantidadaLlevar) => {
        console.log("nombreDeItem: ",nombreDeItem)
        console.log("cantidadaLlevar :", cantidadaLlevar)
    }

    console.log({ count, item })

    return(
        <div className="item__container">
            <div className="item--img__container">
                <img className="item--img" src={item.image} alt={item.title}/>
            </div>
            <h2 className="item--title">{item.title}</h2>
            <p className="item--description">{item.description}</p>
            <p className="item--price">${item.price}</p>
            <div className="item--counter__container">
                <ItemCount
                stock={item.stock}
                count={count}
                increment={increment}
                decrement={decrement}
                />
            </div>
            <div className="item--cart__container">
                <button
                className="item--cart__button"
                onClick={()=> onAdd(item, count)}
                >
                    Agregar al carro
                </button>
            </div>        
        </div>
    )
}
