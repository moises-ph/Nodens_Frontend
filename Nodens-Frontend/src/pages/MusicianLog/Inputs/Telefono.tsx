import { useRef } from 'react'
import Swal from 'sweetalert2'

const Telefono = ({ handler, goBack }: { handler: (key: string, value: any) => void, goBack: ()=>void }) => {
    const telefono = useRef<HTMLInputElement>(null)

    const checking = () => {
      if(telefono.current!.value.length < 10) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Por favor ingresa tu numero de telefono',
          timer: 2000  
        })
      } else {
        handler('telefono', [...[], `${telefono.current!.value}`])
      }
    }
  
    return (
    <>
      <div className='h-2/4 bg-slate-100 bg-opacity-20 rounded-xl w-10/12 flex flex-col justify-center gap-8 px-2 text-slate-100 shadow-lg'>
        <label htmlFor='genero' className='flex flex-col text-2xl h-2/4 gap-[20%]'>Telefono:
          <input type="number" name="telefono" ref={telefono} className='bg-transparent border-solid border-b-2 border-slate-300 text-slate-100 font-medium outline-none focus:border-slate-500'/>
        </label>
        <div className="flex w-3/5 gap-4">
          <button onClick={() => goBack()} className='px-4 bg-orange-500 rounded-md text-slate-100 h-8'>Atras</button>
          <button onClick={() => checking()} className='px-4 bg-blue-500 rounded-md text-slate-100 h-8'>Enviar</button>
        </div>
      </div>
    </>
    )
}

export default Telefono