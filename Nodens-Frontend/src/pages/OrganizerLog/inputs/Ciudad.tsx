import { useRef } from 'react'

const Ciudad = ({ handler }: { handler: (key: string, value: any) => void }) => {
    const ciudad = useRef(null)
    return (
    <>
      <label htmlFor='ciudad'>Ciudad:
        <input type="text" name="ciudad" ref={ciudad} />
      </label>
      <div>
        <button onClick={() => handler('ciudad', ciudad.current.value)}>Guardar</button>
      </div>
    </>
    )
}

export default Ciudad