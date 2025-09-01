import React from 'react'
import Pricing from './Pricing'
import bg from '../assets/images/bg1.webp'

function Banner({title, subtitle, description}) {
  return (
   <div className="w-full overflow-hidden bg-cover bg-center"
   style={{backgroundImage: `url(${bg})`}}
   >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 sm:px-10 lg:px-10 py-4 pt-28">
        <div className="pb-6 max-w-2xl">
          <h1 className="text-white font-bold text-2xl">
           {title}
          </h1>
          <h2 className="text-white py-3 font-bold text-xl">
            {subtitle}
          </h2>
          <p className="text-white py-3">
           {description}
          </p>
        </div>

        <div className="pb-6 w-full">
       <Pricing />
        </div>
      </div>
    </div>
  )
}

export default Banner
