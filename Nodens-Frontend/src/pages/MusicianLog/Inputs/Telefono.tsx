import { useRef } from 'react'

const Telefono = ({ handler, goBack }: { handler: (key: string, value: any) => void, goBack: ()=>void }) => {
    const telefono = useRef<HTMLInputElement>(null)
    return (
    <>
      <label htmlFor='telefono'>Telefono:
        <input type="number" name="telefono" ref={telefono} />
      </label>
      <div>
        <button onClick={() => goBack()}>Atras</button>
        <button onClick={() => handler('telefono', telefono.current!.value)}>Enviar</button>
      </div>
    </>
    )
}

export default Telefono