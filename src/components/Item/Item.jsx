import ItemCount from "../ItemCount/ItemCount"
import "./Item.css"


function Item({name, type, price, img, stock}) {
  return (
    <div className="card-container"> 
        <div className="card" >
          <img className="card-image" src={img} alt=""></img>  
          <div>{name}</div>
          <div>${price}</div>
          <br></br>
          <ItemCount stock={stock} initial={1} onAdd={(count)=> alert(`Has agregado ${count} ${name} al carrito`)}/>
        </div>
    </div>
  )
}

export default Item
