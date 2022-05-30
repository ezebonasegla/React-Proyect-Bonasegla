import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';

const CartWidget = () => {
    const { totalQuantity, cartList } = useCartContext();

    return (
        <div className="cart-widget">
            <Link to="/cart">
                <FontAwesomeIcon icon={faCartShopping} className="cart-icon" /></Link>
                {cartList.length > 0 ?
                <span className="qty-display">{totalQuantity()}</span>
                : null}       
        </div>
    );
};

export default CartWidget;