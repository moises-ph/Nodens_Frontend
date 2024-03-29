import { Link } from "react-router-dom"
import { IndexLink } from "../IndexLink"

const NavRes = () => {
  return (
    <nav className="hidden md:flex fixed bg-slate-900 items-center justify-between h-[7vh] w-full z-50 px-4">
      <Link to="/" className="flex"><IndexLink /><h3 className="text-slate-50 font-semibold">NODENS</h3></Link>
      <div className="w-2/4 flex justify-end gap-[10%] pr-4">
        <Link className="h-[10%] flex flex-col items-center  rounded-lg text-slate-100 text-base after:content-['_'] after:h-[1px] after:w-full after:scale-x-0 after:origin-left after:transition after:transform after:duration-150 after:ease-linear hover:after:scale-x-100 after:bg-white py-4 pl-2" 
          to="/registro">Registrate</Link>
        <Link className="h-[10%] flex flex-col items-center  rounded-lg text-slate-100 text-base after:content-['_'] after:h-[1px] after:w-full after:scale-x-0 after:origin-left after:transition after:transform after:duration-150 after:ease-linear hover:after:scale-x-100 after:bg-white py-4 pl-2" 
          to="/login">Inicia Sesión</Link>
      </div>
    </nav>
  )
}

export default NavRes