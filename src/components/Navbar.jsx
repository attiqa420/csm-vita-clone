import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import React, { useState, useEffect } from 'react';

import logo from '../assets/images/logo-white.webp'
import bg from '../assets/images/bg1.webp';
import { Helmet } from 'react-helmet';

function NavBar()

{
const [isOpen, setIsOpen] = useState(false);
const [scrolled, setScrolled] = useState(false);

useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  

  return (

    <nav   className={`p-6 pb-3 w-full fixed top-0 left-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-blue-950 bg-opacity-95' : 'bg-transparent'
      }`}
     >

      <Helmet>
        <title>NavBar-Page</title>
        <meta name='description'  content='this is my navigation bar page' />
      </Helmet>

      <div className='md:hidden flex justify-between items-center text-white cursor-pointer'>
    <img 
      src={logo} 
      alt="Software Productivity Strategists, Inc. logo" 
      className="w-28"
    />
    <button onClick={() => setIsOpen(!isOpen)} className="text-3xl pl-8">
      <GiHamburgerMenu />
    </button>
  </div>

     

        {/* Code for mobile menu */}


{isOpen && (

 <>
   <div
    className='md:hidden flex flex-col mt-1 text-white bg-cover bg-center'
      style={{backgroundImage: `url(${bg})`}}
   
    onClick={(e) => {
    
      if (e.target.closest('a')) {
        setIsOpen(false);
      }
    }}
   > 


          <NavLink to="/" className="py-2 block font-bold">Home</NavLink>

        

           <div>
            <span className='block px-3 py-3 border-b  border-white font-bold ' >Complaince</span>
          
             <NavLink  className=' block  py-2 px-2 hover:text-blue-700' to="/complaince/information" >Information Security Policy</NavLink> 
              <NavLink  className=' block  py-2 px-2 hover:text-blue-700' to="/complaince/role"  >Roles and Responsibilites</NavLink>  
              <NavLink  className=' block  py-2 px-2 hover:text-blue-700' to="/complaince/business-impact" >Business Impact</NavLink> 
               <NavLink  className=' block  py-2 px-2 hover:text-blue-700' to="/complaince/risk-assessment" >Risk Assessment</NavLink>
                <NavLink  className=' block py-2 px-2 hover:text-blue-700' to="/complaince/sec-audit" >IT Security Audits</NavLink>
                 <NavLink  className=' block  py-2 px-2 hover:text-blue-700' to="/complaince/sec-control" >Security Controls Catalog</NavLink>
           
          </div>
          
          

           <div >
            <span className='block px-3 py-3 border-b  border-white font-bold '>Pricing</span>
           
              <NavLink  className=' block py-2 px-2 hover:text-blue-700' to="/pricing/basic">Basic Plan</NavLink>  
              <NavLink  className=' block py-2 px-2 hover:text-blue-700' to="/pricing/standard">Standard Plan</NavLink>  
               <NavLink  className=' block  py-2 px-2 hover:text-blue-700' to="/pricing/premium">Premium Plan</NavLink>  
           
          </div>

           <div >
            <span className='block px-3 py-3 border-b  border-white font-bold ' >About Us</span>
        
              <NavLink  className=' block  py-2 px-2 hover:text-blue-700' to="/about/contact">Contact Us</NavLink>  
            
          </div>
       
         <button className='mt-3 mx-3 border border-white p-1.5 text-white hover:bg-blue-900'>Login to CSM</button>
 </div>
   </>

)}
        <div className=' hidden md:flex items-center justify-between w-full' >
      
        <img 
          src={logo}
          alt="Software Productivity Strategists, Inc. logo" 
          className="w-2xs"
        />
        
        <div className='flex justify-center space-x-4 text-white'> 


          <NavLink to="/">Home</NavLink>

        

          <div className='relative group '>
            <button className='text-white block cursor-pointer' >Complaince</button>
            <div className="absolute hidden group-hover:block  bg-white text-black w-52 pt-2  z-50">
              <NavLink  className=' block border-b-0 py-2 px-2 hover:text-blue-700' to="/complaince/information" >Information Security Policy</NavLink> 
              <NavLink  className=' block border-b-0  py-2 px-2 hover:text-blue-700' to="/complaince/role"  >Roles and Responsibilites</NavLink>  
              <NavLink  className=' block border-b-0 py-2 px-2 hover:text-blue-700' to="/complaince/business-impact" >Business Impact</NavLink> 
               <NavLink  className=' block border-b-0  py-2 px-2 hover:text-blue-700' to="/complaince/risk-assessment" >Risk Assessment</NavLink>
                <NavLink  className=' block border-b-0  py-2 px-2 hover:text-blue-700' to="/complaince/sec-audit" >IT Security Audits</NavLink>
                 <NavLink  className=' block border-b-0  py-2 px-2 hover:text-blue-700' to="/complaince/sec-control" >Security Controls Catalog</NavLink>
            </div> 
          </div>
          
          

           <div className='relative group'>
            <button className='text-white block cursor-pointer'>Pricing</button>
            <div className='absolute hidden w-52 pt-2 bg-white text-black group-hover:block z-50'>
              <NavLink  className=' block border-b-0  py-2 px-2 hover:text-blue-700' to="/pricing/basic">Basic Plan</NavLink>  
              <NavLink  className=' block border-b-0  py-2 px-2 hover:text-blue-700' to="/pricing/standard">Standard Plan</NavLink>  
               <NavLink  className=' block border-b-0  py-2 px-2 hover:text-blue-700' to="/pricing/premium">Premium Plan</NavLink>  
            </div>
          </div>

           <div className='relative group'>
            <button className='text-white cursor-pointer' >About Us</button>
            <div className='absolute hidden w-52 pt-2 bg-white text-black group-hover:block z-50'>
              <NavLink  className=' block border-b-0  py-2 px-2 hover:text-blue-700' to="/about/contact">Contact Us</NavLink>  
            </div>
          </div>
        </div>
         <button className='object-top-right border border-white p-1.5 text-white hover:bg-blue-900 hover:cursor-pointer'>
          <NavLink to="/login" target='_blank'>
          Login to CSM
          </NavLink>
          </button>
      </div>

    </nav>
  );
}

export default NavBar;
