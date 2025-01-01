import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link } from 'react-scroll';

const Footer = () => {
   

    const[email,setEmail]=useState("");


    const subscribeHandler = async (e) => {
        e.preventDefault(); // Prevent form submission reload
        try {
            axios.defaults.withCredentials = true;
    
            const response = await axios.post(`http://localhost:4000/api/user/subscribe`, { email });
    
            // Access the response data correctly
            const { success, message } = response.data;
    
            if (success) {
                toast.success(message);
            } else {
                toast.error(message);
            }
        } catch (error) {
            // Handle both known and unknown errors
            toast.error(error.response?.data?.message || error.message || "An unexpected error occurred.");
        }
    };
    
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 wifull bg-gray-900 overflow-hidden ' id='Footer'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-start '>
<div className='w-full md:w-1/3 mb-8 md:mb-0'>
    <img src={assets.logo_dark} alt="error" />
    <p className='text-gray-400 mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi delectus consequuntur repellendus. Consequatur cum tempore porro tenetur magni blanditiis distinctio quis nostrum laboriosam ullam.</p>
</div>
<div className='w-full md:w-1/5 mb-8 md:mb-0'>
    <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
    <ul className='text-gray-300 flex flex-col gap-2 cursor-pointer'>
        <Link className='hover:text-yellow-500' to="Header" smooth={true} duration={1000}>Home</Link>
        <Link className='hover:text-yellow-500' to="About" smooth={true} duration={1000}>About us</Link>
        <Link className='hover:text-yellow-500' to="Contact" smooth={true} duration={1000}>Contact us</Link>
        <Link className='hover:text-yellow-500' to="Header" smooth={true} duration={1000}>Privacy Policy</Link>
    </ul>
</div>
<div className='w-full md:w-1/3'>
<h3 className='text-white text-lg font-bold mb-4'>Subscribe to our newsletter </h3>
<p className='text-gray-400 mb-4 max-w-80'>The latest news, articles, and resources, sent to your inbox weekly</p>
<form onSubmit={subscribeHandler} className='flex gap-2'>
    <input type="email" placeholder='Enter your email' className='p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto' onChange={(e)=>setEmail(e.target.value)} value={email} required/>
    <button  className='py-2 px-4 rounded bg-gradient-to-r from-cyan-600 to-blue-800 text-white hover:scale-105'>Subscribe</button>
</form>
</div>
        </div>
        <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-500'>
            Copyright 2025  &#169; Vedant Dange. All Right Reserved.
        </div>
      
    </div>
  )
}

export default Footer
