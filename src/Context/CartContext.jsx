import { createContext, useContext, useState } from "react";


const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])

    function isInCart(id) {
        return cartList.some(p => p.id === id)
    }

    function addToCart(item) {
        if (isInCart(item.id)) {
            let i = cartList.findIndex(p => p.id === item.id);
            const newCartList = cartList;
            newCartList[i].quantity += item.quantity;
            setCartList(newCartList);
        } else{
            setCartList([
                ...cartList,
                item
            ]);
        }
    }

    function removeFromCart(id) {
        setCartList(cartList.filter(p => p.id !== id))
    }

    function totalQuantity() {
        return cartList.reduce((acc, p) => acc + p.quantity, 0)
    }

    function totalPrice() {
        return cartList.reduce((count, p) => count += p.price * p.quantity ,0)
    }

    const deleteCart = () => {
        setCartList([])
    }
    
    return (
        <CartContext.Provider value = { {
            cartList,
            addToCart,
            removeFromCart,
            totalQuantity,
            totalPrice,
            deleteCart
        } }>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider