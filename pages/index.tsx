import type {  GetStaticProps } from 'next'
import Head from 'next/head'

import Link from 'next/link'
import About from '../components/About'
import Contact from '../components/contact'
import Header from '../components/Header'

import Projects from '../components/Projects'
import Skill from '../components/Skills'
import Workex from '../components/Workex'
import { ChevronDoubleUpIcon } from '@heroicons/react/24/solid'

import styles from '../styles/Home.module.css'
import { Experience, Post, Project, Skills, Socails } from '../typing'
import { fetchPost } from './fetchapi/fetchPost'

import { fetchSkills } from './fetchapi/fetchSkills'
import { fetchProject } from './fetchapi/fetchProject'
import { fetchSocail } from './fetchapi/fetchSocial'
import Hero from '../components/Hero'
import { fetchExperience } from './fetchapi/fetchExperience'
type Props ={
  post : Post,
  experience : Experience [],
  skills : Skills[] ,
  project : Project[],
  socail : Socails[]


}

const Home = (  {post,skills,experience,socail,project} : Props) => {
  return (
    <div className="bg-black text-white h-screen snap-y snap-mandatary overflow-y-scroll overflow-x-hidden z-0 scrollbar  scrollbar-track-slate-400/20 
     scrollbar-thumb-red-800
    ">
      <Head>
        <title>portfolio</title>
      </Head>
     <Header socail = {socail} />
<section  className="snap-center"   id='hero'>
<Hero post={post}/>
</section>
<section  className="snap-center"   id='about'>
<About post={post}   />
</section>
<section  className="snap-center"   id='ex'>
<Workex experience ={experience} />
</section>
<section  className="snap-center"   id='skills'>
<Skill skill = {skills}/>
</section>
<section  className="snap-center"   id='projects'>
<Projects project={project}/>
</section>
<section  className="snap-center"   id='contact'>
<Contact post={post}  />

</section>
<Link href="#hero">

  <footer className=" sticky bottom-5 w-full cursor-pointer">
      <div className=" flex items-center justify-center">
      <ChevronDoubleUpIcon  className="h-10 w-10 rounded-full grayscale hover:grayscale-0 cursor-pointer text-red-800 animate-pulse "   />
      </div>


  </footer>

</Link>
    </div>
  )
}

export default Home ;

export const getStaticProps :GetStaticProps  <Props> =async() =>{
  const post : Post  = await fetchPost();
  const skills : Skills [] = await fetchSkills();
const experience : Experience [] = await fetchExperience()
  const project : Project [] = await fetchProject();
  const socail : Socails  []= await fetchSocail();
  return{
   props:{
     post,
     skills,
     project,
     socail,
     experience
   }
  }


}

