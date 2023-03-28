import { useRef } from 'react'

const Experiencia = ({ handler, goBack }: { handler: (key: string, value: any) => void, goBack: ()=>void }) => {
    const experiencia = useRef(null)
    return (
    <>
      <label htmlFor='experiencia'>Experiencia:
        <input type="text" name="pais" ref={experiencia} />
      </label>
      <div>
        <button onClick={() => goBack()}>Atras</button>
        <button onClick={() => handler('experiencia', experiencia.current.value)}>Guardar</button>
      </div>
    </>
    )
}

export default Experiencia