import { useRef } from "react";

const Pais = ({  handler,  goBack} : {  handler: (key: string, value: any) => void;  goBack: () => void;}) => {
  const paises = [
    "-",
    "Antigua y Barbuda",
    "Argentina",
    "Bahamas",
    "Barbados",
    "Belice",
    "Bolivia",
    "Brasil",
    "Colombia",
    "Costa Rica",
    "Cuba",
    "Chile",
    "Dominica",
    "Ecuador",
    "El Salvador",
    "Granada",
    "Guatemala",
    "Guyana",
    "Haití",
    "Honduras",
    "Jamaica",
    "México",
    "Nicaragua",
    "Panamá",
    "Paraguay",
    "Perú",
    "República Dominicana",
    "Santa Lucía",
    "Surinam",
    "Trinidad y Tobago",
    "Uruguay",
    "Venezuela",
  ];
  const pais = useRef<HTMLSelectElement>(null);
  return (
    <>
      <div className='h-full border-solid w-10/12 flex flex-col gap-10 px-2 pt-4 text-slate-600'>
        <div className='text-2xl h-5/6 flex flex-col justify-center gap-[15%]'>
          <p className="mb-2">Pais:</p>
          <label htmlFor="pais" className='flex-col text-lg md:flex'>Pais:
            <select name="" id="" ref={pais} className="ml-2 bg-transparent">
              <optgroup>
                {paises.map((p, i) => {
                  return (
                    <option value={p} key={i}>{p}</option>
                  );
                })}
              </optgroup>
            </select>
          </label>
          <div className="flex w-3/5 gap-4">
            <button className='px-4 bg-blue-500 rounded-md text-blue-900 h-8' onClick={() => goBack()}>Atras</button>
            <button className='px-4 bg-green-500 rounded-md text-green-900 h-8' onClick={() => handler("pais", pais.current!.value)}>Guardar</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pais;
