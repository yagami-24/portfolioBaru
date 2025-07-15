'use client';
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, {useState} from 'react'
import { motion } from "motion/react"

const Contact = () => {
  
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "396d1cb7-9f71-4b6c-8a4c-6b4616f45d83");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
     <motion.div
     initial={{ opacity:0 }}
     whileInView={{ opacity:1 }}
     transition={{duration:0.3, delay: 0.1}}
      viewport={{ once: true, amount: 0.5 }}
     id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")]
     bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'>
      <h4 className= 'text-center text-5xl font-Ovo'> Get In Touch </h4>
         
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        Interested in collaborating or have a project in mind? Don't hesitate to reach out! 
        I'm always eager to discuss new ideas and how my expertise can help you achieve your goals.
      </p>
      
      <form onSubmit={onSubmit} action="" className='max-w-2xl mx-auto'>
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8'> 
        <input
            type="text"
            placeholder='Enter your name'
            required
            className='w-full p-3 outline-none border border-gray-300 rounded-md bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors
            dark:bg-[#11001F]/30 dark:text-white/80'
            name='Name'
        />
        <input
            type="email"
            placeholder='Enter your email'
            required
            className='w-full p-3 outline-none border border-gray-300 rounded-md bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors
            dark:bg-[#11001F]/30 dark:text-white/80'
            name='email'
        />
    </div>
    <textarea
        rows='6'
        placeholder='Enter your message'
        required
        className='w-full p-4 outline-none border border-gray-300 rounded-md bg-white mb-6 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors
        dark:bg-[#11001F]/30 dark:text-white/80'
        name="message" 
        id="message" 
    ></textarea>

    <motion.button
     whileTap={{ scale: 0.8 }}
        type='submit'
        className='py-3 px-8 w-full flex items-center justify-center gap-2 bg-black/80
        text-white rounded-full hover:bg-black transition-colors duration-500 dark:bg-white dark:text-[#11001F]'>
        Submit <Image src={assets.right_arrow_white} alt="Right arrow" className='w-4' />
    </motion.button>

    <p className='mt-4'> {result} </p>
</form>
    </motion.div>
  )
}

export default Contact
