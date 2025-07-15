'use client';
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
       <motion.div 
       initial={{scale: 0 }}
       whileInView={{scale: 1 }}
       transition={{duration:0.8, type:"spring", stiffness:100 }}
       >
        <Image src={assets.profile_img} alt='' className='rounded-full w-36' />
        </motion.div>
              
              <motion.h3 
              initial={{y: -20, opacity:0 }}
              whileInView={{y:0, opacity:1 }}
              transition={{duration:0.6, delay: 0.3}}
              viewport={{ once: true, amount: 0.5 }}
              className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo'>HI I am Noverio 
              <Image src={assets.hand_icon} alt='' className='w-6'/> </motion.h3>

              <motion.h1
              initial={{y: -30, opacity:0 }}
              whileInView={{y:0, opacity:1 }}
              transition={{duration:0.8, delay: 0.5}}
              viewport={{ once: true, amount: 0.5 }}
               className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'> Digital Marketing Based on Kuala Lumpur </motion.h1>
              <motion.p
              initial={{y: -40, opacity:0 }}
              whileInView={{y:0, opacity:1 }}
              transition={{duration:1, delay: 0.7}}
              viewport={{ once: true, amount: 0.5 }}
              className='mx-w-2xl mx-auto font-Ovo'>
                  I am a Digital Marketing from Indonesia experience in multiple companies and MSME
              </motion.p>
              <motion.div
              initial={{y: 30, opacity:0 }}
              whileInView={{y:0, opacity:1 }}
              transition={{duration:1, delay: 0.7}}
              viewport={{ once: true, amount: 0.5 }} className='flex flex-col  sm:flex-row items-center gap-4 mt-4'>
                  <motion.a
                  
                  whileTap={{ scale: 0.8 }}
                  href="#contact" 
                  className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 
                  dark:bg-[#11001F]' >
                    Contact Me <Image src={assets.right_arrow_white} alt='' className='w-4'/></motion.a>
      
                  <motion.a href="/sample-resume.pdf" download

                  whileTap={{ scale: 0.8 }}
                  className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 dark:bg-white dark:text-[#11001F]'>
                    My CV <Image src={assets.download_icon} alt='' className='w-4'/>
                  </motion.a>
              </motion.div>
    </div>
  )
}

export default Header
