import React, { useContext, useEffect, useState } from 'react'
import { FilteredRestoContext } from '../../context/RestoContext';

export default function FilterBar() {
  const {filteredRestaurants, setFilteredRestaurants } = useContext(FilteredRestoContext)
  const [restaurants, setRestaurants] = useState([]);
  const [filter, setFilter] = useState({open:false, price:0, category: ""})

  function filterRestaurant(restaurants){
    const filteredRestaurants = restaurants.filter((resto) =>
      filter.open ? resto.price > Number(filter.price) && resto.open : resto.price > Number(filter.price)
    );
    setFilteredRestaurants(filteredRestaurants);
  }

  useEffect(()=>{
    async function getRestaurants() {
      const response = await fetch(`https://restaurant-api.dicoding.dev/search?q=${filter.category}`);
      const result = await response.json();

      const tempRestaurant = result.restaurants.map((resto) => {
        const randomPrice = Math.round(Math.random() * 1500000);
        const randomStatus = Math.round(Math.random()) * 5 % 2 === 0;

        return { ...resto, price: randomPrice, open: randomStatus };
      });
      setRestaurants(tempRestaurant)
    }
    getRestaurants()
  },[filter.category])

useEffect(()=>{
  filterRestaurant(restaurants)
},[filter, restaurants])

const onClearFilter = () => {  
  setFilter({ open: false, price: 0, category: "" })
  document.getElementById('price').value = "0"
  document.getElementById('categories').value = ""
};
const handleOpenChange = (event) => setFilter((prev) => ({ ...prev, open: event.target.checked }));
const handlePriceChange = (event) => setFilter((prev) => ({ ...prev, price: event.target.value }));
const handleCategoryChange = (event) => setFilter((prev) => ({ ...prev, category: event.target.value }));

  return (
    <div className="filter-section border-y py-3 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <p className='mr-10'>Filter By : </p>
        <div className="filter-inputs flex-1 flex flex-wrap gap-x-4">
          {/* Open Now Filter */}
          <div className="open-now-filter flex gap-2">
            <input type="radio" id="open-now" name="open-now" className="form-radio" checked={filter.open} onChange={handleOpenChange}/>
            <label for="open-now">Open Now</label>
          </div>
          {/* Price Filter */}
          <div className="price-filter">
            <select name="price" id="price" className="form-select" onChange={handlePriceChange}>
              <option value="0">Select Price</option>
              <option value="0">Rp {'>'} 0</option>
              <option value="100000">Rp {'>'} 100.000</option>
              <option value="250000">Rp {'>'} 250.000</option>
              <option value="500000">Rp {'>'} 500.000</option>
              <option value="750000">Rp {'>'} 750.000</option>
              <option value="1000000">Rp {'>'} 1000.000</option>
            </select>
          </div>
          {/* Categories Filter */}
          <div className="categories-filter">
            <select name="categories" id="categories" className="form-select" onChange={handleCategoryChange}>
              <option value="">Select Category</option>
              <option value="italia">Italia</option>
              <option value="modern">Modern</option>
              <option value="sop">Sop</option>
              <option value="jawa">Jawa</option>
              <option value="sunda">Sunda</option>
              <option value="bali">Bali</option>
              <option value="spanyol">Spanyol</option>
            </select>
          </div>
        </div>
        <div className="clear-button">
          <button 
            type="button" 
            className="clear-filter bg-blue-950 py-2 px-5 text-white border hover:bg-white hover:border-blue-950 hover:text-blue-950 transition-all" 
            onClick={onClearFilter}>
            Clear Filters
          </button>
        </div>
      </div>
  )
}
