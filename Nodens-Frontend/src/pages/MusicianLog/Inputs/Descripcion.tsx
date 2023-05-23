import { useRef } from "react"
import Swal from "sweetalert2"

const Descripcion = ({ handler, goBack }: { handler: (key: string, value: any) => void, goBack: ()=>void }) => {
  const description = useRef<HTMLTextAreaElement>(null)

  const checking = () => {
    if(description.current!.value.length < 3) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor ingresa una descripcion mas larga',
        timer: 2000  
      })
    } else if (description.current!.value.length > 250) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor ingresa una descripcion menos larga',
        timer: 2000 
      })
    } else {
      handler('descripcion', description.current!.value)
    }
  }

  return (
  <>
    <div className='h-2/4 w-10/12 flex flex-col justify-center gap-8 px-2 text-slate-600 shadow-lg'>
      <label htmlFor='genero' className='flex flex-col text-2xl h-2/4 gap-[20%]'>Descripcion:
        <textarea name="telefono" ref={description} className='bg-transparent border-solid border-b-2 border-slate-300 text-slate-600 font-medium outline-none focus:border-slate-500'/>
      </label>
      <div className="flex w-3/5 gap-4">
        <button onClick={() => goBack()} className='px-4 bg-green-500 rounded-md text-green-900 h-8'>Atras</button>
        <button onClick={() => checking()} className='px-4 bg-blue-500 rounded-md text-blue-900 h-8'>Gurdar</button>
      </div>
    </div>
  </>
  )
}

export default Descripcion
