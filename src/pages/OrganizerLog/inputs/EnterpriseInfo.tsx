import React, { useRef, useState } from 'react'
import enterprise from '../../../images/pngwing.com.webp'
import { OrganizerT } from '../../../types';

const EnterpriseInfo = ({handler, goBack, setOrganizer, organizer}: {handler:  () => void, goBack: ()=>void, setOrganizer: React.Dispatch<React.SetStateAction<OrganizerT>>, organizer: OrganizerT}) => {
  const [isValue, setIsValue] = useState<boolean>(false);
  const nombre_empresa = useRef<HTMLInputElement>(null);
  const descripcion_empresa = useRef<HTMLTextAreaElement>(null);

  const send = () => {
    handler()
    
  }

  return (
    <div className='bg-white transition-all bg-opacity-100 md:h-full rounded-lg w-10/12 flex flex-col md:flex-row justify-evenly md:items-center gap-8 py-10 md:px-24 px-8 text-black/90 shadow-xl'>
      <div className='flex flex-col md:w-1/2 gap-12'>
        <h1 className='text-3xl'>Hablemos de tu empresa</h1>
        <div className="flex flex-col gap-1">
          <label htmlFor='nombre_empresa' className='flex flex-col text-lg gap-3'>Cual es el nombre de tu empresa</label>
          <div className='flex gap-10 h-fit'>
            <input type="text" name="nombre_empresa" placeholder='Nombre' ref={nombre_empresa} onChange={() => {setIsValue(nombre_empresa.current!.value.length > 3 && descripcion_empresa.current!.value.length > 3); setOrganizer({...organizer, ["nombre_empresa"]: nombre_empresa.current!.value})}} className='w-1/4| bg-transparent border-solid border-b-2 border-slate-300 text-black/70 text-xl placeholder:text-base placeholder:italic font-thin outline-none focus:border-slate-500'/>
          </div>
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='genero' className='flex flex-col text-lg'>Danos una breve descripción de tu empresa</label>
          <textarea name="descripcion_empresa" onChange={() => {setIsValue(nombre_empresa.current!.value.length > 3 && descripcion_empresa.current!.value.length > 3); setOrganizer({...organizer, ["descripcion_empresa"]: descripcion_empresa.current!.value})}} ref={descripcion_empresa} className='bg-transparent w-2/3 border-solid border-b-2 border-slate-300 text-black/70 font-medium outline-none focus:border-slate-500'/>
        </div>
        <div className=''>
        <button  onClick={()=> goBack()} className={`p-2 ${isValue ? 'bg-blue-500' : 'bg-blue-500'} text-slate-100 font-semibold  rounded-xl shadow-xl hover:drop-shadow-xl hover:scale-105 transition`}>volver</button>
        <button disabled={!isValue} onClick={()=> send()} className={`p-2 ${isValue ? 'bg-orange-500' : 'bg-orange-500'} text-slate-100 translate-x-3 font-semibold rounded-xl shadow-xl hover:drop-shadow-xl hover:scale-105 transition`}>Guardar</button>
        </div>
      </div>
      <div className="w-1/2 h-full md:flex justify-center items-center hidden">
        <img src={enterprise} alt="" className='w-full h-auto'/>
      </div>
    </div>
  )
}

export default EnterpriseInfo
