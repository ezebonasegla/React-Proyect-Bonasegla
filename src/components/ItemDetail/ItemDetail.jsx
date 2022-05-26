import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { BuyButton } from '../BuyButton/BuyButton'
import './ItemDetail.css'
import { useCartContext } from "../../Context/CartContext"

const ItemDetail = ({ product }) => {

  const [inputType, setInputType] = useState('itemCount');
  const {addToCart} = useCartContext()

  function handleInputType() {
    setInputType('buyButtons');
  }

  function onAdd(quantity) {
    alert(`${quantity} ${product.name} agregados al carrito`)
    addToCart({...product, quantity})
  }

  return (
    <div className="detail-container">
      <div className="detail">
        <img src={product.img} alt="" className="detail-img" />
        <div className="detail-item">
          <h2>{product.name}</h2>
          <p>$ {product.price}</p>
          {inputType === 'itemCount'
            ?
            <ItemCount stock={product.stock} initial={1} onAdd={onAdd} handleInputType={handleInputType} />
            :
            <BuyButton />}
        </div>
      </div>
    </div>
  )
}

export default ItemDetail

