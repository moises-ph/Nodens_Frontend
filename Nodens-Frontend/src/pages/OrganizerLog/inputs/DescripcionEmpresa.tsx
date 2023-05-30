import { useEffect, useRef } from 'react'
import Swal from 'sweetalert2'

const DescripcionEmpresa = ({ handler, goBack, gotCompany }: { handler: (key: string, value: any) => void, goBack: ()=>void, gotCompany : boolean }) => {
    const descripcion_empresa = useRef<HTMLTextAreaElement>(null)
    const checking = () => {
      if(descripcion_empresa.current!.value.length < 0) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Por favor ingresa una descripcion valida',
          timer: 2000  
        })
      } else {
        handler('descripcion_empresa', descripcion_empresa.current!.value)
      }
    }
    useEffect(()=> {if(gotCompany)handler('descripcion_empresa', "")}  ,[])
    return (
    <>
      <div className='h-3/4 w-10/12 flex flex-col justify-center gap-8 px-2 text-slate-600 shadow-lg'>
        <label className='flex flex-col text-2xl h-3/4 gap-[20%]' htmlFor='descripcion_empresa'>Descripcion de la Empresa
          <textarea className='h-3/4 bg-transparent resize-none border-solid border-b-2 border-slate-300 text-slate-600 font-medium outline-none focus:border-slate-500' placeholder='Descripción' name="descripcion_empresa" ref={descripcion_empresa} />
        </label>
        <div className="flex w-3/5 gap-4">
          <button onClick={() => goBack()} className='px-4 bg-green-500 rounded-md text-green-900 h-8'>Atras</button>
          <button onClick={() => checking()} className='px-4 bg-blue-500 rounded-md text-blue-900 h-8'>Enviar</button>
        </div>
      </div>
    </>
    )
}

export default DescripcionEmpresa