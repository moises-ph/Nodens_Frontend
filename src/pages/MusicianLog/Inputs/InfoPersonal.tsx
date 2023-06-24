import React, { useRef, useState } from 'react'

function InfoPersonal() {
  const [isValue, setIsValue] = useState<boolean>(false);
  const fecha_nacimiento = useRef<HTMLInputElement>(null)
  const name = useRef<HTMLInputElement>(null)
  const Lastname = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLTextAreaElement>(null)
  const genero = useRef<HTMLSelectElement>(null)


  return (
    <div className='bg-white transition-all bg-opacity-100 h-full rounded-lg w-10/12 flex flex-col justify-center gap-8 py-10 px-24 text-black/90 shadow-xl'>
      <h1 className='text-3xl'>Hablemos de ti...</h1>
      <div className="flex flex-col gap-1">
        <label htmlFor='genero' className='flex flex-col text-lg gap-3'>Cual es tu nombre?</label>
        <div className='flex gap-10 h-fit'>
          <input type="text" name="telefono" placeholder='Nombre' ref={name} onChange={() => setIsValue(name.current!.value.length > 3 && Lastname.current!.value.length > 3)} className='w-1/4| bg-transparent border-solid border-b-2 border-slate-300 text-black/70 text-xl placeholder:text-base placeholder:italic font-thin outline-none focus:border-slate-500'/>
          <input type="text" name="telefono" placeholder='Apelllido' ref={Lastname} onChange={() => setIsValue(name.current!.value.length > 3 && Lastname.current!.value.length > 3)} className='bg-transparent border-solid border-b-2 w-1/4 border-slate-300 text-black/70 text-xl placeholder:text-base placeholder:italic font-thin outline-none focus:border-slate-500'/>
        </div>
      </div>
      <div className='flex flex-col gap-1'>
        <label htmlFor='fecha_nacimiento' className='text-lg h-2/4 flex flex-col'>Fecha de tu nacimiento</label>
        <input type="date" onChange={() => setIsValue(fecha_nacimiento.current!.value ? true : false)} name="fecha_nacimiento" ref={fecha_nacimiento} className='bg-transparent md:w-1/3 border-solid border-0 border-b-2 border-slate-400 text-black/70 font-thin'/>
      </div>
      <div className='flex flex-col gap-1'>
        <label htmlFor='genero' className='flex flex-col text-lg'>Danos una breve descripción de ti</label>
        <textarea name="telefono" ref={description} className='bg-transparent w-1/3 border-solid border-b-2 border-slate-300 text-black/70 font-medium outline-none focus:border-slate-500'/>
      </div>
      <div className='flex flex-col gap-1'>
        <label htmlFor='genero' className='flex flex-col text-lg'>Genero</label>
        <select name="" id="" ref={genero} className='bg-slate-100 bg-opacity-20 border-solid border-b-2 w-1/4 border-slate-300 text-black/70 font-medium focus:boder-slate-500'>
          <optgroup className='backdrop-blur-md'>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
            <option value="Otro">Otro</option>
          </optgroup>
        </select>
      </div>
    </div>
  )
}

export default InfoPersonal