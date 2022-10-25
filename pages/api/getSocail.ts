import type { NextApiRequest, NextApiResponse } from 'next'
import {groq} from 'next-sanity'
import { sanityClient } from '../../sanity'
import { Socails } from '../../typing'

const getQuery = groq`
*[_type == "socail"]



`
  

type Data = {
    socail : Socails []
  }
  
  export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const socail : Socails [] = await sanityClient.fetch(getQuery);
    res.status(200).json({ socail })
  }