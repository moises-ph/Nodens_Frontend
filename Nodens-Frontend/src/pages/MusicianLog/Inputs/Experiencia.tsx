import { useRef } from 'react'
import Swal from 'sweetalert2'

const Experiencia = ({ handler, goBack }: { handler: (key: string, value: any) => void, goBack: ()=>void }) => {
    const experiencia = useRef<HTMLSelectElement>(null)
    const checking = () => {
      if(!experiencia.current!.value) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Por favor ingresa tu tiempo de experiencia',
          timer: 2000  
        })
      } else {
        handler("experiencia", experiencia.current!.value)
      }
    }
    return (
    <>
      <div className='h-full border-solid w-10/12 flex flex-col gap-10 px-2 pt-4 text-slate-600 shadow-lg'>
        <div className='text-2xl h-5/6 flex flex-col justify-center gap-[15%]'>
          <p className="mb-2">Experiencia:</p>
          <label htmlFor="experiencia" className='flex-col text-lg md:flex'>Experiencia:
            <select name="" id="" ref={experiencia} className="ml-2 bg-transparent border-b-2 border-solid border-slate-400">
              <optgroup>
              <option value=""></option>
                <option value="Sin Experiencia">Sin Experiencia</option>
                <option value="Menos de 1 año">Menos de 1 año</option>
                <option value="Mas de 1 año">Mas de 1 año</option>
                <option value="Mas de 2 años">Mas de 2 años</option>
                <option value="Mas de 3 años">Mas de 3 años</option>
                <option value="Mas de 5 años">Mas de 5 años</option>
                <option value="Mas de 7 años">Mas de 7 años</option>
                <option value="Mas de 10 años">Mas de 10 años</option>
              </optgroup>
            </select>
          </label>
          <div className="flex w-3/5 gap-4">
            <button className='px-4 bg-blue-500 rounded-md text-blue-900 h-8' onClick={() => goBack()}>Atras</button>
            <button className='px-4 bg-green-500 rounded-md text-green-900 h-8' onClick={() => checking()}>Guardar</button>
          </div>
        </div>
      </div>
    </>
    )
}

export default Experiencia