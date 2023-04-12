import { useRef, useState } from "react"
import { GrFormClose } from 'react-icons/gr'
import Swal from 'sweetalert2'

export type InstrumentoT = {
  nombre: string;
  nivel: string;
}

const Instrumentos = ({ handler, goBack }: { handler: (key: string, value: any) => void, goBack: ()=>void }) => {
  const [instrumentos, setInstrumentos] = useState<InstrumentoT[]>([])
	const instrumento = useRef<HTMLInputElement>(null)
  const nivel = useRef<HTMLSelectElement>(null)

  const deleteInstrument = (i:number) => {
    setInstrumentos(instrumentos.filter((e, index) => index != i))
  }

  const addInstrument = () => {
    if(instrumento.current!.value && nivel.current!.value){
      if(!instrumentos.find(e => e.nombre === instrumento.current!.value)){
        setInstrumentos([...instrumentos, 
          {nombre: instrumento.current!.value, nivel: nivel.current!.value}]
        )
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Por favor ingresa un instrumento diferente',
          timer: 3000  
        })  
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor ingresa un instrumento y un nivel de experiencia',
        timer: 3000  
      })
    }
  }

  const checkLength = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'error',
      title: '6 instrumentos maximo'
    })
  }
  
  return (
    <div className='bg-slate-200 h-full border-solid border-2 border-slate-400 rounded-lg w-10/12 flex flex-col  gap-10 px-2 pt-4 text-slate-600'>
      <div className='text-2xl h-4/5 flex flex-col'>
        <p className="mb-2">Instrumentos:</p>
        <div className='grid grid-cols-2 grid-rows-3 h-20 w-full gap-2'>
          {
            instrumentos.map((instr, i)=>{
              return <span key={i} className='flex items-center justify-around text-base bg-slate-100 h-6 col-span-1 rounded-lg text-slate-700 font-semibold border-solid border-slate-600 border-2'>
                {instr.nombre}
                <button><GrFormClose onClick={()=>deleteInstrument(i)}/></button>
              </span>
            })
          }
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="w-11/12">Instrumento:
            <input type="text" name="instrumentos" ref={instrumento} className='w-full bg-transparent border-solid border-2 border-slate-400 rounded-md text-slate-700 font-medium text-lg pl-2'/>
          </label>
          <label htmlFor="">Experiencia: 
            <select name="" id="" ref={nivel}>
              <optgroup>
              <option value="" disabled >Experiencia</option>
              <option value="Menos de 1 año">Menos de 1 año</option>
              <option value="Mas de 1 año">Mas de 1 año</option>
              <option value="Mas de 2 años">Mas de 2 años</option>
              <option value="Mas de 5 años">Mas de 5 años</option>
              </optgroup>
            </select>
          </label>
          <button onClick={instrumentos.length < 6 ? addInstrument : checkLength}>Agregar</button>
        </div>
      </div>
      <div className="flex w-3/5 gap-4">
        <button className='px-4 bg-blue-300 border-blue-600 border-2 border-solid rounded-md text-blue-600 h-8' onClick={() => goBack()}>Atras</button>
        <button className='px-4 bg-green-100 border-green-700 border-2 border-solid rounded-md text-green-700 h-8' onClick={() =>handler('instrumentos', instrumentos)}>Guardar</button>
      </div>
    </div>
  );
};

export default Instrumentos;
