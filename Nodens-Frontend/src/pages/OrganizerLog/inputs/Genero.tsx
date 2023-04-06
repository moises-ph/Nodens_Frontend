import { useRef } from 'react'

const Genero = ({ handler, goBack }: { handler: (key: string, value: any) => void, goBack: ()=>void }) => {
    const genero = useRef(null)
    return (
    <>
      <label htmlFor='genero'>Genero:
        <input type="text" name="genero" ref={genero} />
      </label>
      <div>
        <button onClick={() => goBack()}>Atras</button>
        <button onClick={() => handler('genero', genero.current.value)}>Guardar</button>
      </div>
    </>
    )
}

export default Genero