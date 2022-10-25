import { motion } from 'framer-motion'
import React from 'react'
import { urlFor } from '../sanity'
import { Experience } from '../typing'
type Props ={
 
    experience : Experience
  
  }
function Excard({experience}:Props) {
  return (
    <article className="  flex flex-col rounded-lg items-center space-y-10 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center
    bg-slate-600 p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden
    ">
        <motion.img

        initial={{
            y : -100,
            opacity:0,
        }}
        transition={{
            duration:1.2
        }}
        whileInView={{opacity:1,y:0}}
        viewport={{ once: true}}
         className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center snap-center "
         src={urlFor(experience?.companyimage).url()}
         />
          <div className="mx-0 md : px-10">
<h5 className=" text-4xl font-light">  {experience?.jobtitle} </h5>
<p className=" font-bold text-2xl mt-1"> {experience?.company}</p>
<div className=" flex space-x-2 my-2">
  {experience.tech.map((tech) =>

   <img 
   key={tech._id}

   className="h-10 w-10 rounded-full" 
 
   >
       
   </img>
  
  )}
   

</div>
<p className="uppercase py-5 text-gray-300" > 
{new Date (experience.datestart).toDateString()} -{""}
{experience.currentwork
?" present"
:
new Date (experience.dateend).toDateString()

},

</p>
<ul className=" list-disc space-y-4 ml-5 text-lg ">
      {experience.points?.map((point , i) =>(
   <li  key={i}>  {point}</li>  
    ))}
            </ul>
          </div>        
    </article>
  )
}

export default Excard