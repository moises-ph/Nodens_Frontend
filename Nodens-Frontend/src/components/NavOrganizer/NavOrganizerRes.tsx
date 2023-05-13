import { Link, useNavigate } from "react-router-dom"
import { IndexLink } from "../IndexLink"

const NavOrganizerRes = () => {
  const navigation = useNavigate()
  const close = () => {
		localStorage.removeItem('authTokenForTheUser')
		navigation('/', {replace: true})
		location.reload()
	}
  return (
    <nav className="hidden md:flex fixed bg-slate-900 items-center justify-around h-[7vh] w-full z-50">
      <div className="flex"><IndexLink /><h3 className="text-slate-50 font-semibold">NODENS</h3></div>
      <div className="w-3/4 flex justify-between lg:justify-end gap-[10%]">
        <Link className="h-[10%] flex flex-col items-center  rounded-lg text-slate-100 text-sm after:content-['_'] after:h-[1px] after:w-full after:scale-x-0 after:origin-left after:transition after:transform after:duration-150 after:ease-linear hover:after:scale-x-100 after:bg-white py-4 pl-2" 
          to="/posts">Posts</Link>
        <Link className="h-[10%] flex flex-col items-center  rounded-lg text-slate-100 text-sm after:content-['_'] after:h-[1px] after:w-full after:scale-x-0 after:origin-left after:transition after:transform after:duration-150 after:ease-linear hover:after:scale-x-100 after:bg-white py-4 pl-2" 
          to="/profiles">Perfiles</Link>
        <Link className="h-[10%] flex flex-col items-center  rounded-lg text-slate-100 text-base after:content-['_'] after:h-[1px] after:w-full after:scale-x-0 after:origin-left after:transition after:transform after:duration-150 after:ease-linear hover:after:scale-x-100 after:bg-white py-4 pl-2" 
          to="/mainprofile">Perfil</Link>
        <Link className="h-[10%] flex flex-col items-center  rounded-lg text-slate-100 text-sm after:content-['_'] after:h-[1px] after:w-full after:scale-x-0 after:origin-left after:transition after:transform after:duration-150 after:ease-linear hover:after:scale-x-100 after:bg-white py-4 pl-2" 
          to="/create-offer">Crear Oferta</Link>
        <Link className="h-[10%] flex flex-col items-center  rounded-lg text-slate-100 text-sm after:content-['_'] after:h-[1px] after:w-full after:scale-x-0 after:origin-left after:transition after:transform after:duration-150 after:ease-linear hover:after:scale-x-100 after:bg-white py-4 pl-2" 
          to="/offers">Tus Ofertas</Link>
        <button onClick={close} className="h-[10%] flex flex-col items-center  rounded-lg text-slate-100 text-base after:content-['_'] after:h-[1px] after:w-full after:scale-x-0 after:origin-left after:transition after:transform after:duration-150 after:ease-linear hover:after:scale-x-100 after:bg-white py-4 pl-2" >Cerrar Sesion</button>
      </div>
    </nav>
  )
}

export default NavOrganizerRes