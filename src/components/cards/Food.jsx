import React from 'react'
import { FaBowlFood } from "react-icons/fa6";
import { BiSolidDrink } from "react-icons/bi";



export default function Food({menus}) {
  return (
    <div className="border-b pb-5">
        {Object.keys(menus).map((key) => (
            <div key={key} className='mb-6'>
                <p className="mb-3 text-lg font-medium">{key}</p>
                <div className="flex items-center flex-wrap gap-4">
                    {
                        menus[key]?.map((food, index) => (
                            <button 
                                key={index} 
                                className="border border-blue-950 hover:bg-blue-950 flex gap-1 items-center py-2 px-5 text-blue-950 transition-all hover:text-white"
                                >
                                {key === 'drinks' ? <BiSolidDrink /> : <FaBowlFood />}      
                                {food.name}
                            </button>
                        ))
                    }
                </div>
            </div>
        ))}
    </div>
  )
}
