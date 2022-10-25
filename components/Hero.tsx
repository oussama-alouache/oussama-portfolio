
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import { urlFor } from '../sanity'
import { Post } from '../typing'
import Bgcircle from './Bgcircle'
type Props ={
 
    post : Post 
  
  }
  
  export default function Hero(  {post}:Props) {
  
  
 const [text , cont] = useTypewriter ({
    words:[
       `hey my name is ${post.name}`,
        "im a web dev",
        "im cool"
    ],
    loop : true,
    delaySpeed :200,

 })

  return (
    <div className=" h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-auto">
          
        <img className=" relative rounded-full h-32 w-32 mx-auto object-cover" 
        src={urlFor(post.image).url()}
        />
        
      
    <div className="z-20">
        <h2 className="text-sm uppercase text-red-500 pb-2 tracking-[15px]"  > {post.role}</h2>
    <h5 className="text-5xl lg:text-6xl font-semibold scroll-px-10">
        <span className=" mr-3 ">{text}</span>
    < Cursor cursorColor="red"/>
    </h5>
    <div className="pt-5">
         <button className="herob">hello</button>
         <button className="herob">expreinces</button>
         <button className="herob">skills</button>
         <button className="herob">projects</button>
       
    </div>
    </div>
   
    
    </div>
  )
}

