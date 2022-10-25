import type { NextApiRequest, NextApiResponse } from 'next'
import {groq} from 'next-sanity'
import { sanityClient } from '../../sanity'
import { Post, Project, Skills, Socails } from '../../typing'

const getQuery = groq`
*[_type == "post"] [0]



`
  

type Data = {
    post : Post []
  }
  
  export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const post : Post [] = await sanityClient.fetch(getQuery);
    res.status(200).json({ post })
  }