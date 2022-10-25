import type { NextApiRequest, NextApiResponse } from 'next'
import {groq} from 'next-sanity'
import { sanityClient } from '../../sanity'
import { Experience, Skills, Socails } from '../../typing'

const getQuery = groq`
*[_type == "experience"]{

...,
skills[]->
}

`;
  

type Data = {
  experience : Experience []
  }
  
  export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const experience : Experience [] = await sanityClient.fetch(getQuery);
    res.status(200).json({ experience })
  }