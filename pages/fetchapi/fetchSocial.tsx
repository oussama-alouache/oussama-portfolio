import { Post, Socails } from "../../typing"

export const fetchSocail =  async   ()=>{
  const res = await fetch ( `${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocail`)
  const data = await res.json()
  const socail : Socails [] = data.socail;
  console.log (socail)
  return socail;
}
