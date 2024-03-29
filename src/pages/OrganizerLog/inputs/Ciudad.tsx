import { useRef } from 'react'
import Swal from 'sweetalert2'

const Ciudad = ({ handler }: { handler: (key: string, value: any) => void }) => {
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
      <div className='h-[35rem] border-solid w-[25rem] flex flex-col items-center gap-10 px-2 pt-4 text-slate-100 bg-zinc-900 bg-opacity-100 rounded-xl shadow-2xl'>
        <div className='text-2xl h-5/6 flex flex-col justify-center items-center gap-[15%]'>
          <p className="mb-2">Ciudad:</p>
          <label htmlFor="Ciudad" className='flex-col text-lg md:flex'>
            <select name="" id="" ref={ciudad} className="ml-2 w-56 bg-transparent border-b-2 border-solid border-slate-400">
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
          <div className="flex w-full gap-4 justify-center">
            <button className='px-4 bg-orange-500 rounded-md text-slate-100 h-8' onClick={() => checking()}>Guardar</button>
          </div>
        </div>
      </div>
    </>
    )
}

export default Ciudad