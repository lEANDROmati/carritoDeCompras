import { useContext } from "react"
import { CartContext } from "../context/cart"


export const useCart = () =>{
    const {cart , addToCart, clearCart } = useContext(CartContext)

    return{cart, addToCart, clearCart}
}