import React from 'react'
import logo from '../assets/logo.svg'
import admin from '../assets/admin.png'
const Navbar = () => {
  return (
    <div className='w-full bg-blue-950 flex justify-between p-4  '>
      <img className='cursor-pointer abs' src={logo} alt="" />
      <h1 className='text-white mt-1 font-semibold text-xl mx-6 hidden md:block '>Admin Panel</h1>
      <img className='w-10 mx-6' src={admin} alt="" />
    </div>
  )
}

export default Navbar
