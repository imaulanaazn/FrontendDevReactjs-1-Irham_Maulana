import { createContext, useState } from "react";

const initialResto = [];

export const FilteredRestoContext = createContext({
    filteredRestaurants: [],
    setFilteredRestaurants: ()=>{}
})

const FilteredRestoWrappper = ({children})=>{
    const [filteredRestaurants, setFilteredRestaurants] = useState(initialResto)

    return (
        <FilteredRestoContext.Provider value={{filteredRestaurants, setFilteredRestaurants}}>
            {children}
        </FilteredRestoContext.Provider>
    )
}

export default FilteredRestoWrappper