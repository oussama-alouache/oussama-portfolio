import { Post, Skills } from "../typing"

export const fetchSkills =  async   ()=>{
  const res = await fetch ( `${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`)
  const data = await res.json()
  const skills : Skills [] = data.skills;
  console.log (skills)
  return skills;
}
