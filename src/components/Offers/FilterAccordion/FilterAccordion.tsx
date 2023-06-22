import { VscSettings } from "react-icons/vsc";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";
import { useRef } from "react";
import { OfferFilter } from "../../../types";

function FilterAccordion({ setOfferFilter }: {setOfferFilter: React.Dispatch<React.SetStateAction<OfferFilter | null >>}) {
  const minPayment = useRef<HTMLInputElement>(null);
  const maxPayment = useRef<HTMLInputElement>(null);
  const requeriment = useRef<HTMLSelectElement>(null);
  const creationDate = useRef<HTMLInputElement>(null);
  const eventDate = useRef<HTMLInputElement>(null);
  const abled = useRef<HTMLInputElement>(null);
  const disabled = useRef<HTMLInputElement>(null);

  const filter = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(minPayment.current!.valueAsNumber);
    const filters: OfferFilter = {
      creationDate: creationDate.current!.value != "" ? creationDate.current!.valueAsDate : null,
      eventDate: eventDate.current!.value != "" ? eventDate.current!.valueAsDate : null,
      instrument : requeriment.current!.value,
      maxPayment : !Number.isNaN(maxPayment.current!.valueAsNumber) ? maxPayment.current!.valueAsNumber : null,
      minPayment : !Number.isNaN(minPayment.current!.valueAsNumber) ? minPayment.current!.valueAsNumber : null,
      abled : !abled.current!.checked && !disabled.current!.checked ?  null : abled.current!.checked
    };
    console.log(filters);
    setOfferFilter(filters);
  };

  const cleanFilters = (e: React.MouseEvent<HTMLButtonElement>) => {
    minPayment.current!.valueAsNumber = NaN;
    maxPayment.current!.valueAsNumber = NaN;
    requeriment.current!.selectedIndex = 0;
    creationDate.current!.value = "";
    eventDate.current!.value = "";
    filter(e);
  };

  return (
    <>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <VscSettings className="h-5 w-5 transition-all" />
            <h2 className="text-xl">Filtrar ofertas</h2>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-4 mb-6 ">
              <label className="flex flex-col gap-2 font-thin ">
                Por Pago
                <input
                  min={0}
                  ref={minPayment}
                  type="number"
                  placeholder="Pago minimo"
                  className="rounded-lg px-2 border-[1px] border-slate-500"
                />
                <input
                  min={0}
                  ref={maxPayment}
                  type="number"
                  placeholder="Pago Maximo"
                  className="rounded-lg px-2 border-[1px] border-slate-500"
                />
              </label>
              <label className="flex flex-col gap-2 font-thin ">
                Por Requerimiento:
                <select
                  className="rounded-lg px-2 border-[1px] border-slate-500"
                  ref={requeriment}
                >
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
              <label className="flex flex-col gap-2 font-thin ">
                Por Fecha de creacion:
                <input
                  ref={creationDate}
                  type="date"
                  placeholder="fecha de creacion"
                  className="rounded-lg px-2 border-[1px] border-slate-500"
                />
              </label>
              <label className="flex flex-col gap-2 font-thin ">
                Por Fecha del Evento:
                <input
                  min={new Date().toISOString().slice(0, 10)}
                  ref={eventDate}
                  type="date"
                  placeholder="fecha de evento"
                  className="rounded-lg px-2 border-[1px] border-slate-500"
                />
              </label>
              <div className="flex items-center justify-around">
                <div className="flex flex-col items-center">
                  <label htmlFor="able">Habilitadas</label>
                  <input onChange={(e) => disabled.current!.checked = false} ref={abled} type="checkbox" id="able" />
                </div>
                <div className="flex flex-col items-center">
                  <label htmlFor="ablen't">Deshabilitadas</label>
                  <input onChange={(e) => abled.current!.checked = false} ref={disabled} type="checkbox" id="ablen't" />
                </div>
              </div>
            </div>
            <div className="flex justify-evenly gap-4 ">
              <button
                className="rounded-md w-1/2 p-2 bg-red-500 text-slate-100"
                onClick={cleanFilters}
              >
                Limpiar
              </button>
              <button
                className="rounded-md w-1/2 p-2 bg-green-500 text-slate-100"
                onClick={filter}
              >
                Filtrar
              </button>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}

export default FilterAccordion;
