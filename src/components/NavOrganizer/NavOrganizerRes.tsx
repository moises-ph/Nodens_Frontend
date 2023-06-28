import { Link, useNavigate } from "react-router-dom"
import { IndexLink } from "../IndexLink"
import { FaUser } from "react-icons/fa"
import { BsFillPlusCircleFill, BsFillBookmarkFill } from "react-icons/bs"
import { HiUsers } from "react-icons/hi"
import { AiOutlineLogout } from "react-icons/ai"
import { BsFileEarmarkPost } from "react-icons/bs"
 


const NavOrganizerRes = ({profImg} : {profImg : string}) => {
  const navigation = useNavigate()
  const close = () => {
    localStorage.clear()
		navigation('/', {replace: true})
		location.reload()
	}
  return (
    <nav className="hidden md:flex fixed bg-slate-900 items-center justify-around h-[7vh] lg:gap-4 gap-[1%] w-full z-50">
      <div className="w-full flex justify-center items-center lg:w-2/3 h-fit">
      <Link to="/" className="flex items-center translate-x-[25rem] md:translate-x-1"><IndexLink /><h3 className="text-slate-50 font-semibold">NODENS</h3></Link>
      <div className="w-3/4 flex justify-between items-center lg:justify-end gap-[10%] lg:gap-[4%]">
        <Link className={`h-[10%] flex flex-col items-center  rounded-lg text-slate-100 text-xs text-center after:content-['_'] after:h-[1px] after:w-full after:scale-x-0 after:origin-left after:transition after:transform after:duration-150 after:ease-linear hover:after:scale-x-100 after:bg-white py-4 pl-2 ${
          location.pathname === "/posts"
          ? "text-orange-600 after:bg-orange-600"
          : "text-slate-100 after:bg-white"
        }`} 
          to="/posts"><BsFileEarmarkPost className="h-6 w-6 "/> Posts</Link>
        <Link className={`h-[10%] flex flex-col items-center gap-1 rounded-lg text-slate-100 text-xs text-center after:content-['_'] after:h-[1px] after:w-full after:scale-x-0 after:origin-left after:transition after:transform after:duration-150 after:ease-linear hover:after:scale-x-100 after:bg-white py-4 pl-2 ${
          location.pathname === "/profiles"
          ? "text-orange-600 after:bg-orange-600"
          : "text-slate-100 after:bg-white"
        }`} 
          to="/profiles"><HiUsers className="h-6 w-6"/> Perfiles</Link>
        <Link className={`h-[10%] flex flex-col items-center gap-1 rounded-lg text-slate-100 text-xs text-center after:content-['_'] after:h-[1px] after:w-full after:scale-x-0 after:origin-left after:transition after:transform after:duration-150 after:ease-linear hover:after:scale-x-100 after:bg-white py-4 pl-2 ${
          location.pathname === "/create-offer"
          ? "text-orange-600 after:bg-orange-600"
          : "text-slate-100 after:bg-white"
        }`} 
          to="/create-offer"><BsFillPlusCircleFill className="h-6 w-6"/> Crear Oferta</Link>
        <Link className={`h-[10%] flex flex-col items-center gap-1 rounded-lg text-slate-100 text-xs text-center after:content-['_'] after:h-[1px] after:w-full after:scale-x-0 after:origin-left after:transition after:transform after:duration-150 after:ease-linear hover:after:scale-x-100 after:bg-white py-4 pl-2 ${
          location.pathname === "/offers"
          ? "text-orange-600 after:bg-orange-600"
          : "text-slate-100 after:bg-white"
        }`} 
          to="/offers"><BsFillBookmarkFill className="h-6 w-6"/>Tus Ofertas</Link>
         <Link className={`h-[10%] flex flex-col items-center gap-1 rounded-lg text-slate-100 text-xs text-center after:content-['_'] after:h-[1px] after:w-full after:scale-x-0 after:origin-left after:transition after:transform after:duration-150 after:ease-linear hover:after:scale-x-100 after:bg-white py-4 pl-2 ${
          location.pathname === "/mainprofile"
          ? "text-orange-600 after:bg-orange-600"
          : "text-slate-100 after:bg-white"
         }`} 
          to="/mainprofile"> 
          {
            profImg.length > 0 ?

            <img src={profImg} alt="" className="h-6 w-6 rounded-full object-cover" />
              :
              <FaUser className="h-6 w-6"/>
          }
          <span> Perfil </span>
          </Link>
          



          
        <button onClick={close} className="h-[10%] flex flex-col items-center rounded-lg text-slate-100 text-xs after:content-['_'] after:h-[1px] after:w-full after:scale-x-0 after:origin-left after:transition after:transform after:duration-150 after:ease-linear hover:after:scale-x-100 after:bg-white py-4 pl-2" ><AiOutlineLogout className="h-8 w-8"/> Cerrar Sesion</button>
        </div>
      </div>
    </nav>
  )
}

export default NavOrganizerRes
