
import { SocialIcon } from 'react-social-icons'
import { motion } from "framer-motion"
import Link from 'next/link'
import { Socails } from '../typing'
type Props ={
 
  socail : Socails []

}

export default  function Header( {socail}:Props) {
  return (
    <header className=" sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center ">

        <motion.div  
        initial={{
          x:-500,
          opacity:0,
          scale:0.5
        }}
        animate={{
           x:0,
           opacity:1,
           scale:1
        }}
        transition={{
          duration:1.5
        }}
    
        className="flex flex-row items-center">
        {socail.map((socail)=>(
          <SocialIcon
           key={socail._id}
           url ={socail.url}
           fgColor = "white"
           bgColor="transparent"
          />
        )
        )}
    </motion.div>
    <Link
    href="#contact"
    >
    <motion.div  
        initial={{
          x:500,
          opacity:0,
          scale:0.5
        }}
        animate={{
           x:0,
           opacity:1,
           scale:1
        }}
        transition={{
          duration:1.5
        }}
    className="flex flex-row items-center cursor-pointer">
    <SocialIcon  className="cursor-pointer"  network="email" fgColor="white"  bgColor="transparent" />
    <p className="uppercase hidden md:inline-flex text-sm text-red-800 " > CONTACT ME </p>
    </motion.div>
    </Link>
    </header>
  )
}
