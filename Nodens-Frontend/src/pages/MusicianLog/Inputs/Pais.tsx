import { useRef } from 'react'

const Pais = ({ handler }: { handler: (key: string, value: any) => void }) => {
    const pais = useRef(null)
    return (
    <>
      <label htmlFor='pais'>Pais:
        <input type="text" name="pais" ref={pais} />
      </label>
      <button onClick={() => handler('pais', pais.current.value)}>Guardar</button>
    </>
    )
}

export default Pais