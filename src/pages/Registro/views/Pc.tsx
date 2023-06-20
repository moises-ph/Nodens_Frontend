import { Dispatch, SetStateAction, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import { registerProps } from "./Cell";

const Pc = ({ handleSubmit, setLoading, setRol }: registerProps) => {
  const [translateLeft, setTranslateLeft] = useState<boolean>(false);
  const [translateRight, setTranslateRight] = useState<boolean>(false);
  return (
    <section className="w-full h-screen flex overflow-hidden">
      <Link to='/' className="absolute top-0 h-20 w-20 p-8 text-2xl text-slate-800 left-0 z-[10000]"><AiOutlineArrowLeft /></Link>
      <div className="w-1/2 h-full bg-red-500">
        <div className="bg-slate-100 w-full h-full flex justify-center items-center">

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

        <div className={`bg-blue-500 w-1/2 h-full flex flex-col justify-center items-center gap-8 fixed top-0 left-0 z-10 transition-all duration-300  ${translateLeft ? '-translate-x-full' : 'translate-x-0'}`}>
          <h2 className="text-4xl font-semibold">Eres Un Musico?</h2>
          <button className="rounded-full bg-slate-100 text-blue-700 text-2xl font-semibold w-1/3 h-14" onClick={() => {setTranslateRight(!translateRight); setRol("Musician")}}>Musico</button>
        </div>
      </div>

      <div className="w-1/2 h-full bg-blue-500">
        <div className="bg-blue-500 w-full h-full flex justify-center items-center">

          <form onSubmit={handleSubmit} className="w-5/6 sm:w-[400px] h-4/6 flex flex-col justify-center items-start gap-8">
            <h1 className="text-slate-100 text-center font-semibold text-3xl w-full">Registrate</h1>
            <label htmlFor="Email" className="w-full flex flex-col gap-2">
              <h2 className="text-xl font-normal text-slate-200">Email</h2> 
              <input type="email" name="email" id="" className="placeholder:text-slate-300 w-full text-slate-100 bg-transparent border-solid border-2 border-slate-200 px-2 rounded-md transition-colors duration-300 ease-line outline-none leading-7" placeholder="Email" required />
            </label>
            <label htmlFor="userName" className="w-full flex flex-col gap-2">
              <h2 className="text-xl font-normal text-slate-200">Nombre de usuario</h2>
              <input type="text" minLength={3} name="userName" id="" className="placeholder:text-slate-300 w-full text-slate-100 bg-transparent border-solid border-2 border-slate-200 px-2 rounded-md transition-colors duration-300 ease-linear outline-none leading-7" placeholder="Nombre" required/>
            </label>
            <label htmlFor="password" className="w-full flex flex-col gap-2">
              <h2 className="text-xl font-normal text-slate-200">Password</h2>
              <input type="password" name="password" minLength={8} id="" className="placeholder:text-slate-300 w-full text-slate-100 bg-transparent border-solid border-2 border-slate-200 px-2 rounded-md transition-colors duration-300 ease-linear outline-none leading-7" placeholder="Password" required/>
            </label>
            <input type="submit" onClick={()=>{setLoading(true)}} value="Registrarse" className="place-self-center py-2 px-4 bg-slate-100 text-blue-500 font-semibold rounded hover:bg-blue-700 hover:text-slate-100 transition ease-in duration-200 transform active:translate-y-0" />
          </form>

        </div>
        <div className={`bg-slate-100 w-1/2 h-full fixed flex flex-col justify-center gap-8 items-center top-0 right-0 z-10 transition-all duration-300  ${translateRight ? 'translate-x-full' : 'translate-x-0'}`}>
          <h2 className="text-4xl font-semibold w-full text-center text-slate-800">O Eres un Organizador?</h2>
          <button className="rounded-full bg-blue-700 text-slate-100 text-2xl font-semibold w-1/3 h-14" onClick={()=>{setTranslateLeft(!translateLeft); setRol("Organizer")}}>Organizador</button>
        </div>
      </div>

    </section>
  )
}

export default Pc;
