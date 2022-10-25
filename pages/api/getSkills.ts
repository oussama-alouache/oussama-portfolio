import type { NextApiRequest, NextApiResponse } from 'next'
import {groq} from 'next-sanity'
import { sanityClient } from '../../sanity'
import { Skills, Socails } from '../../typing'

const getQuery = groq`
*[_type == "skills"]



`
  

type Data = {
    skills : Skills []
  }
  
  export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const skills : Skills [] = await sanityClient.fetch(getQuery);
    res.status(200).json({ skills })
  }