import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.css'

function ItemDetail({product}) {
  return (
        <div className="detail-container">
          <div className="detail">
            <img src={product.img} alt="" className="detail-img"/>
            <div className="detail-item">
                <h2>{product.name}</h2>
                <p>$ {product.price}</p>
                <ItemCount stock={product.stock} initial={1} onAdd={(count)=> alert(`Has agregado ${count} ${product.name} a tu carrito`)}/>
            </div>
          </div>
        </div>
  )
}

export default ItemDetail

