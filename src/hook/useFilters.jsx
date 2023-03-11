import { useContext } from "react"
import { FilterContext } from "../context/filter"

export const useFilters =()=>{
    const {filters , setFilters}= useContext(FilterContext)

    const filtradoDeProductos =(products)=>{
       return products.filter( product =>{
        return(
            product.price >= filters.minPrice &&
            (
                filters.category === "all" ||
                filters.category === product.category
            )
        )
       }
             
            
        )
    }

    return{filters , setFilters , filtradoDeProductos}
}