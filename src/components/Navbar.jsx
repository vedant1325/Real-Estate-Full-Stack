import React, { useEffect, useState } from 'react'
import {assets} from'../assets/assets'

const Navbar = () => {
const[mobileMenu,SetMobileMenu]=useState(false);

useEffect(()=>
  {if(mobileMenu){
  document.body.style.overflow='hidden'
}
else{
  document.body.style.overflow='auto'
}
return ()=>{document.body.style.overflow='auto'}
},[mobileMenu])



  return (
    <div className='absolute top-0 left-0 z-10 w-full'>
        <div className=' container  flex mx-auto  justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
            <img src={assets.logo} alt="" />
            <ul className='hidden md:flex gap-7 text-white'>
                <a href="#header" className=' cursor-pointer hover:text-gray-400'>Home</a>
                <a href="#About" className='cursor-pointer hover:text-gray-400'>About</a>
                <a href="#Projects" className='cursor-pointer hover:text-gray-400'>Projects</a>
                <a href="#Testimonials" className='cursor-pointer hover:text-gray-400'>Testimonials</a>
            </ul>
            <button className='hidden md:block bg-white px-8 py-2 rounded-full '>Sign up</button>
            <img onClick={()=>SetMobileMenu(true)} src={assets.menu_icon} className='cursor-pointer md:hidden w-7' alt="" />
        </div>
        {/*________mobile menu------- */}
        <div className={`md:hidden ${mobileMenu?'fixed w-full':'h-0 w-0'}  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
          <div className='flex justify-end p-6  cursor-pointer '>
            <img onClick={()=>SetMobileMenu(false)}  className=' p-1 w-8 hover:bg-slate-400 hover:rounded-full' src={assets.cross_icon} alt="" />
            </div>
          <ul className=' flex flex-col items-center gap-2 mt-5 px-5 text-lg '>
            <a onClick={()=>SetMobileMenu(false)}  href="#Header" className='px-4 py-2 rounded inline-block'>Home</a>
            <a onClick={()=>SetMobileMenu(false)} href="#About" className='px-4 py-2 rounded inline-block'>About</a>
            <a onClick={()=>SetMobileMenu(false)} href="#Projects" className='px-4 py-2 rounded inline-block'>Projects</a>
            <a onClick={()=>SetMobileMenu(false)} href="#Testimonials" className='px-4 py-2 rounded inline-block'>Testimonials</a>
          </ul>
        </div>
      
    </div>
  )
}

export default Navbar
