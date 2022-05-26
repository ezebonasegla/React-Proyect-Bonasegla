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

    const deleteItem = (id) => {
        const newCart = [...cartList];
        let i = newCart.findIndex((p) => p.id === id);
        newCart.splice(i,1);

        setCartList([...newCart])
    }

    const deleteCart = () => {
        setCartList([])
    }
    
    return (
        <CartContext.Provider value = { {
            cartList,
            addToCart,
            deleteItem,
            deleteCart
        } }>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider