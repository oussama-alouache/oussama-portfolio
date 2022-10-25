import { motion } from 'framer-motion'
import React from 'react'
import { Skills } from '../typing'
import Skillview from './Skillview'
type Props ={
 
    skill : Skills[]
}
function Skill( {skill}:Props) {
    return (
        <motion.div
        initial={{
    
            opacity:0
        }}
       whileInView={{
      
        opacity:1
       }}
       viewport={{
        once:true
       }}
       transition={{
        duration:1.5
       }}
        
        className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7 px-18 justify-evenly mx-auto items-center">
        <h3 className= "absolute top-24 uppercase tracking-[20px] text-red-600 ">Skills</h3>
        
        <p className="absolute top-36 uppercase tracking-[3px] text-gray-300 text-center items-center "  > my skills </p>
      
       <div className="grid grid-cols-4 gap-5">
    
        {skill?.map (skill =>(
 
 <Skillview key={skill._id} skill ={skill}/>
)
)}
       </div>
      </motion.div>
        
      )
}

export default Skill