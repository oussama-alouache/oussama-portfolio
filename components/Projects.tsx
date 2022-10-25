import { motion } from 'framer-motion'

import { Project } from '../typing'
type Props ={
 
    project : Project[]
}
export default  function Projects( {project}:Props) {

  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left m:flex-row
    max-w-full justify-evenly max-auto items-center z-0
    
    ">
    

    <h3 className="absolute top-24 uppercase tracking-[20px] text-red-700"> projects</h3>
         <div className=" relative w-full flex overflow-x-scroll overflow-y-hidden snap-x
       snap-mandatory   z-20  scrollbar  scrollbar-track-slate-400/20 
        scrollbar-thumb-red-800
         ">
            {project.map ((project , i) =>(
                < div 
                     key={i}
                
                className=" w-screen flex-shrink-0 snap-center flex flex-col space-y-5
                 items-center justify-center p-20 md:p-44 h-screen

                "
               
                >
                  
                    <motion.img
                      initial ={{
                        y:-300,
                        opacity:0
                    }}
                    transition={{
                        duration :1.2
                    }}
                    whileInView={{
                        opacity:1,
                        y:0
                    }}
                    viewport={{
                        once:true
                    }}
                     src=""
                    
                    
                    />

                    <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                        <h5 className="text-4xl font-semibold text-center"> {project.title}</h5>
                        <p className="text-sm text-center md:text-left "> {project.summary}
                        </p>
                    </div>
                </div>
            )
            )}
         </div>
        <div className="w-full absolute top-[30%] bg-slate-500/10 left-0 h-[500px] 
        -skew-y-12
        ">
            
        </div>               




    </div>
   
  )
}

