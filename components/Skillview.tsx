import { motion } from 'framer-motion'
import React from 'react'
import { urlFor } from '../sanity';
import { Skills } from '../typing';
type Props ={
    direcation?:boolean;
    skill :Skills
}

function Skillview({direcation,skill} : Props ) {
  return (

  
 <div className=" group relative flex cursor-pointer">
    
        <motion.img
        initial={{
          x:direcation ? -200 : 200,
          opacity:0
      
      }}
      transition={{
          duration:1
      }}
      whileInView ={{
          opacity: 1,
          x : 0
      }}  

      viewport={{ once: true}}
        
        src={urlFor(skill.image).url()}

    
        className=" rounded-full border object-cover 
        w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter hover:transition duration-300 ease-in-out "
        />

          <div className=" absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover: 
           bg-white  w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0 ">
            <div className=" flex rounded-full items-center justify-center h-full">
                <p  className="text-3xl rounded-full font-bold opacity-100 text-red-600" >{skill.prograss}</p>
            </div>
          </div>
      </div>
           
  )
}

export default Skillview