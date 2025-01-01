import React from 'react'
import Navbar from './Compoents/Navbar'
import HeroForm from './Compoents/HeroForm'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <ToastContainer/>
      <Navbar/>
      <HeroForm/>
      
    </div>
  )
}

export default App
