import React from 'react'
import PriceForm from '../components/PriceForm'
import Banner from '../components/Banner'
import { LuPhoneCall } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";
import { IoLocationOutline } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Helmet } from 'react-helmet';

function About() {
  return (
    <>
       <Helmet>
        <title>About-page</title>
              <meta name='description'  content='this is my About page' />
            </Helmet>
    <Banner
    title="Helping State of Virginia with VITA SEC-530 Compliance"
    description="Need guidance on achieving VITA SEC-530 Compliance? Our experts provide tailored support and solutions 
    to help Virginia state agencies meet cybersecurity and compliance requirements effectively."
    />
    <div className='flex flex-col lg:grid lg:grid-cols-4 gap-4  px-10 py-10'>
        <div className='col-span-2'>
      <PriceForm title="Reach out to us for expert assistance in meeting VITA SEC-530
       compliance requirements for Virginia state agencies." />
       </div>

       <div className='col-span-2 mt-16'>
      <div className='bg-gray-100 w-full max-w-xl mx-auto  px-5 py-5'>
          <h3 className='font-bold font-sans text-xl pt-5 pl-5 pb-2'>Contact info</h3>
        <div className='pl-5 pt-2 font-sans flex items-center justify-between px-5'>
           <h4 className='flex items-center  text-blue-800 font-medium gap-2'><LuPhoneCall /> Call Us</h4> 
           <a href='tel:301-337-2290' className='font-normal text-sm'>+301-337-2290</a>
        </div>
        <div className='pl-5 pt-2 font-sans flex items-center justify-between px-5'>
           <h4 className='flex items-center  text-blue-800 font-medium gap-2'><TfiEmail /> Email Us</h4> 
           <a href='mailto:support@spsnet.com' className='font-normal text-sm'>support@spsnet.com</a>
        </div>
        <div className='pl-5 pt-2 font-sans flex items-center justify-between px-5'>
           <h4 className='flex items-center  text-blue-800 font-medium gap-2'><IoLocationOutline /> Address</h4> 
           <p className='font-normal text-sm'>2400 Research Blvd, Suite 115, Rockville, MD 20850 USA.</p>
        </div>
      </div>

        <div className='col-span-2 bg-blue-800 w-full max-w-xl mt-4 px-3 py-8 mx-auto text-white text-2xl font-bold font-sans flex items-center justify-between'>
            <p> Follow Us  </p>
            <div className='flex items-center gap-3'>
            <a href='https://www.instagram.com/'  target="_blank" className='hover:cursor-pointer'><FaLinkedin /></a>
            <a href='https://www.twitter.com'   target="_blank" className='hover:cursor-pointer'><FaTwitter /></a>
            </div>
            </div>
       </div>
      
       </div>
    </>
  )
}

export default About
