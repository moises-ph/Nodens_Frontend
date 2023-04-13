import { useRef } from 'react'

const DescripcionEmpresa = ({ handler, goBack }: { handler: (key: string, value: any) => void, goBack: ()=>void }) => {
    const descripcion_empresa = useRef(null)
    return (
    <>
    <div className='flex flex-col items-center justify-center gap-10 pb-48'>
      <label className='flex justify-center flex-col gap-2' htmlFor='descripcion_empresa'>Descripcion de la Empresa
        <input className='shadow-lg bg-slate-100 rounded-lg h-8 pl-3' placeholder='Descripción' type="text" name="descripcion_empresa" ref={descripcion_empresa} />
      </label>
      <div className='flex gap-4'>
        <button onClick={() => goBack()}>Atras</button>
        <button className='bg-red-200 w-[5rem] h-8 rounded-lg' onClick={() => handler('descripcion_empresa', descripcion_empresa.current.value)}>Guardar</button>
      </div>
      </div>
    </>
    )
}

export default DescripcionEmpresa