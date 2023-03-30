import { useRef } from 'react'

const Genero = ({ handler, goBack }: { handler: (key: string, value: any) => void, goBack: ()=>void }) => {
    const genero = useRef(null)
    return (
    <div className='bg-slate-200 h-2/4 border-solid border-2 border-slate-400 rounded-lg w-10/12 flex flex-col justify-center gap-8 px-2 text-slate-600'>
      <label htmlFor='genero' className='flex flex-col text-2xl h-2/4 gap-[20%]'>Genero:
        <input type="text" name="genero" ref={genero} className='bg-transparent border-solid border-2 border-slate-400 rounded-md text-slate-600 font-medium'/>
      </label>
      <div className="flex w-3/5 gap-4">
        <button onClick={() => goBack()} className='px-4 bg-blue-300 border-blue-600 border-2 border-solid rounded-md text-blue-600 h-8'>Atras</button>
        <button onClick={() => handler('genero', genero.current.value)} className='px-4 bg-green-100 border-green-700 border-2 border-solid rounded-md text-green-700 h-8'>Guardar</button>
      </div>
    </div>
    )
}

export default Genero