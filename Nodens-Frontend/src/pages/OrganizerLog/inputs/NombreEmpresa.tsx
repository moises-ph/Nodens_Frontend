import { useRef } from 'react'

const NombreEmpresa = ({ handler, goBack }: { handler: (key: string, value: any) => void, goBack: ()=>void }) => {
    const nombre_empresa = useRef(null)
    return (
    <>
    <div className='shadow-2xl shadow-slate-400 bg-slate-100 rounded-lg w-60'>
    <div className='flex flex-col items-center justify-center gap-10 pb-48'>
      <label className='flex flex-col justify-center items-center pt-8 gap-4' htmlFor='nombre_empresa'>Nombre de la empresa
        <input className='shadow-lg h-8 bg-slate-100 rounded-lg pl-3' placeholder='Nombre' type="text" name="nombre_empresa" ref={nombre_empresa} />
      </label>
      <div className='flex gap-4'>
        <button onClick={() => goBack()}>Atras</button>
        <button className='bg-blue-200 h-8 w-[5rem] rounded-lg' onClick={() => handler('nombre_empresa', nombre_empresa.current.value)}>Guardar</button>
      </div>
      </div>
  </div>
    </>
    )
}

export default NombreEmpresa