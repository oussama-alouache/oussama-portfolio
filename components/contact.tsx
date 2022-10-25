
import { PhoneIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";
import { Post } from '../typing';
type Inputs = {
    name:string,
    email:string,
    subject:string,
    message:string,

  };
  type Props ={
 
    post : Post 
  
  }
  
  export default function Contact({post}:Props) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);


  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left m:flex-row
    max-w-full justify-evenly max-auto items-center z-0
    ">
    
            <h3 className="absolute top-24 uppercase tracking-[20px] text-red-700"> projects</h3>
            <div className="flex flex-col space-y-10 ">
                <h4 className=" text-4xl font-semibold  text-center">
                    pls contact me there plsss {""}

                </h4>
                <div className=" space-y-10">
                    <div className="flex items-center space-x-5 justify-center ">
                      <PhoneIcon className="text-red-800 h-7 w-7 animate-pulse"/>
                      <p className="text-2xl"  > {post.phone}  </p>
                      
                    </div>
                    <div className="flex items-center space-x-5 justify-center">
                      <PhoneIcon className="text-red-800 h-7 w-7 animate-pulse"/>
                      <p className="text-2xl"  >  {post.email}  </p>
                      
                    </div>
                    <div className="flex items-center space-x-5 justify-center">
                      <PhoneIcon className="text-red-800 h-7 w-7 animate-pulse"/>
                      <p className="text-2xl"  > {post.adress} </p>
                    </div>
                     <form  onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
                        <div className=" flex space-x-2" >
                            <input className="contactinput"  {...register("name")}        placeholder="name" type="text" />
                            <input className="contactinput"  {...register("email")}    placeholder="email" type="email" />
                        </div>
                        <input className="contactinput"  {...register("subject")}     placeholder="subject" type="text" />
                        <textarea className="contactinput"  {...register("message")}       placeholder="message" name="" id="" />
                        <button  className=" bg-red-700
                        py-2 px-10 rounded-md text-black font-bold
                        text-lg
                        "
                        
                        > send</button>
                     </form>
                </div>
            </div>


    </div>
    
  )
}

