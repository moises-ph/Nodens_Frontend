import { useRef } from 'react'

const DescripcionEmpresa = ({ handler, goBack }: { handler: (key: string, value: any) => void, goBack: ()=>void }) => {
    const descripcion_empresa = useRef(null)
    return (
    <>
      <label htmlFor='descripcion_empresa'>Descripcion de la Empresa:
        <input type="text" name="descripcion_empresa" ref={descripcion_empresa} />
      </label>
      <div className='flex gap-4'>
        <button onClick={() => goBack()}>Atras</button>
        <button className='bg-slate-300 w-[5rem] h-8 rounded-lg' onClick={() => handler('descripcion_empresa', descripcion_empresa.current.value)}>Guardar</button>
      </div>
    </>
    )
}

export default DescripcionEmpresa