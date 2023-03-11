import { useFilters } from "../hook/useFilters"
import "./filters.css"

export const Filters = () => {
  const {filters , setFilters} =useFilters()

  const handlePrice =(event)=>{
    setFilters(prevState =>({
      ...prevState,
      minPrice : event.target.value
    }))
  }

  const handleCategory =(event)=>{
    setFilters(prevState =>({
      ...prevState,
      category : event.target.value
    }))
  }
  return (
    <section className="filtro-container">
        <div className="price">
            <label htmlFor="price">Precio minimo : </label>
            <input type="range" max="1000" min="0" onChange={handlePrice} />
            <span>${filters.minPrice}</span>
        </div>
        <div className="category">
            <label htmlFor="category"> Categoria </label>
            <select  id="category" onChange={handleCategory} >
                <option value="all">todas</option>
                <option value="celular"> Celulares </option>
                <option value="notebooks"> Notebooks </option>
                <option value="auriculares"> Auriculares </option>
            </select>
        </div>
    </section>
  )
}
