import { Experience, Post } from "../../typing"

export const fetchExperience =  async   ()=>{
  const res = await fetch ( `${process.env.NEXT_PUBLIC_BASE_URL}/api/getEx`)
  const data = await res.json()
  const experience : Experience [] = data.experience;
  console.log (experience)
  return experience;
}
export default fetchExperience