import { BiUserCircle, BiHeartCircle } from "react-icons/bi"
import { AiOutlineMail } from "react-icons/ai"
import { BsFacebook, BsInstagram } from "react-icons/bs"
import { useState } from "react"
import { Link } from "react-router-dom"

 
const OrganizerProfile = () => {
 const [color, setColor] = useState('black')
  const change = (e: any)=>{
      setColor(e)
  }

  const [color2, setColor2] = useState('black')
  const change2 = (a: any) =>{
      setColor2(a)
  }
 
  return (
    <>
    <main className="bg-gradient-to-b from-zinc-400 to-white">
      <div className="pb-5">
        <Link to="" className="ml-4 text-9xl"><BiUserCircle className="text-black"/></Link>
        <p className="pl-5">(Acá va una imagen)</p>
        <div className="flex justify-end items-end flex-col mr-2 gap-3">
          <Link to=""><BiHeartCircle onClick={(e)=>change(color == "black" ? "red-500" : "black")} className={`text-2xl text-${color}`} /></Link> 
          <Link to=""><AiOutlineMail  className="text-xl"/></Link>
        </div>
      </div>
      <h2 className="text-2xl pl-4 pt-3">Organizer name</h2>
      <p className="pl-5">What he does</p>
      <p className="pl-5">Rating</p>


      <p className="pl-5 pt-8 text-sm">Profile: </p>
      <p className="pl-5 text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, quis officiis? Exercitationem commodi quasi aut nihil eligendi illum at vero possimus modi vitae ullam, recusandae rerum aliquam id quae. Delectus?</p>
      <div className="flex mt-5 gap-2 ml-5">
      <Link to=""><BsFacebook onClick={(a)=>change2(color2 == "black" ? "[#1773EB]" : "black")} className={`text-${color2} text-2xl`}/></Link>
      <Link to=""><BsInstagram className="text-2xl"/></Link>
      </div>
    </main> 
    </>
    
  )
}

export default OrganizerProfile