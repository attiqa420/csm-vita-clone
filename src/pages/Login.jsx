import React, { useState } from 'react'
import logo from '../assets/images/logo.png'
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';

function Login() {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = (e) => {
           e.preventDefault();
           
    }

    const handleChange = (e) => {

        const {name, value} = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
  }


  return (

    <div className='min-h-screen flex items-center justify-center bg-gray-800 w-full'>

     <Helmet>
  <title>Login-page</title>
                    <meta name='description'  content='this is my Login page  page' />
                  </Helmet>

      <div className='flex flex-col items-center justify-center p-9  mx-auto bg-gray-900 text-white top-0 w-full max-w-md'>
        <img src={logo} alt='csm logo' loading='lazy' className='w-64' />
          <h1 className='py-6 font-sans text-4xl font-bold'>Login</h1>

        <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center'>

            <input
             type="email" name='email'
              value={formData.email}
               onChange={handleChange}
               placeholder='Email'
               className='w-72 p-2 bg-gray-800 mb-4'
              />

             <input
              type="password" name='password'
               value={formData.password} 
               onChange={handleChange}
                placeholder='Password'
                className='w-72 p-2 bg-gray-800 mb-4'
               />

              <NavLink to="/forgot-password" className="text-blue-400 hover:underline text-sm self-end mb-2">
    Forgot password?
  </NavLink>

             <button className='bg-blue-700 w-full p-3 mt-2 rounded-2xl hover:cursor-pointer' >
                Login
                </button>
        </form>

      </div>
    </div>
  )
}

export default Login
