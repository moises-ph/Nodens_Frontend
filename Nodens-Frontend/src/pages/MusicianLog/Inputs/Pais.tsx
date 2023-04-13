import { useRef } from 'react'

const Pais = ({ handler, goBack }: { handler: (key: string, value: any) => void, goBack: ()=>void }) => {
  const paises = ["-", "Antigua y Barbuda", "Argentina", "Bahamas", "Barbados", "Belice", "Bolivia", "Brasil", "Colombia", "Costa Rica", "Cuba", "Chile", "Dominica", "Ecuador", "El Salvador", "Granada", "Guatemala", "Guyana", "Haití", "Honduras", "Jamaica", "México", "Nicaragua", "Panamá", "Paraguay", "Perú", "República Dominicana", "Santa Lucía", "Surinam", "Trinidad y Tobago", "Uruguay", "Venezuela"];
  const pais = useRef<HTMLSelectElement>(null)
  return (
    <>
      <label htmlFor='pais'>Pais:
        <select name="" id="" ref={pais}>
          <optgroup>
            {
              paises.map((p, i)=>{
                return <option value={p} key={i}>{p}</option>
              })
            }
          </optgroup>
        </select>
      </label>
      <div>
        <button onClick={() => goBack()}>Atras</button>
        <button onClick={() => handler('pais', pais.current!.value)}>Guardar</button>
      </div>
    </>
  )
}

export default Pais