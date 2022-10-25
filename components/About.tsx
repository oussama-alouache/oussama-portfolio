import { motion, MotionConfig } from 'framer-motion'

import { urlFor } from '../sanity'
import { Post } from '../typing'
type Props ={
 
  post : Post 

}
export default  function About(  {post}:Props) {
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
    
    className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7 px-10 justify-evenly mx-auto items-center">
    <h3 className= "absolute top-24 uppercase tracking-[20px] text-red-600 ">about</h3>
    <motion.img
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
    
    
   src={urlFor(post.profilpic).url()}
    className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
    md:rounded-lg md;w-64 md:h-95 xl:w-[500px] xl:h-[600px] "
    /> 
    <div className=" space-y-10 px-0 md:px-10">
    <h4 className="text-4xl font-semibold"  > 
    text {""} <span className="underline decoration-white" > is</span> {""} here
    </h4>
    <p className="text-sm">
      {post.bginfo}

            </p>
            
    </div>

    
  </motion.div>
  )
}

