import { Link, useNavigate } from "react-router-dom"
import { IndexLink } from "../IndexLink"
import { FaHome, FaSuitcase, FaUserCircle } from "react-icons/fa";
import { MdBookmark } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";

const NavMusicianRes = ({perfil} : {perfil : string}) => {
  const navigation = useNavigate();
  const logOut = () => {
    localStorage.clear()
		navigation('/', {replace: true})
		location.reload()
  }
  return (
    <nav className="hidden md:flex fixed bg-slate-900 items-center justify-around h-[7vh] w-full z-50">
      <div className="w-full flex justify-center items-center lg:w-2/3">
        <Link to='/' className="flex"><IndexLink /><h3 className="text-slate-50 font-semibold text-xl">NODENS</h3></Link>
        <div className="w-3/4 flex justify-between lg:justify-end gap-[10%] lg:gap-[4%]">
          <Link className="h-[10%] flex flex-col items-center  rounded-lg text-slate-100 text-base after:content-['_'] after:h-[1px] after:w-full after:scale-x-0 after:origin-left after:transition after:transform after:duration-150 after:ease-linear hover:after:scale-x-100 after:bg-white py-4 pl-2" 
            to="/">
              <FaHome className="h-8 w-8" />
              <span className="text-sm">Inicio</span>
            </Link>
          <Link className="h-[10%] flex flex-col items-center  rounded-lg text-slate-100 text-base after:content-['_'] after:h-[1px] after:w-full after:scale-x-0 after:origin-left after:transition after:transform after:duration-150 after:ease-linear hover:after:scale-x-100 after:bg-white py-4 pl-2" 
            to="/offers">
              <FaSuitcase className="h-8 w-8" />
              <span className="text-sm">Oportunidades</span>
            </Link>
          <Link className="h-[10%] flex flex-col items-center  rounded-lg text-slate-100 text-base after:content-['_'] after:h-[1px] after:w-full after:scale-x-0 after:origin-left after:transition after:transform after:duration-150 after:ease-linear hover:after:scale-x-100 after:bg-white py-4 pl-2" 
            to="/applicants-offers">
              <MdBookmark className="h-8 w-8" />
              <span className="text-sm">Ofertas aplicadas</span>
            </Link>
          <Link className="h-[10%] flex flex-col items-center  rounded-lg text-slate-100 text-base after:content-['_'] after:h-[1px] after:w-full after:scale-x-0 after:origin-left after:transition after:transform after:duration-150 after:ease-linear hover:after:scale-x-100 after:bg-white py-4 pl-2" 
            to="/mainprofile">
              {perfil.length > 0 ? 
                <img src={perfil} className="h-8 w-8 rounded-full object-cover" />
                :
                <FaUserCircle className="h-8 w-8" />
              }
              <span className="text-sm">Perfil</span>
            </Link>
          <button onClick={()=>logOut()} className="h-fit flex flex-col items-center rounded-lg text-slate-100 text-base after:content-['_'] after:h-[1px] after:w-full after:scale-x-0 after:origin-left after:transition after:transform after:duration-150 after:ease-linear hover:after:scale-x-100 after:bg-white py-4 pl-2" >
            <AiOutlineLogout className="h-8 w-8" />
            <span className="text-sm">Cerrar Sesion</span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default NavMusicianRes
