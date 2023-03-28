import { useRef } from 'react'

const Experiencia = ({ handler }: { handler: (key: string, value: any) => void }) => {
    const experiencia = useRef(null)
    return (
    <>
      <label htmlFor='experiencia'>Experiencia:
        <input type="text" name="pais" ref={experiencia} />
      </label>
      <button onClick={() => handler('experiencia', experiencia.current.value)}>Guardar</button>
    </>
    )
}

export default Experiencia