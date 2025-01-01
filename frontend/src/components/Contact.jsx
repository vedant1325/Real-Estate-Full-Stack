import React from 'react'
import { toast } from 'react-toastify';
import{motion} from 'framer-motion'

const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "593f2c14-fd18-4998-9093-68245afaf5d7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Forn Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
      setResult('');
    }
  };
  return (
    <motion.div
    initial={{opacity:0,x:-200}}
        transition={{duration:1.6}}
        whileInView={{opacity:1,x:0}}
        viewport={{once:true}}  className='text-center p-6 py-20 lg:px-32 w-fill overflow-hidden' id='Contact'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center '  >Contact <span className='underline underline-offset-4 decoration-1 under font-light'>With Us</span></h1>
        <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>Ready to Make a Move? Let's Build Your Future Togrther.</p>


        <form onSubmit={onSubmit} className='shadow-2xl max-w-3xl mx-auto text-gray-600 pt-8'>
            <div className= 'p-4 rounded  flex flex-wrap'>
                <div className='w-full md:w-1/2 text-left'>
                Your Name
                <input className='w-full border border-gray-300 rounded py-3 px-4 pt-2 mb-2' type="text" name="Name" id=""  placeholder='Your Name' required/>
                </div>
                <div className='w-full md:w-1/2 text-left md:pl-4'>
                Your Email
                <input className='w-full border border-gray-300 rounded py-3 px-4 pt-2' type="email" name="Email" id=""  placeholder='Your Email' required/>
                </div>
            </div>
            <div className=' p-4  text-left'>
                Message
                <textarea className='w-full border border-gray-300 h-48 rounded  p-4 mt-2 resize-none' name="Message" id="" placeholder='Message' required></textarea>
            </div>
            <button className='bg-gradient-to-r from-cyan-600 to-blue-800 text-white  px-4 py-2 rounded-lg hover:scale-105 mb-6 '>{result?result:"Send Message"}</button>
        </form>
      
    </motion.div>
  )
}

export default Contact
