import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import "./Item.css"


function Item({ product }) {
  return (
    <div className="card-container">
      <div className="card" >
        <Link to={`/detail/${product.id}/${product.name}`}>
          <img className="card-image" src={product.img} alt=""></img>
          <div>{product.name}</div>
        </Link>
        <div>${product.price}</div>
        <br></br>
        <ItemCount stock={product.stock} initial={1} onAdd={(count) => alert(`Has agregado ${count} ${product.name} al carrito`)} />
      </div>
    </div>
  )
}

export default Item
