import { useId } from "react";
import { useCart } from "../hook/useCart";
import "./cart.css";

function CartItem({ imagen, price, title, quantity, addToCart,eliminar }){
  return(
    <li>
    <img
      className="imagen-cart"
      src={imagen}
      alt="img"
    />
    <div>
      <strong>{title}</strong> - ${price}
    </div>
    <footer>
      <small>{quantity}</small>
      <button onClick={eliminar} >Delete</button>
      <button onClick={addToCart}>+</button>
    </footer>
  </li>
  )
}

export const Cart = () => {
  const { cart, addToCart, clearCart, eliminar} = useCart();
  const cartCheckboxId = useId();
  return (
    <>
      <label htmlFor={cartCheckboxId} className="boton-cart">
        carrito
      </label>
      <input type="checkbox" id={cartCheckboxId} hidden /> 

      <aside className="card-cart">
        <ul>
        {cart.map(product => (  
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              eliminar={()=> eliminar(product.id)}
              
              {...product}
            />
          ))}
        </ul>
        <button className="limpiar" onClick={clearCart}>Limpiar Carrito </button>
      </aside>
    </>
  );
};
