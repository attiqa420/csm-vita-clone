import React, { useState } from 'react';
import { RiCheckDoubleFill } from "react-icons/ri";


function Complaince({ items }) {
 
  const [selectedItem, setSelectedItem] = useState(items[0]);


  const handleClick = (item) => {
    setSelectedItem(item);
  };


  return (
    <div className="bg-white w-full overflow-hidden pb-10">
  
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 sm:px-10 lg:px-20 py-4 pt-10">
        
       
        <div className="lg:w-1/2 space-y-4 max-w-lg">
          {items.map((item) => (
            <div key={item.id}>
              <button
                onClick={() => handleClick(item)}
                className="px-2 py-2 w-full text-base font-semibold flex items-center gap-2 bg-amber-50 text-blue-700 hover:bg-gradient-to-l from-blue-950 to-blue-800 hover:text-white shadow-xl shadow-blue-100"
              >
                <RiCheckDoubleFill className="text-xl font-bold" />
                {item.title}
              </button>
            </div>
          ))}
        </div>

       
         <div className="  lg:w-1/2 space-y-4 max-w-lg pt-5">
          <h1 className="font-semibold text-lg text-gray-800 pb-2">
            {selectedItem.title}
          </h1>
          <div className="text-gray-900">
           {Array.isArray(selectedItem.detail) ? (
    <>
      <p>{selectedItem.detail[0]}</p>
      <ul className="list-disc list-inside">
        {selectedItem.detail.slice(1).map((line, index) => (
          <li key={index}>{line}</li>
        ))}
      </ul>
    </>
  ) : (
    <p>{selectedItem.detail}</p>
  )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Complaince;
