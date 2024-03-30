import React from 'react'

export default function AppBar({title, description}) {
  return (
        <div className="pt-5">
            <h1 className="font-normal text-3xl lg:text-4xl">
                {title}
            </h1>
            <p className="xl:w-2/5 lg:w-3/5 md:w-4/5 w-full leading-7 mt-5 font-light text-gray-700">
                {description}
            </p>
        </div>
    );
}
