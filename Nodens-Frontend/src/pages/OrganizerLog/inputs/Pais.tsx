import { useRef } from 'react'

const Pais = ({ handler, goBack }: { handler: (key: string, value: any) => void, goBack: ()=>void }) => {
    const pais = useRef(null)
    return (
    <>
    <div className='shadow-2xl shadow-slate-400 bg-slate-100 rounded-lg w-60'>
    <div className='flex flex-col items-center justify-center gap-10 pb-48'>
      <label className='flex flex-col justify-center items-center pt-8 gap-4' htmlFor='pais'>Pais
        <input className='shadow-lg h-8 bg-slate-100 rounded-lg pl-3' placeholder='Pais' type="text" name="pais" ref={pais} />
      </label>
      <div className='flex gap-4'>
        <button onClick={() => goBack()}>Atras</button>
        <button className='bg-blue-200 h-8 w-[5rem] rounded-lg' onClick={() => handler('pais', pais.current.value)}>Guardar</button>
      </div>
      </div>
</div>
    </>
    )
}

export default Pais