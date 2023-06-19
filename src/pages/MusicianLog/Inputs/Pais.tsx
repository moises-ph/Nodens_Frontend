import { useRef } from "react";
import Swal from "sweetalert2";

const Pais = ({  handler,  goBack} : {  handler: (key: string, value: any) => void;  goBack: () => void;}) => {
  const paises = [
    'Colombia',
  ];
  const pais = useRef<HTMLSelectElement>(null);

  const checking = () => {
    if(!pais.current!.value) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor ingresa un pais',
        timer: 2000  
      })
    } else {
      handler("pais", pais.current!.value)
    }
  }
  return (
    <>
      <div className='h-5/6 bg-zinc-900 bg-opacity-100 rounded-xl border-solid w-10/12 flex flex-col gap-10 px-2 pt-4 text-slate-100 shadow-lg'>
        <div className='text-2xl h-5/6 flex flex-col justify-center gap-[15%]'>
          <p className="mb-2">Pais:</p>
          <label htmlFor="pais" className='flex-col text-lg md:flex'>Pais:
            <select name="" id="" ref={pais} className="ml-2 bg-transparent border-b-2 border-solid border-slate-400">
              <optgroup className="bg-slate-900">
                {paises.map((p, i) => {
                  return (
                    <option value={p} key={i}>{p}</option>
                  );
                })}
              </optgroup>
            </select>
          </label>
          <div className="flex w-3/5 gap-4">
            <button className='px-4 bg-slate-100 rounded-md text-slate-900 h-8' onClick={() => goBack()}>Atras</button>
            <button className='px-4 bg-slate-100 rounded-md text-slate-900 h-8' onClick={() => checking()}>Guardar</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pais;
