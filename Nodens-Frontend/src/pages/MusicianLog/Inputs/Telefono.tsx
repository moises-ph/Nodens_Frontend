import { useRef } from 'react'

const Telefono = ({ handler, goBack }: { handler: (key: string, value: any) => void, goBack: ()=>void }) => {
    const telefono = useRef<HTMLInputElement>(null)
    return (
    <>
      <div className='h-2/4 w-10/12 flex flex-col justify-center gap-8 px-2 text-slate-600'>
        <label htmlFor='genero' className='flex flex-col text-2xl h-2/4 gap-[20%]'>Telefono:
          <input type="number" name="telefono" ref={telefono} className='bg-transparent border-solid border-b-2 border-slate-300 text-slate-600 font-medium outline-none focus:border-slate-500'/>
        </label>
        <div className="flex w-3/5 gap-4">
          <button onClick={() => goBack()} className='px-4 bg-green-500 rounded-md text-green-900 h-8'>Atras</button>
          <button onClick={() => handler('telefono', telefono.current!.value)} className='px-4 bg-blue-500 rounded-md text-blue-900 h-8'>Enviar</button>
        </div>
      </div>
    </>
    )
}

export default Telefono