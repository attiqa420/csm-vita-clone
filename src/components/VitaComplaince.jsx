import React from 'react'

function VitaComplaince({heading1, p1, heading2, p2, heading3, p3, li1, li2, li3}) {
  return (
    <div className='container mx-auto'>
          <div className="flex flex-col  items-start gap-10 py-10 px-4">
      <h1 className='font-bold text-xl '>{heading1}</h1>
       <p className='text-lg'>{p1}</p>
<h1 className='font-bold text-xl '>{heading2}</h1>
<p className='text-lg'>{p2}</p>
     <ul className='list-disc pl-8 text-lg'>
        <li>{li1}</li>
         <li>{li2}</li>
          <li>{li3}</li>
     </ul>
     <h1 className='font-bold text-xl '>{heading3}</h1>
    <p className='text-lg'>{p3}</p>
        </div>
    </div>
  )
}

export default VitaComplaince
