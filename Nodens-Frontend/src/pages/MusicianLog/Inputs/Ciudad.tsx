import { useRef } from 'react'

const Ciudad = ({ handler, goBack }: { handler: (key: string, value: any) => void, goBack: ()=>void }) => {
    const ciudad = useRef<HTMLSelectElement>(null)
    return (
    <>
      <label htmlFor='ciudad'>Ciudad:
        <select name="" id="" ref={ciudad}>
          <optgroup>
            <option value="">-</option>
            <option value="Arauca">Arauca</option>
            <option value="Armenia">Armenia</option>
            <option value="Barranquilla">Barranquilla</option>
            <option value="Bogotá">Bogotá</option>
            <option value="Bucaramanga">Bucaramanga</option>
            <option value="Cali">Cali</option>
            <option value="Cartagena">Cartagena</option>
            <option value="Cúcuta">Cúcuta</option>
            <option value="Florencia">Florencia</option>
            <option value="Ibagué">Ibagué</option>
            <option value="Leticia">Leticia</option>
            <option value="Manizales">Manizales</option>
            <option value="Medellín">Medellín</option>
            <option value="Mitú">Mitú</option>
            <option value="Mocoa">Mocoa</option>
            <option value="Montería">Montería</option>
            <option value="Neiva">Neiva</option>
            <option value="Pasto">Pasto</option>
            <option value="Pereira">Pereira</option>
            <option value="Popayán">Popayán</option>
            <option value="Puerto Carreño">Puerto Carreño</option>
            <option value="Puerto Inírida">Puerto Inírida</option>
            <option value="Quibdó">Quibdó</option>
            <option value="Riohacha">Riohacha</option>
            <option value="San Andrés">San Andrés</option>
            <option value="San José del Guaviare">San José del Guaviare</option>
            <option value="Santa Marta">Santa Marta</option>
            <option value="Sincelejo">Sincelejo</option>
            <option value="Tunja">Tunja</option>
            <option value="Valledupar">Valledupar</option>
            <option value="Villavicencio">Villavicencio</option>
            <option value="Yopal">Yopal</option>
          </optgroup>
        </select>
      </label>
      <div>
        <button onClick={() => goBack()}>Atras</button>
        <button onClick={() => handler('ciudad', ciudad.current!.value)}>Guardar</button>
      </div>
    </>
    )
}

export default Ciudad