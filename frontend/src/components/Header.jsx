import React,{useState} from 'react'
import Navbar from './Navbar'
import {motion} from 'framer-motion'
import { Link } from 'react-scroll';

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full   overflow-hidden' style={{backgroundImage:"url('/header_img.png')"}} id='Header'>
        <Navbar/>
        <motion.div initial={{opacity:0,y:100}}
        transition={{duration:1.6}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
         className='container  text-white font-semibold text-center mx-auto py-4 px-6 md:px-20 lg:px-32'>
          <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl pt-20 '>Explore homes that fit your dreams</h2>
          <div className='space-x-6  mt-16'>
            <Link to='Projects' smooth={true} className='border border-white px-8 py-3 rounded cursor-pointer' >Projects</Link>
            <Link to="Contact" smooth={true} duration={2000} className='cursor-pointer border border-white bg-blue-400 px-8 py-3 rounded ' >Contact Us</Link>
          </div>
        </motion.div>
      
    </div>
  )
}

export default Header
