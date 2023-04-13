import { useRef } from 'react'

const Ciudad = ({ handler }: { handler: (key: string, value: any) => void }) => {
    const ciudad = useRef(null)
    return (
    <>
      <div className='flex items-center flex-col gap-10 pb-48'>
      <label className='flex flex-col items-center justify-center gap-2' htmlFor='ciudad'>Ciudad
        <input className='shadow-lg bg-slate-100 h-8 rounded-lg pl-2 text-left' placeholder='Ciudad' type="text" name="ciudad" ref={ciudad} />
      </label>
      <div>
        <button className='bg-red-200 h-8 w-24 rounded-lg' onClick={() => handler('ciudad', ciudad.current.value)}>Guardar</button>
      </div>
      </div>
    </>
    )
}

export default Ciudad