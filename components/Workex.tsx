import { motion } from 'framer-motion'

import { Experience } from '../typing'
import Excard from './Excard'
type Props ={
 
  experience : Experience []

}
export default function Workex({experience}:Props) {
  return (
    <motion.div
    initial={{
        x:-200,
        opacity:0
    }}
   whileInView={{
    x:0,
    opacity:1
   }}
   viewport={{
    once:true
   }} 
   transition={{
    duration:1.5
   }}
    
    className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7 px-18 justify-evenly mx-auto items-center ">
    <h3 className= "absolute top-24 uppercase tracking-[20px] text-red-600 ">experiance
    </h3>
    <div className="w-full flex space-x-5 overflow-x-scroll p-10  snap-x snap-mandatory scrollbar  scrollbar-track-slate-400/20 
     scrollbar-thumb-red-800">
       {experience?.map (experience =>(
 
             <Excard key={experience._id} experience ={experience}/>
       )
        )}
         
          
        
 
  

    </div>
   
  </motion.div>
    
  )
}

