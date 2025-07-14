import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Service = () => {
  return (
    <div id='service' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'> The product I Support  </h4>
       <h4 className= 'text-center text-5xl font-Ovo'> Service </h4>
    
    <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
          I am a fast learner and eager to contribute innovative solutions to modern technology industries. Equipped with substantial abilities 
            and skills in software development, 
            I am ready to bring fresh innovations and solutions to real-world problems in the technology 
            industry.
    </p>

    <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] lg:grid-cols-4 gap-6 my-10'>
      {serviceData.map(({icon, title, description, link}, index)=>(
        <div key={index}
        className="border border-grat-400 rounded-lg px-8 py-12
        hover:shadow-black cursor-pointer hover:bg-rose-50 hover:border-red-400 
                       hover:-translate-y-1 hover:shadow-lg
                       hover:shadow-red-200' duration-500">
            <Image src={icon} alt='' className='w-10' />
            <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
            <p className='text-sm text-gray-600 leading-5'>
              {description}
            </p>
            <a href={link} className="flex items-center gap-2 text-sm mt-5"> 
                read more <Image src={assets.right_arrow} alt="" className='w-4'/>
            </a>
        </div>

      ))}

    </div>
    
    </div>
  )
}

export default Service
