import React from 'react';
import { IoMdArrowDropright } from "react-icons/io";

function Footer({ items }) {
  return (
    <>
      <div className="bg-blue-950 text-white w-full overflow-hidden">
      
        <div className="container mx-auto px-4 sm:px-10 lg:px-10 py-10">
    
          <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
            
         
            <div className="lg:w-1/2 max-w-2xl">
              <img 
                src="https://nepra.spsnet.com/assets/images/logo-white.png" 
                alt="SPS logo"
                className="w-64 lg:w-96"
              />
              <p className="font-sans text-lg  pt-6">
                Software Productivity Strategists, Inc. (SPS) delivers AI and Cloud-powered industry solutions. With expertise across design, development, security, and operations, we build scalable, secure, and reliable systems. Our award-winning team includes IBM-certified inventors and global competition champions.
              </p>
            </div>

     
            <div className="lg:w-1/2 max-w-2xl">
              <h1 className="font-semibold text-xl pb-4">Complaince</h1>
              <div className="space-y-2">
                {items.map((item) => (
                  <button
                    key={item.id}
                    className="flex items-center w-full hover:text-blue-400 text-sm lg:text-base"
                  >
                    <IoMdArrowDropright className="w-5 h-5 mr-2" />
                    {item.title}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>

       
        <div className="border-t border-white text-sm py-4 text-center">
          <p>Made by Attiqa Jabeen</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
