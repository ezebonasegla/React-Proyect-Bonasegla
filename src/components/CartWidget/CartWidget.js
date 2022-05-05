import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const CartWidget = () => {

    return(
        <div className="cart-widget">
            <FontAwesomeIcon icon={faCartShopping} className="cart-icon" />
            <span className="qty-display">0</span>
        </div>
    );
};

export default CartWidget;