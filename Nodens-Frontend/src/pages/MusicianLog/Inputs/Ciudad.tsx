import { useRef } from 'react'
import Swal from 'sweetalert2'

const Ciudad = ({ handler, goBack }: { handler: (key: string, value: any) => void, goBack: ()=>void }) => {
    const ciudad = useRef<HTMLSelectElement>(null)

    const checking = () => {
      if(!ciudad.current!.value) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Por favor ingresa una ciudad',
          timer: 2000  
        })
      } else {
        handler("ciudad", ciudad.current!.value)
      }
    }

    return (
    <>
      <div className='h-full bg-zinc-900 bg-opacity-100 rounded-xl border-solid w-10/12 flex flex-col gap-10 px-2 pt-4 text-slate-100 shadow-lg'>
        <div className='text-2xl h-5/6 flex flex-col justify-center gap-[15%]'>
          <p className="mb-2">Ciudad:</p>
          <label htmlFor="Ciudad" className='flex-col text-lg md:flex'>Ciudad:
            <select name="" id="" ref={ciudad} className="ml-2 bg-transparent border-b-2 border-solid border-slate-400">
              <optgroup className='bg-slate-900'>
                <option value=""></option>
                <option value="Arauca">Arauca</option>
                <option value="Armenia">Armenia</option>
                <option value="Barranquilla">Barranquilla</option>
                <option value="Bogotá">Bogotá</option>
                <option value="Bucaramanga">Bucaramanga</option>
                <option value="Cali">Cali</option>
                <option value="Cartagena">Cartagena</option>
                <option value="Cúcuta">Cúcuta</option>
                <option value="Florencia">Florencia</option>
                <option value="Ibagué">Ibagué</option>
                <option value="Leticia">Leticia</option>
                <option value="Manizales">Manizales</option>
                <option value="Medellín">Medellín</option>
                <option value="Mitú">Mitú</option>
                <option value="Mocoa">Mocoa</option>
                <option value="Montería">Montería</option>
                <option value="Neiva">Neiva</option>
                <option value="Pasto">Pasto</option>
                <option value="Pereira">Pereira</option>
                <option value="Popayán">Popayán</option>
                <option value="Puerto Carreño">Puerto Carreño</option>
                <option value="Puerto Inírida">Puerto Inírida</option>
                <option value="Quibdó">Quibdó</option>
                <option value="Riohacha">Riohacha</option>
                <option value="San Andrés">San Andrés</option>
                <option value="San José del Guaviare">San José del Guaviare</option>
                <option value="Santa Marta">Santa Marta</option>
                <option value="Sincelejo">Sincelejo</option>
                <option value="Tunja">Tunja</option>
                <option value="Valledupar">Valledupar</option>
                <option value="Villavicencio">Villavicencio</option>
                <option value="Yopal">Yopal</option>
              </optgroup>
            </select>
          </label>
          <div className="flex w-3/5 gap-4">
            <button className='px-4 bg-slate-100 rounded-md text-slate-900 h-8' onClick={() => goBack()}>Atras</button>
            <button className='px-4 bg-slate-100 rounded-md text-slate-900 h-8' onClick={() => checking()}>Guardar</button>
          </div>
        </div>
      </div>
    </>
    )
}

export default Ciudad