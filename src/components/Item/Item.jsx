import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import "./Item.scss"
import { useCartContext } from "../../Context/CartContext"


function Item({ product }) {

const { addToCart } = useCartContext()

function handleInputType(){}

function onAdd(quantity) {
  alert(`${quantity} ${product.name} agregados al carrito`)
  addToCart({...product, quantity})
}

  return (
    <div className="card-container">
      <div className="card" >
        <Link to={`/detail/${product.id}/${product.name}`} className='link'>
          <img className="p-image" src={product.img} alt=""></img>
          <div className="p-name">{product.name}</div>
        </Link>
        <div className="p-info">
          <h4 className="p-price">${product.price}</h4>
          <h4 className="p-size">{product.size}<span> ml</span></h4>
          </div>
        <br></br>
        <div className="card-button">
          <ItemCount stock={product.stock} initial={1} onAdd={onAdd} handleInputType={handleInputType} />
        </div>
      </div>
    </div>
  )
}

export default Item
