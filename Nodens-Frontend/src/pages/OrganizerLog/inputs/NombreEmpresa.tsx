import { useRef } from 'react'

const NombreEmpresa = ({ handler, goBack }: { handler: (key: string, value: any) => void, goBack: ()=>void }) => {
    const nombre_empresa = useRef(null)
    return (
    <>
      <label htmlFor='nombre_empresa'>Nombre de la empresa:
        <input type="text" name="nombre_empresa" ref={nombre_empresa} />
      </label>
      <div>
        <button onClick={() => goBack()}>Atras</button>
        <button onClick={() => handler('nombre_empresa', nombre_empresa.current.value)}>Guardar</button>
      </div>
    </>
    )
}

export default NombreEmpresa