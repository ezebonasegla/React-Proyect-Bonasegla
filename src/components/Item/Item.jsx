import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import "./Item.scss"


function Item({ product }) {
  return (
    <div className="card-container">
      <div className="card" >
        <Link to={`/detail/${product.id}/${product.name}`} className='link'>
          <img className="card-image" src={product.img} alt=""></img>
          <div className="p-name">{product.name}</div>
        </Link>
        <div>${product.price}</div>
        <br></br>
        <ItemCount stock={product.stock} initial={1} onAdd={(quantity) => alert(`Has agregado ${quantity} ${product.name} al carrito`)} />
      </div>
    </div>
  )
}

export default Item
