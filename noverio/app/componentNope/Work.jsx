'use client';
import { assets, workData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { motion } from "motion/react"

const Work = () => {
  return (
    <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
      <motion.h4
      initial={{y: -20, opacity:0 }}
      whileInView={{y:0, opacity:1 }}
      transition={{duration:0.3, delay: 0.1}}
      viewport={{ once: true, amount: 0.5 }}
      className='text-center mb-2 text-lg font-Ovo'> My Portfolio</motion.h4>
      <motion.h4
      initial={{y: -20, opacity:0 }}
      whileInView={{y:0, opacity:1 }}
      transition={{duration:0.3, delay: 0.1}}
      viewport={{ once: true, amount: 0.5 }}
      className= 'text-center text-5xl font-Ovo'> My Lastest Work </motion.h4>
         
      <motion.p
      initial={{y: -20, opacity:0 }}
      whileInView={{y:0, opacity:1 }}
      transition={{duration:0.5, delay: 0.3}}
      viewport={{ once: true, amount: 0.5 }}
      className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        this portfolio highlights my expertise in crafting innovative solutions for modern technological challenges.
        I'm ready to bring my skills and dedication to your next project.
      </motion.p>

      <motion.div
      initial={{y: 20, opacity:0 }}
      whileInView={{y:0, opacity:1 }}
      transition={{duration:0.3, delay: 0.1}}
      viewport={{ once: true, amount: 0.5 }}
      className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] lg:grid-cols-4 my-4 gap-5 dark:text-black'>
        {workData.map((project,index)=>(
            <motion.div
            whileHover={{scale:1.01}}
            key={index} 
            className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
            style={{ backgroundImage: `url(${project.bgImage})` }}>
                <div className='bg-white w-10/12 rounded-md absolute bottom-5
                left-1/2 -translate-x-1/2 py-3 px-5 flex items-center
                justify-between duration-500 group-hover:bottom-7'>
                      <div>
                        <h2 className='font-semibold'>{project.title}</h2>
                        <p className='text-sm text-gray-700'> {project.description}</p>
                      </div>
                      <div className='border rounded-full border-black w-9 aspect-square
                      flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                        <Image src={assets.send_icon} alt='send icon' className='w-5' />
                      </div>
                </div>
            </motion.div>
        ))}
      </motion.div>

      <motion.a
      initial={{y: 20, opacity:0 }}
      whileInView={{y:0, opacity:1 }}
      transition={{duration:0.5, delay: 0.3}}
      viewport={{ once: true, amount: 0.5 }}
      href="" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5] border-gray-700
      rounded-full y-3 px-10 mx-auto my-10 hover:bg-amber-50 duration-500 dark:bg-[#11001F] dark:text-white dark:border-white dark:hover:bg-[#2a004a]'>
        show more <Image src={assets.right_arrow_bold} alt='Right arrow' className='w-4'/>
      </motion.a>
    </div>
  )
}

export default Work
