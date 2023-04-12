import {useRef, useState} from "react"
import { GrFormClose } from "react-icons/gr";
import Swal from "sweetalert2";

const RedesSociales = ({ handler, goBack }: { handler: (key: string, value: any) => void, goBack: ()=>void }) => {
  const [redes, setRedes] = useState<{nombre: String;url: String}[]>([])
	const redes_sociales = useRef<HTMLInputElement>(null)
  const url = useRef<HTMLInputElement>(null)
  const deleteRed = (i:number) => {
    setRedes(redes.filter((e, index) => index != i))
  }

  const addRed = () => {
    if(redes_sociales.current!.value && url.current!.value){
      if(!redes.find(e => e.nombre === redes_sociales.current!.value)){
        setRedes([...redes, {nombre: redes_sociales.current!.value, url: url.current!.value}])
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Por favor ingresa una red social diferente',
          timer: 3000  
        })  
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor ingresa un red social',
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
      title: '4 redes maximo'
    })
  }

  return (
    <div className='bg-slate-200 h-full border-solid border-2 border-slate-400 rounded-lg w-10/12 flex flex-col justify-center gap-8 px-2 text-slate-600'>
      <div className='flex flex-col text-2xl h-4/5'>
        <h3 className="mb-5">Redes Sociales:</h3>
        <div className="h-2/4 grid grid-cols-2 grid-rows-3 gap-2">
          {redes.map((gen, i)=>{
              return <span key={i} className='flex items-center justify-around text-base bg-slate-100 h-6 col-span-1 rounded-lg text-slate-700 font-semibold border-solid border-slate-600 border-2'>
                {gen.nombre}
                <button><GrFormClose onClick={()=>deleteRed(i)}/></button>
              </span>
            })}
        </div>
        <div>
          <label htmlFor="genero">Red:
            <input type="text" name="genero" ref={redes_sociales} className='w-full bg-transparent border-solid border-2 border-slate-400 rounded-md text-slate-700 font-medium text-lg pl-2'/>
          </label>
          <label htmlFor="url">Url: 
            <input type="text" name="url" ref={url} className='w-full bg-transparent border-solid border-2 border-slate-400 rounded-md text-slate-700 font-medium text-lg pl-2'/>
          </label>
        </div>
        <button onClick={redes.length < 4 ? addRed : checkLength}>Agregar</button>
      </div>
      <div className="flex w-3/5 gap-4">
        <button onClick={() => goBack()} className='px-4 bg-blue-300 border-blue-600 border-2 border-solid rounded-md text-blue-600 h-8'>Atras</button>
        <button onClick={() => handler('redes_sociales', redes)} className='px-4 bg-green-100 border-green-700 border-2 border-solid rounded-md text-green-700 h-8'>Guardar</button>
      </div>
    </div>
  )
}

export default RedesSociales