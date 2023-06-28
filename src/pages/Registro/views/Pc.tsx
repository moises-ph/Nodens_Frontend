import { Dispatch, SetStateAction, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import { registerProps } from "./Cell";
import Swal from "sweetalert2";

const Pc = ({ handleSubmit, setLoading, setRol }: registerProps) => {
  const [translateLeft, setTranslateLeft] = useState<boolean>(false);
  const [translateRight, setTranslateRight] = useState<boolean>(false);

  const regExpEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  const validatePasswords = (pass1 : string, pass2 : string) : boolean => {
    if(pass1 != pass2) {
      Swal.fire({
        title: "Las contraseñas deben ser iguales",
        icon: "error",
        timer: 3000,
        showCloseButton: true,
      });
      return false
    }
    else return true;

  }

  const validatesEmail = (email : string): boolean => {
    if (!regExpEmail.test(email)) {
      Swal.fire({
        title: "Ingrese un email válido",
        icon: "error",
        timer: 3000,
        showCloseButton: true,
      });
      return false;
    } else return true;
  };

  const preHandler = (e : any) => {
    e.preventDefault();
    const form: FormData = new FormData(e.target);
    const object = Object.fromEntries(form);
    if(validatesEmail(object.email as string) && validatePasswords(object.password as string, object['password-con'] as string)){
      handleSubmit(e);
    }
  }

  return (
    <section className="w-full h-screen flex overflow-hidden">
      <Link to='/' className="absolute top-0 h-20 w-20 p-8 text-2xl text-slate-800 left-0 z-[10000]"><AiOutlineArrowLeft /></Link>
      <div className="w-1/2 h-full bg-red-500">

        <div className="bg-slate-100 w-full h-full flex justify-center items-center">

          <form onSubmit={preHandler} className="w-5/6 sm:w-[400px] h-4/6 flex flex-col justify-center items-start gap-8">
            <h1 className="text-slate-100 text-center font-semibold text-3xl w-full">Registrate</h1>
            <label htmlFor="Email" className="w-full flex flex-col gap-2">
              <h2 className="text-xl font-normal text-blue-500">Email</h2> 
              <input type="email" name="email" id="" className="placeholder:text-blue-500 w-full text-blue-500 bg-transparent border-solid border-2 border-blue-500 px-2 rounded-md transition-colors duration-300 ease-line outline-none leading-7" placeholder="Email" required />
            </label>
            <label htmlFor="userName" className="w-full flex flex-col gap-2">
              <h2 className="text-xl font-normal text-blue-500">Nombre de usuario</h2>
              <input type="text" minLength={3} name="userName" id="" className="placeholder:text-blue-500 w-full text-blue-500 bg-transparent border-solid border-2 border-blue-500 px-2 rounded-md transition-colors duration-300 ease-linear outline-none leading-7" placeholder="Nombre" required/>
            </label>
            <label htmlFor="password" className="w-full flex flex-col gap-2">
              <h2 className="text-xl font-normal text-blue-500">Contraseña</h2>
              <input type="password" name="password" minLength={8} id="" className="placeholder:text-blue-500 w-full text-blue-500 bg-transparent border-solid border-2 border-blue-500 px-2 rounded-md transition-colors duration-300 ease-linear outline-none leading-7" placeholder="Ingrese una contraseña" required/>
            </label>
            <label htmlFor="password" className="w-full flex flex-col gap-2">
              <h2 className="text-xl font-normal text-blue-500">Confirma la Contraseña</h2>
              <input type="password" name="password-con" minLength={8} id="" className="placeholder:text-blue-500 w-full text-blue-500 bg-transparent border-solid border-2 border-blue-500 px-2 rounded-md transition-colors duration-300 ease-linear outline-none leading-7" placeholder="Confirme la contraseña" required/>
            </label>
            <p className="text-blue-500 italic text-sm text-center">Al registrarse aceptas nuestros <a className="underline">Términos y Condiciones</a></p>
            <input type="submit" onClick={()=>{setLoading(true)}} value="Aceptar y Registrarse" className="place-self-center py-2 px-4 text-slate-100 bg-blue-500 font-semibold rounded hover:bg-blue-700 hover:text-slate-100 transition ease-in duration-200 transform active:translate-y-0" />
          </form>

        </div>

        <div className={`bg-blue-500 w-1/2 h-full flex flex-col justify-center items-center gap-8 fixed top-0 left-0 z-10 transition-all duration-300  ${translateLeft ? '-translate-x-full' : 'translate-x-0'}`}>
          <h2 className="text-4xl font-semibold">Eres Un Musico?</h2>
          <button className="rounded-full bg-slate-100 text-blue-700 text-2xl font-semibold w-1/3 h-14" onClick={() => {setTranslateRight(!translateRight); setRol("Musician")}}>Musico</button>
        </div>
      </div>

      <div className="w-1/2 h-full bg-blue-500">
        <div className="bg-blue-500 w-full h-full flex justify-center items-center">

          <form onSubmit={preHandler} className="w-5/6 sm:w-[400px] h-4/6 flex flex-col justify-center items-start gap-8">
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
              <h2 className="text-xl font-normal text-slate-200">Contraseña</h2>
              <input type="password" name="password" minLength={8} id="" className="placeholder:text-slate-300 w-full text-slate-100 bg-transparent border-solid border-2 border-slate-200 px-2 rounded-md transition-colors duration-300 ease-linear outline-none leading-7" placeholder="Ingrese una contraseña" required/>
            </label>
            <label htmlFor="password" className="w-full flex flex-col gap-2">
              <h2 className="text-xl font-normal text-slate-200">Confirma la Contraseña</h2>
              <input type="password" name="password-con" minLength={8} id="" className="placeholder:text-slate-300 w-full text-slate-100 bg-transparent border-solid border-2 border-slate-200 px-2 rounded-md transition-colors duration-300 ease-linear outline-none leading-7" placeholder="Confirme la contraseña" required/>
            </label>
            <p className="text-slate-200 italic text-sm text-center">Al registrarse aceptas nuestros <a className="underline">Términos y Condiciones</a></p>
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
