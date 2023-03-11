import { useState } from "react"
import { Cart } from "./components/Cart"
import { Hearder } from "./components/Hearder"
import { Products } from "./components/Products"
import { CartProvider } from "./context/cart"
import {products as initialState} from "./data/products.json"
import { useFilters } from "./hook/useFilters"

function App() {
  const[products] = useState(initialState) 
  const {filtradoDeProductos }=useFilters()

  const productoFiltrado = filtradoDeProductos(products)

  return(
    <CartProvider>
     <Hearder/>
     <Cart/>
     <Products products={productoFiltrado} />
    </CartProvider>
  )
}
export default App
