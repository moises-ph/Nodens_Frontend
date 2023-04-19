import { useRef } from 'react'
import Swal from 'sweetalert2'

const Genero = ({ handler, goBack }: { handler: (key: string, value: any) => void, goBack: ()=>void }) => {
    const genero = useRef<HTMLSelectElement>(null)
    const checking = () => {
      if(!genero.current!.value) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Por favor ingresa tu genero',
          timer: 2000  
        })
      } else {
        handler("genero", genero.current!.value)
      }
    }
    return (
    <div className='h-2/4 w-10/12 flex flex-col justify-center gap-8 px-2 text-slate-600 shadow-lg'>
      <label htmlFor='genero' className='flex flex-col text-2xl h-2/4 gap-[20%]'>Genero:
        <select name="" id="" ref={genero} className='bg-transparent border-solid border-b-2 border-slate-300 text-slate-600 font-medium focus:boder-slate-500'>
          <optgroup>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
            <option value="Otro">Otro</option>
          </optgroup>
        </select>
      </label>
      <div className="flex w-3/5 gap-4">
        <button onClick={() => goBack()} className='px-4 bg-green-500 rounded-md text-green-900 h-8'>Atras</button>
        <button onClick={() => checking()} className='px-4 bg-blue-500 rounded-md text-blue-900 h-8'>Guardar</button>
      </div>
    </div>
    )
}

export default Genero