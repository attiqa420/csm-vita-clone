import React from 'react'
import { BsDot } from "react-icons/bs";

function PlanDetails({main, sub1, p1, sub2, p2, sub3, p3, sub4, l1, l2, l3}) {
  return (
    <div>
       <div className='lg:col-span-1 col-span-2'>
<h1 className='font-bold text-2xl pb-4'>{main}</h1>
<h2 className='font-semibold text-lg pb-2'>{sub1}</h2>
<p className='text-base text-gray-800 pb-3'>{p1}</p>
<h2 className='font-semibold text-lg pb-2'>{sub2}</h2>
<p className='text-base text-gray-800 pb-3'>{p2}</p>
<h2 className='font-semibold text-lg pb-2'>{sub3}</h2>
<p className='text-base text-gray-800 pb-3'>{p3}</p>
<h1 className='font-bold text-2xl pb-4'>{sub4}</h1>
    <ul>
        <li className='text-base text-gray-800 pb-3 flex gap-1 items-center'><BsDot className='size-8' />{l1}</li>
        <li  className='text-base text-gray-800 pb-3 flex gap-1 items-center'><BsDot className='size-8' />{l2}</li>
        <li  className='text-base text-gray-800 pb-3 flex gap-1 items-center'><BsDot className='size-8' />{l3}</li>
    </ul>

        </div>
    </div>
  )
}

export default PlanDetails
