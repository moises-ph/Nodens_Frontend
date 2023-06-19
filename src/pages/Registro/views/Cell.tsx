import { Dispatch, SetStateAction, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

export interface registerProps {
  handleSubmit: (e: any)=> void,
  setLoading: Dispatch<SetStateAction<boolean | undefined>>
}

const Cell = ({handleSubmit, setLoading}: registerProps) =>  {
  const [con, setCon] = useState<boolean>(false);
  const translate = () => setCon(!con);
  return (
    <section className="h-screen w-full overflow-hidden">
      <Link to='/' onClick={()=>location.reload()} className="absolute bg-transparent h-16 w-16 z-50 flex justify-center items-center"><AiOutlineArrowLeft className="text-blue-900 text-xl font-bold"/></Link>
      <div className="bg-blue-500 h-full w-full relative top-0 left-0">
        <form onSubmit={handleSubmit} className="w-5/6 sm:w-[400px] h-4/6 rounded-lg shadow-xl shadow-slate-900 flex flex-col justify-center items-start bg-zinc-900 z-30 pl-6 py-4 pt-16 gap-4">
          <label htmlFor="Email" className="w-full flex flex-col gap-2">
            <h2>Email</h2> 
            <input type="email" name="email" id="" className="placeholder:text-slate-600 w-11/12 text-slate-100 bg-transparent border-solid border-b-2 border-b-slate-400 transition-colors duration-300 ease-linear focus:border-b-slate-100 focus:border-solid focus:border-b-2 outline-none leading-7" placeholder="Email" required />
          </label>
          <label htmlFor="userName" className="w-full flex flex-col gap-2">
            <h2>Nombre de usuario</h2>
            <input type="text" minLength={3} name="userName" id="" className="placeholder:text-slate-600 w-11/12 text-slate-100 bg-transparent border-solid border-b-2 border-b-slate-400 transition-colors duration-300 ease-linear focus:border-b-slate-100 focus:border-solid focus:border-b-2 outline-none leading-7" placeholder="Nombre" required/>
          </label>
          <label htmlFor="rol" className="w-full flex flex-col gap-2">
            <h2>Rol</h2>
            <select name="rol" id="" className="w-11/12 text-slate-100 bg-transparent border-solid border-b-2 border-b-slate-400 transition-colors duration-300 ease-linear focus:border-b-slate-100 focus:border-solid focus:border-b-2 outline-none leading-7" defaultValue='Rol' required>
              <option className="w-11/12 bg-zinc-900 text-slate-100 bg-transparent border-solid border-b-2 border-b-slate-400" >Rol</option>
              <option className="w-11/12 bg-zinc-900 text-slate-100 bg-transparent border-solid border-b-2 border-b-slate-400" value="Musician">Musician</option>
              <option className="w-11/12 bg-zinc-900 text-slate-100 bg-transparent border-solid border-b-2 border-b-slate-400" value="Organizer">Organizer</option>
            </select>
          </label>
          <label htmlFor="password" className="w-full flex flex-col gap-2">
            <h2>Password</h2>
            <input type="password" name="password" minLength={8} id="" className="placeholder:text-slate-600 w-11/12 text-slate-100 bg-transparent border-solid border-b-2 border-b-slate-400 transition-colors duration-300 ease-linear focus:border-b-slate-100 focus:border-solid focus:border-b-2 outline-none leading-7" placeholder="Password" required/>
          </label>
          <input type="submit" onClick={()=>{setLoading(true)}} value="Registrarse" className="place-self-center py-2 px-4 bg-transparent text-[#E15D12] font-semibold border border-[#E15D12] rounded hover:bg-[#E15D12] hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0" />
        </form>
      </div>

      <article className={`z-10 fixed top-0 left-0 bg-blue-500 flex pt-4 flex-col h-full w-full transition-all duration-300 ${con ? 'translate-y-full' : 'translate-y-0'}`}>
        <div className="h-2/4 w-full flex flex-col items-center justify-evenly">
          <h2 className="text-3xl text-center font-semibold">Eres un Musico o un Organizador de eventos</h2>
          <button className="rounded-full h-20 w-3/4 flex justify-center items-center text-slate-100 text-xl border-2 border-blue-700" onClick={()=>translate()}>Musico</button>
        </div>
        <div className="h-2/4 w-full flex flex-col items-center justify-evenly bg-blue-700">
          <button className="rounded-full h-20 w-3/4 flex justify-center items-center text-slate-100 text-xl border-2 border-blue-900" onClick={()=>translate()}>Organizador</button>
        </div>
      </article>

    </section>
  )
}

export default Cell;
