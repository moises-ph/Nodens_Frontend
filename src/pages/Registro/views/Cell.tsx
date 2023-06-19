import { Dispatch, SetStateAction, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

export interface registerProps {
  handleSubmit: (e: any)=> void,
  setLoading: Dispatch<SetStateAction<boolean | undefined>>
  setRol: Dispatch<SetStateAction<"Musician" | "Organizer" | undefined>>
}

const Cell = ({handleSubmit, setLoading, setRol}: registerProps) =>  {
  const [con, setCon] = useState<boolean>(false);
  const translate = () => setCon(!con);
  return (
    <section className="h-screen w-full overflow-hidden">

      <Link to='/' onClick={()=>location.reload()} className="absolute bg-transparent h-16 w-16 z-50 flex justify-center items-center"><AiOutlineArrowLeft className="text-blue-900 text-xl font-bold"/></Link>
      <div className="bg-slate-100 h-full w-full relative top-0 left-0 flex justify-center items-center">
        <button className="absolute bg-transparent h-16 w-16 z-10 flex justify-center items-center top-0 right-0 text-slate-900 text-xl" onClick={()=>translate()}>X</button>
        <form onSubmit={handleSubmit} className="w-5/6 sm:w-[400px] h-4/6 flex flex-col justify-center items-start gap-8">
          <h1 className="text-slate-800 text-center font-semibold text-3xl w-full">Registrate</h1>
          <label htmlFor="Email" className="w-full flex flex-col gap-2">
            <h2 className="text-xl font-normal text-slate-700">Email</h2> 
            <input type="email" name="email" id="" className="placeholder:text-slate-600 w-full text-slate-800 bg-transparent border-solid border-2 border-slate-700 px-2 rounded-md transition-colors duration-300 ease-line outline-none leading-7" placeholder="Email" required />
          </label>
          <label htmlFor="userName" className="w-full flex flex-col gap-2">
            <h2 className="text-xl font-normal text-slate-700">Nombre de usuario</h2>
            <input type="text" minLength={3} name="userName" id="" className="placeholder:text-slate-600 w-full text-slate-800 bg-transparent border-solid border-2 border-slate-700 px-2 rounded-md transition-colors duration-300 ease-linear outline-none leading-7" placeholder="Nombre" required/>
          </label>
          <label htmlFor="password" className="w-full flex flex-col gap-2">
            <h2 className="text-xl font-normal text-slate-700">Password</h2>
            <input type="password" name="password" minLength={8} id="" className="placeholder:text-slate-600 w-full text-slate-800 bg-transparent border-solid border-2 border-slate-700 px-2 rounded-md transition-colors duration-300 ease-linear outline-none leading-7" placeholder="Password" required/>
          </label>
          <input type="submit" onClick={()=>{setLoading(true)}} value="Registrarse" className="place-self-center py-2 px-4 bg-blue-500 text-slate-100 font-semibold rounded hover:bg-blue-700 transition ease-in duration-200 transform active:translate-y-0" />
        </form>
      </div>

      <article className={`z-10 fixed top-0 left-0 bg-blue-500 flex pt-4 flex-col h-full w-full transition-all duration-300 ${con ? 'translate-y-full' : 'translate-y-0'}`}>
        <div className="h-2/4 w-full flex flex-col items-center justify-evenly">
          <h2 className="text-3xl text-center font-semibold">Eres un Musico o un Organizador de eventos</h2>
          <button className="rounded-full h-20 w-3/4 flex justify-center items-center text-slate-100 text-xl border-2 border-blue-700" onClick={()=>{translate(); setRol("Musician")}}>Musico</button>
        </div>
        <div className="h-2/4 w-full flex flex-col items-center justify-evenly bg-blue-700">
          <button className="rounded-full h-20 w-3/4 flex justify-center items-center text-slate-100 text-xl border-2 border-blue-900" onClick={()=>{translate(); setRol("Organizer")}}>Organizador</button>
        </div>
      </article>

    </section>
  )
}

export default Cell;
