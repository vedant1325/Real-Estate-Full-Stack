import React from 'react'
import { testimonialsData,assets } from '../assets/assets'
import{motion}from 'framer-motion'

const Testimonials = () => {
  return (
    <motion.div initial={{opacity:0,x:200}}
    transition={{duration:1.6}}
    whileInView={{opacity:1,x:0}}
    viewport={{once:true}}  className='container mx-auto py-10 lg:px-32 w-full overflow-hidden' id='Testimonials'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center '  >Customer <span className='underline underline-offset-4 decoration-1 under font-light'>Testimonails</span></h1>
        <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>Real Stories from Those Who Founded Home with Us.</p>

        <div className='flex flex-wrap justify-center gap-8'>
            {testimonialsData.map((item,index)=>(
                <div className=' max-w-[340px] border shadow-2xl rounded px-8 py-12 text-center' key={index}>
                    <img className=' cursor-pointer hover:scale-125 w-20 h-20 rounded-full mx-auto mb-4' src={item.image} alt={item.alt} />
                    <h2 className='text-xl text-center text-gray-800 font-medium'>{item.name}</h2>
                    <p className='text-gray-600 text-sm'>{item.title}</p>
                    <div className='flex justify-center gap-2 mt-1 p-2 text-red-500'>
                        {Array.from({length:item.rating},(it,index)=>(
                          <img className='w-5 cursor-pointer' key={index} src={assets.star_icon} alt=''/>  

                        ))}
                    </div>
                    <p className='text-center justify-center text-sm text-gray-600'>{item.text}</p>
                </div>
            ))}
        </div>
      
    </motion.div>
  )
}

export default Testimonials
