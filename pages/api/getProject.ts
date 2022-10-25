import type { NextApiRequest, NextApiResponse } from 'next'
import {groq} from 'next-sanity'
import { sanityClient } from '../../sanity'
import { Project, Skills, Socails } from '../../typing'

const getQuery = groq`
*[_type == "projects"] {
  ...,
  skills[]->
}



`
  

type Data = {
  project : Project []
  }
  
  export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const project : Project [] = await sanityClient.fetch(getQuery);
    res.status(200).json({ project })
  }