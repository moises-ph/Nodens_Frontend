import { useState } from "react";

const CreateOffer = () => {
  const [requeriments, setRequeriments] = useState([
    <input type="text" />
  ])
  const handle = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData();
    const object= Object.fromEntries(form);
    console.log(object)
  }
  
  return (
    <>
      <main className="w-full h-fit flex justify-center pt-4 bg-slate-300">
        <form className="w-full flex flex-col items-center bg-transparent gap-4"  onSubmit={handle}>
          <label htmlFor="Title" className="w-5/6 h-1/6 bg-slate-100 rounded-xl p-3 flex flex-col gap-6">
            <h5 className="text-2xl font-semibold">Titulo de Oferta</h5>
            <input type="text" name="Title" placeholder="Titulo" className="h-2/5 border-solid border-[1px] border-slate-900 rounded-md" required/>
          </label>
          <label htmlFor="Description" className="w-5/6 h-[30vh] bg-slate-100 rounded-xl p-3 flex flex-col gap-4">
            <h5 className="text-2xl font-semibold">Descripcion de Oferta</h5>
            <textarea name="Description" id="" className="h-4/5 resize-none border-solid border-[1px] border-slate-900 rounded-md" required></textarea>
            {/* <input type="text" name="Description" placeholder="Descripcion" className="h-2/5 border-solid border-[1px] border-slate-900 rounded-md"/> */}
          </label>
          <label htmlFor="Event_Date" className="w-5/6 h-1/6 bg-slate-100 rounded-xl p-3 flex flex-col gap-6">
            <h5 className="text-2xl font-semibold">Fecha del evento</h5>
            <input type="date" name="Event_Date" className="h-2/5 border-solid border-[1px] border-slate-900 rounded-md" required/>
          </label>
          <label htmlFor="Payment" className="w-5/6 h-1/6 bg-slate-100 rounded-xl p-3 flex flex-col gap-6">
            <h5 className="text-2xl font-semibold">Pago de la oferta</h5>
            <input type="number" name="Payment" placeholder="Pago" className="h-2/5 border-solid border-[1px] border-slate-900 rounded-md" required/>
          </label>
          <label className="w-5/6 h-full bg-slate-100 rounded-xl p-3 flex flex-col gap-4">
            <h5 className="text-2xl font-semibold">Ubicacion del evento</h5>
            <label htmlFor="Career">Carrera:</label>
            <input type="text" name="Career" placeholder="Carrera" className="h-2/5 border-solid border-[1px] border-slate-900 rounded-md" required/>
            <label htmlFor="Street">Calle:</label>
            <input type="text" name="Street" placeholder="Calle" className="h-2/5 border-solid border-[1px] border-slate-900 rounded-md" required/>
            <label htmlFor="City">Ciudad:</label>
            <input type="text" name="City" placeholder="Ciudad" className="h-2/5 border-solid border-[1px] border-slate-900 rounded-md" required/>
            <label htmlFor="SiteNumber">Numero:</label>
            <input type="number" name="SiteNumber" placeholder="Numero" className="h-2/5 border-solid border-[1px] border-slate-900 rounded-md" required/>
            <label htmlFor="Town">Barrio:</label>
            <input type="text" name="Town" placeholder="Barrio" className="h-2/5 border-solid border-[1px] border-slate-900 rounded-md" required/>
          </label>
          <label htmlFor="Vacants" className="w-5/6 h-1/6 bg-slate-100 rounded-xl p-3 flex flex-col gap-6">
            <h5 className="text-2xl font-semibold">Vacantes:</h5>
            <input type="number" name="Vacants" placeholder="Vacantes" className="h-2/5 border-solid border-[1px] border-slate-900 rounded-md" required/>
          </label>
          <label className="w-5/6 h-1/6 bg-slate-100 rounded-xl p-3 flex flex-col gap-6">
            <h5 className="text-2xl font-semibold">Requerimientos</h5>
            {

            }
          </label>
          <label htmlFor="isAvailable " className="w-5/6 h-1/6 bg-slate-100 rounded-xl p-3 flex flex-col gap-4">
            <h5 className="text-2xl font-semibold">Esta disponible:</h5>
            <select name="isAvailable " placeholder="Titulo" className="h-2/5 border-solid border-[1px] border-slate-900 rounded-md" required>
              <option value="true">Disponible</option>
              <option value="false">No Disponible</option>
            </select>
          </label>
          <input type="submit" className="" value="szszszsz"/>
        </form>
      </main>
    </>
  )
}

export default CreateOffer