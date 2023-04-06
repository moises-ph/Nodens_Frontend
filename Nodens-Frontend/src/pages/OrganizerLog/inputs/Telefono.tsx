import { useRef } from 'react'

const Telefono = ({ handler, goBack }: { handler: (key: string, value: any) => void, goBack: ()=>void }) => {
    const telefono = useRef(null)
    return (
    <>
      <label htmlFor='telefono'>Telefono:
        <input type="text" name="telefono" ref={telefono} />
      </label>
      <div>
        <button onClick={() => goBack()}>Atras</button>
        <button onClick={() => handler('telefono', telefono.current.value)}>Guardar</button>
      </div>
    </>
    )
}

export default Telefono