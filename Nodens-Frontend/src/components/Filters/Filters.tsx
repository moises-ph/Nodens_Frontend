import { OffersT } from "../../types"

type FiltersT = {
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
  setOffers: React.Dispatch<React.SetStateAction<OffersT[]>>
}

const Filters = ({isOpen, setIsOpen, setOffers}: FiltersT) => {
  const closeFilters = () => {
    setIsOpen(false);
  }

  const applyFilters = () => {
    closeFilters();
  }

  if(!isOpen) return <></>
  return (
    <div className="fixed z-[10000] top-0 left-0 backdrop-blur-sm bg-[rgba(36,44,71,0.68)] flex justify-center items-center h-full w-full">
      <div className="h-4/5 w-3/4 md:w-2/5 md:h-[65%] bg-slate-100 rounded-lg shadow-lg p-4">
        <h2 className="text-xl text-center md:mb-12">Filtrar ofertas:</h2>
        <div className="flex flex-col gap-4 mb-6 md:grid md:grid-cols-2 md:h-3/5 md:mb-12">
          <label className="flex flex-col gap-2 md:w-3/4">Por Pago:
            <input type='number' placeholder="Pago minimo" className="rounded-lg px-2 border-[1px] border-slate-500"/>
            <input type='number' placeholder="Pago Maximo" className="rounded-lg px-2 border-[1px] border-slate-500"/>
          </label>
          <label className="flex flex-col gap-2 md:w-3/4">Por Requerimiento:
            <select className="rounded-lg px-2 border-[1px] border-slate-500">
              <optgroup>
                <option value="">Instrumento</option>
                <option value="Guitarra">Guitarra</option>
                <option value="Bajo">Bajo</option>
                <option value="Bateria">Bateria</option>
                <option value="Piano">Piano</option>
                <option value="Congas">Congas</option>
                <option value="Bongo">Bongo</option>
                <option value="Saxofon">Saxofon</option>
                <option value="Timbal">Timbal</option>
                <option value="Voz">Voz</option>
                <option value="Trompeta">Trompeta</option>
              </optgroup>
            </select>
          </label>
          <label className="flex flex-col gap-2 md:w-3/4">Por Fecha de creacion: 
            <input type='date' placeholder="fecha de creacion" className="rounded-lg px-2 border-[1px] border-slate-500"/>
          </label>
          <label className="flex flex-col gap-2 md:w-3/4">Por Fecha del Evento:
            <input type='date' placeholder="fecha de evento"  className="rounded-lg px-2 border-[1px] border-slate-500"/>
          </label>
        </div>
        <div className="w-[45%] flex justify-evenly gap-4 ">
          <button onClick={()=> closeFilters()} className="rounded-md w-1/2 p-2 bg-red-500 text-slate-100">Cancelar</button>
          <button onClick={()=>applyFilters()} className="rounded-md w-1/2 p-2 bg-green-500 text-slate-100">Filtrar</button>
        </div>
      </div>
    </div>
  )
}

export default Filters
