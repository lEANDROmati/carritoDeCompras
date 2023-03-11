import { Filters } from "./Filters"
import "./header.css"


export const Hearder = () => {
  return (
    <header className="header">
     <div className="title"> 
      <h1>Tienda</h1>
     </div>
      <Filters/>
      
    </header>
  )
}
