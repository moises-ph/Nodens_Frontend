import {useRef, useState} from "react"
import { GrFormClose } from "react-icons/gr";


const GenerosMusicales = ({ handler, goBack }: { handler: (key: string, value: any) => void, goBack: ()=>void }) => {
  const [generos, setGeneros] = useState<string[]>([])
	const generosMusicales = useRef(null)
  const deleteGen = (i:number) => {
    setGeneros(generos.filter((e, index) => index != i))
  }

  const addGen = () => {
    setGeneros([...generos, generosMusicales.current.value])
  }
  return (
    <div className='bg-slate-200 h-3/5 border-solid border-2 border-slate-400 rounded-lg w-10/12 flex flex-col justify-center gap-8 px-2 text-slate-600'>
      <div className='flex flex-col text-2xl h-4/5 gap-[15%]'>
        <h3>Generos Musicales:</h3>
        <div className="h-2/4 grid grid-cols-2 grid-rows-3 gap-2">
          {generos.map((gen, i)=>{
              return <span key={i} className='flex items-center justify-around text-base bg-slate-100 h-6 col-span-1 rounded-lg text-slate-700 font-semibold border-solid border-slate-600 border-2'>
                {gen}
                <button><GrFormClose onClick={()=>deleteGen(i)}/></button>
              </span>
            })}
        </div>
        <input type="text" name="genero" ref={generosMusicales} className='bg-transparent border-solid border-2 border-slate-400 rounded-md text-slate-600 font-medium'/>
        <button onClick={()=>addGen()}>Agregar</button>
      </div>
      <div className="flex w-3/5 gap-4">
        <button onClick={() => goBack()} className='px-4 bg-blue-300 border-blue-600 border-2 border-solid rounded-md text-blue-600 h-8'>Atras</button>
        <button onClick={() => handler('generosMusicales', generos)} className='px-4 bg-green-100 border-green-700 border-2 border-solid rounded-md text-green-700 h-8'>Guardar</button>
      </div>
    </div>
  );
};

export default GenerosMusicales;
