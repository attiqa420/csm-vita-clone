import React from 'react'
import NavBar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import data from '../data'

function AppLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
    <Footer items={data} />
    </>
  )
}

export default AppLayout
