import { Post } from "../../typing"
  
 export   const fetchPost =  async   ()=>{
  const res = await fetch ( `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPost`)
  const data = await res.json()
  const post : Post  = data.post;
  console.log (post)
  return post;
}