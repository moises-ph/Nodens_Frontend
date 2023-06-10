import { useRef } from "react"
import { OffersT } from "../../types"

type FiltersT = {
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
  getOffers: ()=> void,
  offers: OffersT[],
  setOffers: React.Dispatch<React.SetStateAction<OffersT[] | null>>
}

const Filters = ({isOpen, setIsOpen, getOffers, offers, setOffers}: FiltersT) => {
  const pagoMinimo = useRef<HTMLInputElement>(null);
  const pagoMaximo = useRef<HTMLInputElement>(null);
  const requerimiento = useRef<HTMLSelectElement>(null);
  const fechaCreacion = useRef<HTMLInputElement>(null);
  const fechaEvento = useRef<HTMLInputElement>(null);
  const $ = (ref: React.RefObject<HTMLSelectElement | HTMLInputElement>) => ref.current!.value;

  const filterFilters = async () => {
    if($(pagoMaximo)) {
      setOffers(offers.filter(off => off.Payment < Number($(pagoMaximo))))      
    }
    if($(pagoMinimo)) {
      setOffers(offers.filter(off => off.Payment > Number($(pagoMinimo))))      
    }
    if($(requerimiento)){
      setOffers(offers.filter(off => { 
          let inc = false
          off.Requeriments.forEach( (offF) => {
            offF.Description === $(requerimiento) ? inc = true : null
            offF.Description === $(requerimiento).toUpperCase() ? inc = true : null
            offF.Description === $(requerimiento).toLowerCase() ? inc = true : null
          })
          return inc;
        })
      )
    }
    if($(fechaCreacion)) {
      setOffers(offers.filter(off => off.Creation_Date.toString().includes($(fechaCreacion))))
    }
    if($(fechaEvento)) {
      setOffers(offers.filter(off => off.Event_Date.toString().includes($(fechaEvento)))) 
    }
  }

  const closeFilters = () => {
    setIsOpen(false);

  }

  const applyFilters = () => {
    if(!$(pagoMinimo) && !$(pagoMaximo) && !$(requerimiento) && !$(fechaCreacion) && !$(fechaEvento)){
      getOffers();
    } else {
      filterFilters();
    }
    closeFilters();
  }

  if(!isOpen) return <></>
  return (
    <div className="fixed z-[10000] top-0 left-0 backdrop-blur-sm bg-[rgba(36,44,71,0.68)] flex justify-center items-center h-full w-full">
      <div className="h-3/5 overflow-y-scroll w-3/4 md:w-2/5 bg-slate-100 rounded-lg shadow-lg p-4">
        <h2 className="text-xl text-center ">Filtrar ofertas:</h2>
        <div className="flex flex-col gap-4 mb-6 ">
          <label className="flex flex-col gap-2 ">Por Pago:
            <input type='number' placeholder="Pago minimo" ref={pagoMinimo} className="rounded-lg px-2 border-[1px] border-slate-500"/>
            <input type='number' placeholder="Pago Maximo" ref={pagoMaximo} className="rounded-lg px-2 border-[1px] border-slate-500"/>
          </label>
          <label className="flex flex-col gap-2 ">Por Requerimiento:
            <select className="rounded-lg px-2 border-[1px] border-slate-500" ref={requerimiento}>
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
          <label className="flex flex-col gap-2 ">Por Fecha de creacion: 
            <input type='date' placeholder="fecha de creacion" ref={fechaCreacion} className="rounded-lg px-2 border-[1px] border-slate-500"/>
          </label>
          <label className="flex flex-col gap-2 ">Por Fecha del Evento:
            <input type='date' placeholder="fecha de evento" ref={fechaEvento} className="rounded-lg px-2 border-[1px] border-slate-500"/>
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
