import { useRef } from 'react'
import Swal from 'sweetalert2'

const NombreEmpresa = ({ handler, goBack }: { handler: (key: string, value: any) => void, goBack: ()=>void }) => {
    const nombre_empresa = useRef<HTMLInputElement>(null)
    const checking = () => {
      if(nombre_empresa.current!.value.length < 3) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Por favor ingresa un nombre valido',
          timer: 2000  
        })
      } else {
        handler('nombre_empresa', nombre_empresa.current!.value)
      }
    }
    return (
    <>
      <div className='h-3/4 w-10/12 flex flex-col justify-center gap-8 px-2 text-slate-100 bg-zinc-900 bg-opacity-100 shadow-xl rounded-xl'>
        <label className='flex flex-col text-2xl h-2/4 gap-[20%]' htmlFor='nombre_empresa'>Nombre de la empresa
          <input className='bg-transparent border-solid border-b-2 border-slate-300 text-slate-100 font-medium outline-none focus:border-slate-500' placeholder='Nombre' ref={nombre_empresa} />
        </label>
        <div className="flex w-3/5 gap-4">
          <button onClick={() => goBack()} className='px-4 bg-orange-500 rounded-md text-slate-100 h-8'>Atras</button>
          <button onClick={() => checking()} className='px-4 bg-blue-500 rounded-md text-slate-100 h-8'>Enviar</button>
          <button onClick={() => handler('nombre_empresa', "")} className='px-4 bg-zinc-500 bg-opacity-20 rounded-md text-orange-500 h-18 text-center'>No quiero añadir una empresa</button>
        </div>
      </div>
    </>
    )
}

export default NombreEmpresa