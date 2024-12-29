import React, { useEffect, useState } from 'react'
import { assets, projectsData } from '../assets/assets'
import {motion} from 'framer-motion'

const Projects = () => {

    const[currentIndex,setCurrentIndex]=useState(0);
    const[cardToShow,setCardToShow]=useState(1);

    const nextProject=()=>{
        setCurrentIndex((prevIndex)=>(prevIndex+1) % projectsData.length)
    }
    const prevProject=()=>{
        setCurrentIndex((prevIndex)=>prevIndex===0?projectsData.length-1:prevIndex-1)
    }

    useEffect(()=>{
        const updateCardToShow=()=>{

            if(window.innerWidth>=1024){
                setCardToShow(projectsData.length)
    
            }
            else{
                setCardToShow(1)
            }
        };
            updateCardToShow();
            window.addEventListener('resize',updateCardToShow);
            return()=>window.removeEventListener('resize',updateCardToShow);
       
    },[])
  return (
    <motion.div
    initial={{opacity:0,x:-200}}
        transition={{duration:1.6}}
        whileInView={{opacity:1,x:0}}
        viewport={{once:true}} id='Projects' className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden'> 
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center '>Projects  <span className='underline underline-offset-4 decoration-1 under font-light'>Completed</span></h1>
        <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>Crafting Spaces, Building Legacies-Explore Our Portfolio</p>


        {/* Slider Buttons*/}

        <div className='flex justify-end items-center mb-'>
            <button onClick={prevProject} className='p-3 bg-gray-200 hover:bg-gray-400 rounded mr-2' aria-label='Previous Project'>
                <img src={assets.left_arrow} alt="Previous" />
                </button>
            <button onClick={nextProject} className='p-3 bg-gray-200 rounded hover:bg-gray-400 mr-2' aria-label='Next Project'><img src={assets.right_arrow} alt="Next" /></button>
        </div>
        {/*Project Slider Container */}
<div className='overflow-hidden'>
    <div className='flex gap-8 transition-transforn duration-500 ease-in-out' style={{transform:`translateX(-${(currentIndex*100)/cardToShow}%)`}}>
        {projectsData.map((item,index)=>(
            <div className='relative flex-shrink-0 w-full sm:w-1/4 mt-4' key={index}>
  <img className='w-full h-auto mb-14' src={item.image} alt={item.title} />
  <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
    <div className=' inline-block bg-gray-100 lg:w-3/4 px-4 py-2 shadow-md w-full md:w-full '>
    <h2 className='text-xl font-semibold text-gray-800'>{item.title}</h2>
    <p className='text-gray-500 text-sm'>
        {item.price}
        <span className='px-1'>{item.location}</span>
        </p>

    </div>

  </div>
        </div>
        ))}
    </div>
</div>
       
    </motion.div>
  )
}

export default Projects
