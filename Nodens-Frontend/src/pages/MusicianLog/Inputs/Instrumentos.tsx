import { useRef, useState } from "react"

export type InstrumentoT = {
  nombre: string;
  experiencia: string;
}

const Instrumentos = ({ handler, goBack }: { handler: (key: string, value: any) => void, goBack: ()=>void }) => {
  const [instrumentos, setInstrumentos] = useState<InstrumentoT[]>([])
	const instrumento = useRef(null)
  const experiencia = useRef(null)

  const addInstrument = () => {
    console.log('hola');
    
    setInstrumentos([...instrumentos, 
      {nombre: instrumento.current.value, experiencia: experiencia.current.value}]
    )
  }
  return (
    <div className='bg-slate-200 h-3/4 border-solid border-2 border-slate-400 rounded-lg w-10/12 flex flex-col justify-center gap-8 px-2'>
      <label htmlFor="instrumentos" className='text-2xl h-2/4 flex flex-col gap-[20%]'>
        <p>Instrumentos:</p>
        <div>
          {
            instrumentos.map((instr, i)=>{
              return <div key={i}>
                {instr.nombre}
              </div>
            })
          }
        </div>
        <input type="text" name="instrumentos" ref={instrumento} className='bg-transparent border-solid border-2 border-slate-400 rounded-md text-slate-700 font-medium'/>
        <select name="" id="" ref={experiencia} onInput={e=> addInstrument()}>
          <option value="" disabled >Experiencia</option>
          <option value="Menos de 1 año">Menos de 1 año</option>
          <option value="Mas de 1 año">Mas de 1 año</option>
          <option value="Mas de 2 años">Mas de 2 años</option>
          <option value="Mas de 5 años">Mas de 5 años</option>
        </select>
      </label>
      <div>
        <button onClick={() => goBack()}>Atras</button>
        <button onClick={() =>handler('instrumentos', instrumento.current.value)}>Guardar</button>
      </div>
    </div>
  );
};

export default Instrumentos;
