import '../App.css';
import { useContext, useEffect, useState } from 'react';
import RestaurantCard from '../components/cards/RestaurantCard';
import AppLayout from '../components/layouts/AppLayout';
import AppBar from '../components/appbar';
import FilterBar from '../components/appbar/FilterBar';
import { FilteredRestoContext } from '../context/RestoContext';

const appbar = {
  title:"Restaurants",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
}

function App() {
  const {filteredRestaurants} = useContext(FilteredRestoContext)
  const [sliceCount, setSliceCount] = useState(8);

  return (
    <AppLayout appbar={<AppBar title={appbar.title} description={appbar.description}/>}>
      <FilterBar />
      <h2 className='mt-16 text-xl lg:text-2xl mb-10'>All Restaurants</h2>
      <section className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 sm:gap-x-4 sm:gap-y-10 md:gap-x-5 md:gap-y-16">
        {
          filteredRestaurants?.length !== 0
          ?
          filteredRestaurants?.slice(0, sliceCount).map((data, index) => {
            return (
              <RestaurantCard data={data} key={index} />
              )
            })
            :
            <p className='text-slate-700'>Maaf, restoran tidak ditemukan</p>
          }
      </section>

      {
          sliceCount < filteredRestaurants?.length &&
          <button
              className="mx-auto block w-full md:w-[300px] mt-10 border border-blue-950 text-blue-950 p-2 rounded-none uppercase text-sm hover:bg-blue-950 hover:text-white transition-all "
              onClick={() => {
                  setSliceCount((prev)=>setSliceCount(prev + 8))
              }}>
              Load More
          </button>
      }
    </AppLayout>
  );
}

export default App;
