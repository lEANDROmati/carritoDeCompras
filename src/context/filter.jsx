import { createContext, useState } from "react"


export const FilterContext = createContext()

export function FilterProvider({children}){
    const [filters , setFilters] = useState({
        category : "auriculares",
        minPrice : 0
    })

    return(
        <FilterContext.Provider value={{
            filters,
            setFilters
        }}>
            {children}
        </FilterContext.Provider>
    )
}