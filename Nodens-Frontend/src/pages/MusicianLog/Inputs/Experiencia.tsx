import { useRef } from 'react'

const Experiencia = ({ handler, goBack }: { handler: (key: string, value: any) => void, goBack: ()=>void }) => {
    const experiencia = useRef<HTMLSelectElement>(null)
    return (
    <>
      <label htmlFor='experiencia'>Experiencia:
        <select name="" id="" ref={experiencia}>
          <optgroup>
          <option value="">-</option>
            <option value="Sin Experiencia">Sin Experiencia</option>
            <option value="Menos de 1 año">Menos de 1 año</option>
            <option value="Mas de 1 año">Mas de 1 año</option>
            <option value="Mas de 2 años">Mas de 2 años</option>
            <option value="Mas de 3 años">Mas de 3 años</option>
            <option value="Mas de 5 años">Mas de 5 años</option>
            <option value="Mas de 7 años">Mas de 7 años</option>
            <option value="Mas de 10 años">Mas de 10 años</option>
          </optgroup>
        </select>
      </label>
      <div>
        <button onClick={() => goBack()}>Atras</button>
        <button onClick={() => handler('experiencia', experiencia.current!.value)}>Guardar</button>
      </div>
    </>
    )
}

export default Experiencia