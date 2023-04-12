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
  return (
    <div className='bg-slate-200 h-4/5 border-solid border-2 border-slate-400 rounded-lg w-10/12 flex flex-col justify-center gap-8 px-2 pb-2 text-slate-600'>
      <div className='flex flex-col text-2xl h-4/5 '>
        <h3 className="mb-5">Generos Musicales:</h3>
        <div className="h-2/4 grid grid-cols-2 grid-rows-3 gap-2">
          {generos.map((gen, i)=>{
              return <span key={i} className='flex items-center justify-around text-base bg-slate-100 h-6 col-span-1 rounded-lg text-slate-700 font-semibold border-solid border-slate-600 border-2'>
                {gen}
                <button><GrFormClose onClick={()=>deleteGen(i)}/></button>
              </span>
            })}
        </div>
        <input type="text" name="genero" ref={generosMusicales} className='bg-transparent border-solid border-2 border-slate-400 rounded-md text-slate-600 font-medium'/>
        <button onClick={generos.length < 6 ? addGen : checkLength}>Agregar</button>
      </div>
      <div className="flex w-3/5 gap-4">
        <button onClick={() => goBack()} className='px-4 bg-blue-300 border-blue-600 border-2 border-solid rounded-md text-blue-600 h-8'>Atras</button>
        <button onClick={() => handler('generosMusicales', generos)} className='px-4 bg-green-100 border-green-700 border-2 border-solid rounded-md text-green-700 h-8'>Guardar</button>
      </div>
    </div>
  );
};

export default GenerosMusicales;
