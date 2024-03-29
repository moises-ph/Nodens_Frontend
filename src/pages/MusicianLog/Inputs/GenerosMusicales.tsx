import {useRef, useState} from "react"
import { GrFormClose } from "react-icons/gr";
import Swal from 'sweetalert2'

const GenerosMusicales = ({ handler, goBack }: { handler: (key: string, value: any) => void, goBack: ()=>void }) => {
  const [generos, setGeneros] = useState<string[]>([])
	const generosMusicales = useRef<HTMLInputElement>(null)
  const deleteGen = (i:number) => {
    setGeneros(generos.filter((e, index) => index != i))
  }

  const addGen = () => {
    if(generosMusicales.current!.value){
      if(!generos.find(e => e === generosMusicales.current!.value)){
        setGeneros([...generos, generosMusicales.current!.value])
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Por favor ingresa un genero diferente',
          timer: 3000  
        })  
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor ingresa un genero',
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
      title: '6 generos maximo'
    })
  }

  const checking = () => {
    if(generos.length < 1) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor ingresa al menos un genero musical',
        timer: 2000  
      })
    } else {
      handler('generosMusicales', generos)
    }
  }
  return (
    <div className='h-full bg-zinc-900 bg-opacity-100 rounded-xl w-10/12 flex flex-col justify-center gap-8 px-2 pb-2 text-slate-100 shadow-lg'>
      <div className='flex flex-col text-2xl h-4/5 '>
        <h3 className="mb-5">Generos Musicales:</h3>
        <div className="h-2/4 grid grid-cols-2 grid-rows-3 gap-2 mb-6">
          {generos.map((gen, i)=>{
              return <div key={i} className='flex items-center justify-between px-3 text-base bg-slate-100 bg-opacity-20 h-4/5 col-span-1 rounded-md text-slate-100 font-normal border-solid border-slate-600 border-[1px]'>
                <span className='text-ellipsis overflow-hidden whitespace-nowrap'>{gen}</span>
                <button><GrFormClose className='h-6 w-6' onClick={()=>deleteGen(i)}/></button>
              </div>
            })}
        </div>
        <input type="text" name="genero" placeholder="Genero" ref={generosMusicales} className='bg-transparent border-solid border-b-2 border-slate-300 text-slate-100 font-light outline-none focus:border-slate-5'/>
        <button onClick={generos.length < 6 ? addGen : checkLength}>Agregar</button>
      </div>
      <div className="flex w-3/5 gap-4">
        <button onClick={() => goBack()} className='px-4 bg-slate-100 rounded-md text-slate-900 h-8'>Atras</button>
        <button onClick={() => checking()} className='px-4 bg-slate-100 rounded-md text-slate-900 h-8'>Guardar</button>
      </div>
    </div>
  );
};

export default GenerosMusicales;