import { createContext, useContext, useState } from "react";
import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from "firebase/firestore"


const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])
    const [totalProducts, setTotalProducts] = useState(0)

    function isInCart(id) {
        return cartList.some(p => p.id === id)
    }

    function addToCart(item) {
        if (isInCart(item.id)) {
            let i = cartList.findIndex(p => p.id === item.id);
            const newCartList = cartList;
            newCartList[i].quantity += item.quantity;
            updateCart(newCartList);
        } else {
            updateCart([
                ...cartList,
                item
            ]);
        }
    }

    function updateCart(arr){
        setCartList(arr)
        setTotalProducts(
            arr.map(p => p.quantity)
            .reduce((a, p) => a + p, 0)
        )
    }
    
    function totalQuantity() {
        return cartList.reduce((acc, p) => acc + p.quantity, 0)
    }
    function removeFromCart(id) {
        updateCart(cartList.filter(p => p.id !== id))
    }

    function totalPrice() {
        return cartList.reduce((count, p) => count += p.price * p.quantity, 0)
    }

    const deleteCart = () => {
        setCartList([])
    }

    async function placeAnOrder(buyer) {
        let order = {}

        order.buyer = { buyer }
        order.total = totalPrice()

        order.items = cartList.map(p => {
            return {
                product: p.id,
                name: p.name,
                price: p.price * p.quantity,
                quantity: p.quantity
            }
        })
        const db = getFirestore()
        const queryCollection = collection(db, 'orders')
        addDoc(queryCollection, order)
            .catch(err => console.log(err))
            .finally(() => deleteCart())


        const queryCollectionStock = collection(db, 'productos')
        const queryUpdateStock = query(
            queryCollectionStock,
            where(documentId(), 'in', cartList.map(p => p.id))
        )

        const batch = writeBatch(db)

        await getDocs(queryUpdateStock)
            .then(resp => { resp.docs.forEach(res => batch.update(res.ref, { stock: res.data().stock - cartList.find(p => p.id === res.id).quantity })) })
            .catch(err => console.log(err))
            .finally(() => batch.commit())
    }




    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            removeFromCart,
            totalQuantity,
            totalPrice,
            deleteCart,
            placeAnOrder,
            totalProducts
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider