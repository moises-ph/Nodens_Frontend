import { NavLink, useNavigate } from "react-router-dom";
import { NavBar } from "../Nav/Nav";
import { FaHome, FaUsers } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";
import { AiOutlineUserAdd } from "react-icons/ai";
import { NavLinkStyles } from "../../services";
import { VscSignOut } from "react-icons/vsc";
import {MdOutlineWork} from "react-icons/md"

const NavOrganizer:React.FC<NavBar> = ({inView, setShowNav}) =>  {
	const navigation = useNavigate();
	const close = () => {
		localStorage.removeItem('authTokenForTheUser')
		navigation('/', {replace: true})
		location.reload()
	}
	if(!inView) return null;
  return (
    <div className="z-[100] w-full h-screen fixed flex flex-col justify-start items-end pr-4 pt-4" onClick={()=>setShowNav(false)}>
			<nav className="bg-slate-700 h-3/5 w-5/6 flex flex-col items-start gap-5 pt-4 pl-4 rounded-xl sm:w-3/5 md:w-2/4 lg:w-1/4 transition-all nav1">
				<div className="h-[10%] w-full flex items-center">
					<NavLink className={({isActive})=>NavLinkStyles({isActive})} to="/"><FaHome /> Home</NavLink>
					<button className="text-2xl text-slate-100 place-self-end mb-4 nav2" onClick={()=>setShowNav(false)}>X</button>
				</div>
				<NavLink className={({isActive})=>NavLinkStyles({isActive})} to="/posts"><IoShareSocialSharp /> Posts</NavLink>
				<NavLink className={({isActive})=>NavLinkStyles({isActive})} to="/profiles"><FaUsers /> Perfiles</NavLink>
				<NavLink className={({isActive})=>NavLinkStyles({isActive})} to="/mainprofile"><AiOutlineUserAdd /> Perfil</NavLink>
				<NavLink className={({isActive})=>NavLinkStyles({isActive})} to="/create-offer"><MdOutlineWork /> Crear Oferta</NavLink>
				<button className="h-[10%] w-11/12 flex items-center gap-2 rounded-lg text-slate-100 text-xl py-4 pl-2 transition-colors duration-300 ease-linear hover:bg-slate-400" onClick={close}><VscSignOut /> Cerrar sesion</button>
			</nav>
		</div>
  )
}

export default NavOrganizer