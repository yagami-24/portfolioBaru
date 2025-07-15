'use client';
import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Service = () => {
  return (
    <div id='service' className='w-full px-[12%] py-10 scroll-mt-20'>
      <motion.h4
      initial={{y: -20, opacity:0 }}
      whileInView={{y:0, opacity:1 }}
      transition={{duration:0.3, delay: 0.1}}
      viewport={{ once: true, amount: 0.5 }}
      className='text-center mb-2 text-lg font-Ovo'> The product I Support  </motion.h4>
       
      <motion.h4
      initial={{y: -20, opacity:0 }}
      whileInView={{y:0, opacity:1 }}
      transition={{duration:0.3, delay: 0.1}}
      viewport={{ once: true, amount: 0.5 }}
      className= 'text-center text-5xl font-Ovo'> Service </motion.h4>
    
      <motion.p
      initial={{y: -20, opacity:0 }}
      whileInView={{y:0, opacity:1 }}
      transition={{duration:0.5, delay: 0.3}}
      viewport={{ once: true, amount: 0.5 }}
      className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
          I am a fast learner and eager to contribute innovative solutions to modern technology industries. Equipped with substantial abilities 
            and skills in software development, 
            I am ready to bring fresh innovations and solutions to real-world problems in the technology 
            industry.
    </motion.p>

    <motion.div
    initial={{ opacity:0 }}
    whileInView={{opacity:1 }}
    transition={{duration:0.7, delay: 0.5}}
    viewport={{ once: true, amount: 0.5 }}
    className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] lg:grid-cols-4 gap-6 my-10'>
      {serviceData.map(({icon, title, description, link}, index)=>(
        <motion.div
        whileHover={{scale:1.01}}
        key={index}
        className="border border-gray-400 dark:border-white rounded-lg px-8 py-12
        hover:shadow-black dark:hover:shadow-white cursor-pointer hover:bg-white-50 hover:border-red-400 
                       hover:-translate-y-1 hover:shadow-lg
                       hover:shadow-red-200 duration-500
                        ">
            <Image src={icon} alt='' className='w-10' />
            <h3 className='text-lg my-4 text-gray-700 dark:text-white '>{title}</h3>
            <p className='text-sm text-gray-600 leading-5 dark:text-white '>
              {description}
            </p>
            <a href={link} className="flex items-center gap-2 text-sm mt-5"> 
                read more <Image src={assets.right_arrow} alt="" className='w-4'/>
            </a>
        </motion.div>

      ))}

    </motion.div>
    
    </div>
  )
}

export default Service
