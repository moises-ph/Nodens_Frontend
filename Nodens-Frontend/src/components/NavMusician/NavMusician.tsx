import { NavLink } from "react-router-dom"
import { NavBar } from "../Nav/Nav"
import { AiOutlineFileSearch, AiOutlineUserAdd } from "react-icons/ai"
import { IoShareSocialSharp } from "react-icons/io5"
import { FaHome } from "react-icons/fa"
import { NavLinkStyles } from "../../services"

const NavMusician:React.FC<NavBar> = ({inView, setShowNav}) =>  {
	if(!inView) return null;
  return (
    <div className="z-[100] w-full h-screen fixed flex flex-col justify-start items-end pr-4 pt-4" onClick={()=>setShowNav(false)}>
			<nav className="bg-slate-700 h-3/5 w-5/6 flex flex-col items-start gap-5 pt-4 pl-4 rounded-xl sm:w-3/5 md:w-2/4 lg:w-1/4 transition-all nav1">
				<div className="h-[10%] w-full flex items-center">
					<NavLink className={({isActive})=>NavLinkStyles({isActive})} to="/"><FaHome /> Home</NavLink>
					<button className="text-2xl text-slate-100 place-self-end mb-4 nav2" onClick={()=>setShowNav(false)}>X</button>
				</div>
				<NavLink className={({isActive})=>NavLinkStyles({isActive})} to="/posts"><IoShareSocialSharp /> Posts</NavLink>
				<NavLink className={({isActive})=>NavLinkStyles({isActive})} to="/offers"><AiOutlineFileSearch /> Ofertas</NavLink>
				<NavLink className={({isActive})=>NavLinkStyles({isActive})} to="/offers"><AiOutlineUserAdd /> Perfil</NavLink>
			</nav>
		</div>
  )
}

export default NavMusician