import { useRef } from 'react'

const DescripcionEmpresa = ({ handler, goBack }: { handler: (key: string, value: any) => void, goBack: ()=>void }) => {
    const descripcion_empresa = useRef(null)
    return (
    <>
      <label htmlFor='descripcion_empresa'>Descripcion de la Empresa:
        <input type="text" name="descripcion_empresa" ref={descripcion_empresa} />
      </label>
      <div>
        <button onClick={() => goBack()}>Atras</button>
        <button onClick={() => handler('descripcion_empresa', descripcion_empresa.current.value)}>Guardar</button>
      </div>
    </>
    )
}

export default DescripcionEmpresa