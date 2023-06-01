import { useRef } from "react"
import Swal from "sweetalert2"

const Lastname =({ handler, goBack }: { handler: (key: string, value: any) => void, goBack: ()=>void }) => {
  const Lastname = useRef<HTMLInputElement>(null)

  const checking = () => {
    if(Lastname.current!.value.length < 3) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor ingresa un apellido valido',
        timer: 2000  
      })
    } else {
      handler('Lastname', Lastname.current!.value)
    }
  }

  return (
  <>
    <div className='h-2/4 bg-slate-100 bg-opacity-20 w-10/12 flex flex-col justify-center gap-8 px-2 text-slate-100 shadow-lg rounded-xl'>
      <label htmlFor='genero' className='flex flex-col text-2xl h-2/4 gap-[20%]'>Apellido:
        <input type="text" name="telefono" ref={Lastname} className='bg-transparent border-solid border-b-2 border-slate-300 text-slate-100 font-medium outline-none focus:border-slate-500'/>
      </label>
      <div className="flex w-3/5 gap-4">
        <button onClick={() => goBack()} className='px-4 bg-slate-100 rounded-md text-slate-900 h-8'>Atras</button>
        <button onClick={() => checking()} className='px-4 bg-slate-100 rounded-md text-slate-900 h-8'>Guardar</button>
      </div>
    </div>
  </>
  )
}

export default Lastname