import { Link, useNavigate } from "react-router-dom"
import { IndexLink } from "../IndexLink"
import { FaUser } from "react-icons/fa"
import { BsFillPlusCircleFill, BsFillBookmarkFill } from "react-icons/bs"
import { HiUsers } from "react-icons/hi"
import { AiOutlineLogout } from "react-icons/ai"
 


const NavOrganizerRes = ({profImg} : {profImg : string}) => {
  const navigation = useNavigate()
  const close = () => {
    localStorage.clear()
		navigation('/', {replace: true})
		location.reload()
	}
  return (
    <nav className="hidden md:flex fixed bg-slate-900 items-center justify-start h-[7vh] lg:gap-4 gap-[1%] w-full z-50">
      <Link to="/" className="flex"><IndexLink /><h3 className="text-slate-50 font-semibold">NODENS</h3></Link>
      <div className="w-full flex justify-between items-center lg:justify-end gap-[7%] pr-3">
        <Link className="h-[10%] flex flex-col items-center  rounded-lg text-slate-100 text-xs after:content-['_'] after:h-[1px] after:w-full after:scale-x-0 after:origin-left after:transition after:transform after:duration-150 after:ease-linear hover:after:scale-x-100 after:bg-white py-4 pl-2" 
          to="/posts"> Posts</Link>
        <Link className="h-[10%] flex flex-col items-center gap-1 rounded-lg text-slate-100 text-xs after:content-['_'] after:h-[1px] after:w-full after:scale-x-0 after:origin-left after:transition after:transform after:duration-150 after:ease-linear hover:after:scale-x-100 after:bg-white py-4 pl-2" 
          to="/profiles"><HiUsers className="h-8 w-8"/> Perfiles</Link>
        <Link className="h-[10%] flex flex-col items-center gap-1 rounded-lg text-slate-100 text-xs after:content-['_'] after:h-[1px] after:w-full after:scale-x-0 after:origin-left after:transition after:transform after:duration-150 after:ease-linear hover:after:scale-x-100 after:bg-white py-4 pl-2" 
          to="/create-offer"><BsFillPlusCircleFill className="h-8 w-8"/> Crear Oferta</Link>
        <Link className="h-[10%] flex flex-col items-center gap-1 rounded-lg text-slate-100 text-xs after:content-['_'] after:h-[1px] after:w-full after:scale-x-0 after:origin-left after:transition after:transform after:duration-150 after:ease-linear hover:after:scale-x-100 after:bg-white py-4 pl-2" 
          to="/offers"><BsFillBookmarkFill className="h-8 w-8"/>Tus Ofertas</Link>
         <Link className="h-[10%] flex flex-col items-center gap-1 rounded-lg text-slate-100 text-xs after:content-['_'] after:h-[1px] after:w-full after:scale-x-0 after:origin-left after:transition after:transform after:duration-150 after:ease-linear hover:after:scale-x-100 after:bg-white py-4 pl-2" 
          to="/mainprofile"> 
          {
            profImg.length > 0 ?

            <img src={profImg} alt="" className="h-8 w-8 rounded-full object-cover" />
              :
              <FaUser className="text-xl"/>
          }
          <span> Perfil </span>
          </Link>
          



          
        <button onClick={close} className="h-[10%] flex flex-col items-center rounded-lg text-slate-100 text-xs after:content-['_'] after:h-[1px] after:w-full after:scale-x-0 after:origin-left after:transition after:transform after:duration-150 after:ease-linear hover:after:scale-x-100 after:bg-white py-4 pl-2" ><AiOutlineLogout className="h-8 w-8"/> Cerrar Sesion</button>
      </div>
    </nav>
  )
}

export default NavOrganizerRes
