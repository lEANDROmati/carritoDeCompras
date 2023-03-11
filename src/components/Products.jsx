
import { useCart } from "../hook/useCart"
import "./products.css"

export const Products = ({products}) => {
  const {addToCart} = useCart()


  return (
    <div className="card" >
      <ul className="container-imagen">
        {
          products.map( product => (
            <li key={product.id} className="list-products" >
              <h3>{product.title}</h3>
              <img src={product.imagen} alt={product.title} />
              <div className="priceAdd">
              <span> $ {product.price}</span>
              <button onClick={() => addToCart(product)} >añadir al carrito</button>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
