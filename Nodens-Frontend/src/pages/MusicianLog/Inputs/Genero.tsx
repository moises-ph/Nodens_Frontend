import { useRef } from 'react'

const Genero = ({ handler }: { handler: (key: string, value: any) => void }) => {
    const genero = useRef(null)
    return (
    <>
      <label htmlFor='genero'>Genero:
        <input type="text" name="genero" ref={genero} />
      </label>
      <button onClick={() => handler('genero', genero.current.value)}>Guardar</button>
    </>
    )
}

export default Genero