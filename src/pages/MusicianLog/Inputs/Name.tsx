import { useRef, useState, useEffect } from 'react';
import Swal from "sweetalert2"


const Name = ({ handler, goBack, setNombre, actualMusician }: { handler: (key: string, value: any) => void, goBack: ()=>void, setNombre : (key : string, value : any) => void, actualMusician : any }) => {
  const name = useRef<HTMLInputElement>(null)
  const Lastname = useRef<HTMLInputElement>(null);
  const [isValue, setIsValue] = useState<boolean>(false);

  const checking = () => {
    if(name.current!.value.length < 3 || Lastname.current!.value.length < 3) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor ingresa un nombre o apellido valido',
        timer: 2000  
      })
    } else {
      setNombre(name.current!.value, Lastname.current!.value)
    }
  }

  useEffect(() => {
    if(actualMusician.Name.length > 0 && actualMusician.Lastname.length > 0){
      name.current!.value = actualMusician.Name;
      Lastname.current!.value = actualMusician.Lastname;
      setIsValue(true);
    }
  })

  return (
  <>
    <div className='bg-white transition-all bg-opacity-100 h-full rounded-lg w-10/12 flex flex-col justify-center gap-8 py-10 px-24 text-black/90 shadow-xl'>
      <label htmlFor='genero' className='flex flex-col text-2xl gap-3'>Cual es tu nombre?</label>
      <div className="flex gap-10 h-fit">
        <input type="text" name="telefono" placeholder='Nombre' ref={name} onChange={() => setIsValue(name.current!.value.length > 3 && Lastname.current!.value.length > 3)} className='w-1/4| bg-transparent border-solid border-b-2 border-slate-300 text-black/70 text-xl placeholder:text-base placeholder:italic font-thin outline-none focus:border-slate-500'/>
        <input type="text" name="telefono" placeholder='Apelllido' ref={Lastname} onChange={() => setIsValue(name.current!.value.length > 3 && Lastname.current!.value.length > 3)} className='bg-transparent border-solid border-b-2 w-1/4 border-slate-300 text-black/70 text-xl placeholder:text-base placeholder:italic font-thin outline-none focus:border-slate-500'/>
      </div>
      <div className="flex gap-4">
        <button onClick={() => goBack()} className='px-4 bg-orange-500 rounded-md text-slate-100 h-8'>Atras</button>
        <button onClick={() => checking()} className='px-4 bg-blue-700 disabled:bg-blue-400 rounded-md text-slate-100 h-8' disabled={!isValue}>Guardar</button>
      </div>
    </div>
  </>
  )
}

export default Name