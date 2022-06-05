import { createContext, useContext, useState } from "react";
import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from "firebase/firestore"


const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {

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
        } else {
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
        return cartList.reduce((count, p) => count += p.price * p.quantity, 0)
    }

    const deleteCart = () => {
        setCartList([])
    }

    async function placeAnOrder() {
        let order = {}

        order.buyer = { name: 'Juan', lastName: 'Perez', email: 'JP@.com' }
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
            .then(resp => console.log(resp))
            .catch(err => console.log(err))
            .finally(() => deleteCart())


        const queryCollectionStock = collection(db, 'productos')
        const queryUpdateStock = await query(
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
            placeAnOrder
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider