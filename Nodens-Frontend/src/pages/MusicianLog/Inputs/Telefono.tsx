import { useRef } from 'react'

const Telefono = ({ handler }: { handler: (key: string, value: any) => void }) => {
    const telefono = useRef(null)
    return (
    <>
      <label htmlFor='telefono'>Telefono:
        <input type="number" name="telefono" ref={telefono} />
      </label>
      <button onClick={() => handler('telefono', telefono.current.value)}>Guardar</button>
    </>
    )
}

export default Telefono