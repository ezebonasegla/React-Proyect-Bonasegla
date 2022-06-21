import { useState } from "react";
import "./ItemCount.css";
import { faPlus, faMinus, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ItemCount({ stock, initial, onAdd, handleInputType }) {
  const [quantity, setQuantity] = useState(initial);

  function increase() {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  }

  function decrease() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  function addToCart() {
    onAdd(quantity);
    handleInputType();
  }

  return (
    <div className="item-count-container">
      <div className="count-container">
        <button
          className="button-container"
          onClick={decrease}
          disabled={quantity <= 1 ? true : null}
        >
          <FontAwesomeIcon icon={faMinus} />
        </button>
        {quantity}
        <button
          className="button-container"
          onClick={increase}
          disabled={quantity === stock ? true : null}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      {stock > 0 ? 
      <button className="button-cart"
        onClick={addToCart}><span> <FontAwesomeIcon icon={faCartPlus} /> </span> Agregar al carrito</button>
      :
      <button className="button-cart-no-stock"> Sin Stock </button>}
    </div>
  );
}
