import React from 'react'
import Header from '../src/components/Header'
import About from '../src/components/About'
import Projects from '../src/components/Projects'
import Testimonials from '../src/components/Testimonials'
import Contact from '../src/components/Contact'
import Footer from '../src/components/Footer'

const Home = () => {
  return (
    <div className='w-full overflow-hidden'>
        <Header/>
        <About/>
        <Projects/>
        <Testimonials/>
        <Contact/>
        <Footer/>


      
    </div>
  )
}

export default Home
