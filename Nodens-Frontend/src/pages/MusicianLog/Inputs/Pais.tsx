import { useRef } from 'react'

const Pais = ({ handler, goBack }: { handler: (key: string, value: any) => void, goBack: ()=>void }) => {
    const pais = useRef(null)
    return (
    <>
      <label htmlFor='pais'>Pais:
        <input type="text" name="pais" ref={pais} />
      </label>
      <div>
        <button onClick={() => goBack()}>Atras</button>
        <button onClick={() => handler('pais', pais.current.value)}>Guardar</button>
      </div>
    </>
    )
}

export default Pais