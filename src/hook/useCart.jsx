import { useContext } from "react"
import { CartContext } from "../context/cart"


export const useCart = () =>{
    const {cart , addToCart, clearCart ,eliminar} = useContext(CartContext)

    return{cart, addToCart, clearCart,eliminar}
}