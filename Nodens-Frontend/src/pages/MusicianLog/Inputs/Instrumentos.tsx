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
<<<<<<< HEAD
    <div className='bg-slate-100 h-full shadow-2xl border-solid border-1  rounded-lg w-10/12 flex flex-col  gap-10 px-2 pt-4 text-slate-600'>
      <div className='text-2xl h-4/5 flex flex-col'>
        <p className="mb-2 text-center">Instrumentos</p>
        <div className='grid grid-cols-2 grid-rows-3 h-20 w-full gap-2'>
=======
    <div className='h-full border-solid w-10/12 flex flex-col gap-10 px-2 pt-4 text-slate-600'>
      <div className='text-2xl h-5/6 flex flex-col'>
        <p className="mb-2">Instrumentos:</p>
        <div className='grid grid-cols-2 grid-rows-3 h-4/5 w-full gap-2 mb-8'>
>>>>>>> 4f416f7b9f335c6a03f965d3d50a9e079d8138b4
          {
            instrumentos.map((instr, i)=>{
              return <div key={i} className='flex items-center justify-between px-3 text-base  bg-slate-100 h-4/5 col-span-1 rounded-md text-slate-700 font-normal border-solid border-slate-600 border-[1px]'>
                <span className='text-ellipsis overflow-hidden whitespace-nowrap'>{instr.nombre}</span>
                <button><GrFormClose className='h-6 w-6' onClick={()=>deleteInstrument(i)}/></button>
              </div>
            })
          }
        </div>
<<<<<<< HEAD
        <div className="flex flex-col">
          <label htmlFor="" className="w-11/12">Instrumentos:
            <input type="text" name="instrumentos" ref={instrumento} className='w-full bg-transparent border-solid border-2 border-slate-400 rounded-md text-slate-700 font-medium text-lg pl-2'/>
=======
        <div className="flex flex-col gap-3">
          <label htmlFor="" className="w-11/12">
            <input type="text" name="instrumentos" placeholder="Instrumento" ref={instrumento} className='w-full bg-transparent border-solid border-b-2 border-slate-300 text-slate-700 font-medium text-lg pl-2 outline-none focus:border-slate-500'/>
>>>>>>> 4f416f7b9f335c6a03f965d3d50a9e079d8138b4
          </label>
          <label htmlFor="" className='flex-col text-lg md:flex'>Experiencia: 
            <select name="" id="" ref={nivel} className="ml-2 bg-transparent">
              <optgroup>
              <option value="" ></option>
              <option value="Menos de 1 año">Menos de 1 año</option>
              <option value="Mas de 1 año">Mas de 1 año</option>
              <option value="Mas de 2 años">Mas de 2 años</option>
              <option value="Mas de 5 años">Mas de 5 años</option>
              </optgroup>
            </select>
            <button onClick={instrumentos.length < 6 ? addInstrument : checkLength}>Agregar</button>
          </label>
        </div>
      </div>
<<<<<<< HEAD
      <div className="flex pl-9 w-3/5 gap-4">
        <button className='px-4 bg-blue-300 border-blue-600 border-2 border-solid rounded-md text-blue-600 h-8' onClick={() => goBack()}>Atras</button>
        <button className='px-4 bg-green-100 border-green-700 border-2 border-solid rounded-md text-green-700 h-8' onClick={() =>handler('instrumentos', instrumentos)}>Guardar</button>
=======
      <div className="flex w-3/5 gap-4">
        <button className='px-4 bg-blue-500 rounded-md text-blue-900 h-8' onClick={() => goBack()}>Atras</button>
        <button className='px-4 bg-green-500 rounded-md text-green-900 h-8' onClick={() =>handler('instrumentos', instrumentos)}>Guardar</button>
>>>>>>> 4f416f7b9f335c6a03f965d3d50a9e079d8138b4
      </div>
    </div>
  );
};

export default Instrumentos;
