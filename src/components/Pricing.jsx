import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Pricing() {
    const [data, setData] = useState([
    { id: 1, name: "Basic", price: "$1k/per-month", path: "/pricing/basic" },
    { id: 2, name: "Standard", price: "$3k/per-month", path: "/pricing/standard" },
    { id: 3, name: "Premium", price: "custom", path: "/pricing/premium" },
  ]);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center lg:px-4 w-full">
      <h1 className='text-white font-bold text-2xl pb-4 text-center'>Choose a Plan</h1>

      <ul className='flex flex-col gap-y-4 lg:flex-row lg:gap-x-5 w-full justify-center items-center'>
        {data.map((item) => (
          <li key={item.id} className="w-full sm:max-w-lg">
            <div className='bg-white w-full h-auto p-4 flex flex-col items-center rounded-tl-lg shadow-md'>
              <h1 className='font-semibold text-2xl pb-2'>{item.name}</h1>
              <h3 className='text-gray-700 pb-3'>{item.price}</h3>
              <button
                onClick={() => navigate(item.path)}
                className='bg-gradient-to-r from-blue-800 to-blue-950 text-white rounded w-32 h-8 cursor-pointer'
              >
                Get Started
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Pricing
