import { useRef, useState } from "react"
import Swal from "sweetalert2"


const Name = ({ handler, goBack, setNombre }: { handler: (key: string, value: any) => void, goBack: ()=>void, setNombre : (key : string, value : any) => void }) => {
  const name = useRef<HTMLInputElement>(null)
  const Lastname = useRef<HTMLInputElement>(null);
  const [isValue, setIsValue] = useState<boolean>(false);

  const checking = () => {
    if(name.current!.value.length < 3 || Lastname.current!.value.length < 3) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor ingresa un nombre valido',
        timer: 2000  
      })
    } else {
      setNombre(name.current!.value, Lastname.current!.value)
    }
  }

  return (
  <>
    <div className='bg-white transition-all bg-opacity-100 h-full rounded-lg w-10/12 flex flex-col justify-center gap-8 py-10 px-24 text-black/90 shadow-xl'>
      <div className="flex flex-col gap-10 h-fit">
        <label htmlFor='genero' className='flex flex-col text-2xl h-2/4 gap-3'>Cual es tu nombre?
          <input type="text" name="telefono" ref={name} onChange={() => setIsValue(true)} className='w-1/3 bg-transparent border-solid border-b-2 border-slate-300 text-black/70 font-thin outline-none focus:border-slate-500'/>
        </label>
        <label htmlFor='genero' className='flex flex-col text-2xl h-2/4 gap-3'>Apellido:
          <input type="text" name="telefono" ref={Lastname} className='bg-transparent border-solid border-b-2 w-1/3 border-slate-300 text-black/70 font-thin outline-none focus:border-slate-500'/>
        </label>
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