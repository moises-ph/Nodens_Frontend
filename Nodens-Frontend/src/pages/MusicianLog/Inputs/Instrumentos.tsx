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
    setInstrumentos([...instrumentos, 
      {nombre: instrumento.current.value, experiencia: experiencia.current.value}]
    )
  }
  return (
    <div className='bg-slate-200 h-5/6 border-solid border-2 border-slate-400 rounded-lg w-10/12 flex flex-col  gap-10 px-2 pt-4'>
      <div className='text-2xl h-3/4 flex flex-col gap-[20%]'>
        <p>Instrumentos:</p>
        <div className='grid grid-cols-3 h-14 w-11/12'>
          {
            instrumentos.map((instr, i)=>{
              return <div key={i}>
                {instr.nombre}
              </div>
            })
          }
        </div>
        <label htmlFor="" className="w-11/12">Instrumento:
          <input type="text" name="instrumentos" ref={instrumento} className='w-full bg-transparent border-solid border-2 border-slate-400 rounded-md text-slate-700 font-medium'/>
        </label>
        <label htmlFor="">Experiencia: 
          <select name="" id="" ref={experiencia} onInput={e=> addInstrument()}>
            <option value="" disabled >Experiencia</option>
            <option value="Menos de 1 año">Menos de 1 año</option>
            <option value="Mas de 1 año">Mas de 1 año</option>
            <option value="Mas de 2 años">Mas de 2 años</option>
            <option value="Mas de 5 años">Mas de 5 años</option>
          </select>
        </label>
      </div>
      <div className="flex gap-2">
        <button onClick={() => goBack()}>Atras</button>
        <button onClick={() =>handler('instrumentos', instrumento.current.value)}>Guardar</button>
      </div>
    </div>
  );
};

export default Instrumentos;
