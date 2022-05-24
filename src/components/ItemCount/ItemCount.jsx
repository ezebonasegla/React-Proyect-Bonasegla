import { useState } from "react";
import "./ItemCount.css";

export default function ItemCount({ stock, initial, onAdd, handleInputType }) {
  const [quantity, setQuantity] = useState(initial);

  function increase() {
    if ( quantity < stock ) {
      setQuantity(quantity + 1);
    }
  }

  function decrease() {
    if ( quantity > 1 ) {
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
          -
        </button>
        {quantity}
        <button
          className="button-container"
          onClick={increase}
          disabled={quantity === stock ? true : null}
        >
          +
        </button>
      </div>
      <button className="button-cart"
      onClick={addToCart}>Agregar al carrito</button>
    </div>
  );
}
