import axios from "axios";
import { useRef, useState } from "react";
import { GrFormClose } from "react-icons/gr";
import Swal from "sweetalert2";
import {renewToken} from "../../services";

const CreateOffer = () => {
  const [requeriments, setRequeriments] = useState<{Description: string}[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const title = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLTextAreaElement>(null);
  const event_date = useRef<HTMLInputElement>(null);
  const payment = useRef<HTMLInputElement>(null);
  const career = useRef<HTMLInputElement>(null);
  const street = useRef<HTMLInputElement>(null);
  const city = useRef<HTMLInputElement>(null);
  const site_number = useRef<HTMLInputElement>(null);
  const town = useRef<HTMLInputElement>(null);
  const vacants = useRef<HTMLInputElement>(null);
  const is_available = useRef<HTMLSelectElement>(null);
  const requeriment = useRef<HTMLInputElement>(null);
  const tag = useRef<HTMLInputElement>(null);

  const handle = (e:React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault();
    renewToken();

    const request = axios.create({
      baseURL: 'http://nodensoffers.c8ckgnaca0gagdcg.eastus.azurecontainer.io',
      headers : { Authorization : `Bearer ${localStorage.getItem('authTokenForTheUser')}` }
    });    
    request.post('/offers', {
      "Title" : title.current?.value,
      "Description": description.current?.value,
      "Creation_Date": new Date().toISOString(),
      "Event_Date":new Date((event_date.current?.value as string)).toISOString(),
      "Payment": payment.current?.value,
      "Event_Ubication": { 
        "Career": career.current?.value,
        "Street": street.current?.value,
        "City": city.current?.value,
        "SiteNumber": site_number.current?.value,
        "Town": town.current?.value
      },
      "Requeriments": requeriments,
      "Vacants": vacants.current?.value,
      "isAvailable" : is_available.current?.value,
      "tags" : tags
    })
    .then(res => console.log(res))
    .catch(err=>console.log(err))
  }

  const deleteTag = (i: number) => {
    setTags(tags.filter((e, index) => index != i))
  }

  const addTag = () => {
    if(tag.current!.value){
      if(!tags.find(e => e === tag.current!.value)){
        setTags([...tags, tag.current!.value])
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Por favor ingresa una tag diferente',
          timer: 3000  
        })  
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor ingresa una tag',
        timer: 3000  
      })
    }
  }

  const deleteRequeriment = (i: number) => {
    setRequeriments(requeriments.filter((e, index) => index != i))
  }

  const addRequeriment = () => {
    if(requeriment.current!.value){
      if(!requeriments.find(e => e.Description === requeriment.current!.value)){
        setRequeriments([...requeriments, {Description: requeriment.current!.value}])
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Por favor ingresa un requerimiento diferente',
          timer: 3000  
        })  
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor ingresa un requrimiento',
        timer: 3000  
      })
    }
  }
  
  return (
    <>
      <main className="w-full h-fit flex flex-col items-center justify-center gap-2 pt-6 bg-slate-300">
        <h1 className="text-2xl font-semibold">Crear Oferta</h1>
        <form className="w-full md:w-4/6 lg:w-3/6 flex flex-col items-center bg-transparent gap-4 pb-6" onSubmit={(e)=> e.preventDefault()}>
          <label htmlFor="Title" className="w-5/6 h-1/6 bg-slate-100 rounded-xl p-3 flex flex-col gap-6">
            <h5 className="text-xl font-semibold">Titulo de Oferta</h5>
            <input type="text" id="Title" name="Title" placeholder="Titulo"  ref={title} className="h-2/5 border-solid border-[1px] border-slate-900 rounded-md" required/>
          </label>
          <label htmlFor="Description" className="w-5/6 h-[30vh] bg-slate-100 rounded-xl p-3 flex flex-col gap-4">
            <h5 className="text-xl font-semibold">Descripcion de Oferta</h5>
            <textarea name="Description" id="" ref={description} className="h-4/5 resize-none border-solid border-[1px] border-slate-900 rounded-md" required></textarea>
          </label>
          <label htmlFor="Event_Date" className="w-5/6 h-1/6 bg-slate-100 rounded-xl p-3 flex flex-col gap-6">
            <h5 className="text-xl font-semibold">Fecha del evento</h5>
            <input type="datetime-local" name="Event_Date" ref={event_date} className="h-2/5 border-solid border-[1px] border-slate-900 rounded-md" required/>
          </label>
          <label htmlFor="Payment" className="w-5/6 h-1/6 bg-slate-100 rounded-xl p-3 flex flex-col gap-6">
            <h5 className="text-xl font-semibold">Pago de la oferta</h5>
            <input type="number" name="Payment" placeholder="Pago" ref={payment} className="h-2/5 border-solid border-[1px] border-slate-900 rounded-md" required/>
          </label>
          
          <label className="w-5/6 h-full bg-slate-100 rounded-xl p-3 flex flex-col gap-4">
            <h5 className="text-xl font-semibold">Ubicacion del evento</h5>
            <label htmlFor="Career">Carrera:</label>
            <input type="text" name="Career" placeholder="Carrera" ref={career} className="h-2/5 border-solid border-[1px] border-slate-900 rounded-md" required/>
            <label htmlFor="Street">Calle:</label>
            <input type="text" name="Street" placeholder="Calle" ref={street} className="h-2/5 border-solid border-[1px] border-slate-900 rounded-md" required/>
            <label htmlFor="City">Ciudad:</label>
            <input type="text" name="City" placeholder="Ciudad" ref={city} className="h-2/5 border-solid border-[1px] border-slate-900 rounded-md" required/>
            <label htmlFor="SiteNumber">Numero:</label>
            <input type="number" name="SiteNumber" placeholder="Numero" ref={site_number} className="h-2/5 border-solid border-[1px] border-slate-900 rounded-md" required/>
            <label htmlFor="Town">Barrio:</label>
            <input type="text" name="Town" placeholder="Barrio" ref={town} className="h-2/5 border-solid border-[1px] border-slate-900 rounded-md" required/>
          </label>

          <label htmlFor="Vacants" className="w-5/6 h-1/6 bg-slate-100 rounded-xl p-3 flex flex-col gap-6">
            <h5 className="text-xl font-semibold">Vacantes:</h5>
            <input type="number" name="Vacants" placeholder="Vacantes" ref={vacants} className="h-2/5 border-solid border-[1px] border-slate-900 rounded-md" required/>
          </label>
          <label className="w-5/6 h-1/6 bg-slate-100 rounded-xl p-3 flex flex-col gap-6">
            <h5 className="text-xl font-semibold">Requerimientos</h5>
            {
              requeriments.map((req, i ) => {
                return <div key={i} className='flex items-center justify-between px-3 text-base  bg-slate-100 h-4/5 col-span-1 rounded-md text-slate-700 font-normal border-solid border-slate-600 border-[1px]'>
                <span className='text-ellipsis overflow-hidden whitespace-nowrap'>{req.Description}</span>
                <button><GrFormClose className='h-6 w-6' onClick={()=>deleteRequeriment(i)}/></button>
              </div>
              })
            }
            <input type="text" name="requeriment" placeholder="Requerimiento" ref={requeriment}/>
            <span onClick={()=>addRequeriment()}>Agregar Requerimiento</span>
          </label>
          <label htmlFor="isAvailable" className="w-5/6 h-1/6 bg-slate-100 rounded-xl p-3 flex flex-col gap-4">
            <h5 className="text-xl font-semibold">Esta disponible:</h5>
            <select name="isAvailable" placeholder="Titulo" ref={is_available} className="h-2/5 border-solid border-[1px] border-slate-900 rounded-md" required>
              <option value={(true as unknown as string)}>Disponible</option>
              <option value={(false as unknown as string)}>No Disponible</option>
            </select>
          </label>
          <label className="w-5/6 h-1/6 bg-slate-100 rounded-xl p-3 flex flex-col gap-6">
            <h5 className="text-xl font-semibold">Tags</h5>
            {
              tags.map((req, i ) => {
                return <div key={i} className='flex items-center justify-between px-3 text-base  bg-slate-100 h-4/5 col-span-1 rounded-md text-slate-700 font-normal border-solid border-slate-600 border-[1px]'>
                <span className='text-ellipsis overflow-hidden whitespace-nowrap'>{req}</span>
                <button><GrFormClose className='h-6 w-6' onClick={()=>deleteTag(i)}/></button>
              </div>
              })
            }
            <input type="text" name="tags" placeholder="tags" ref={tag}/>
            <span onClick={()=>addTag()}>Agregar Tag</span>
          </label>
          <input type="submit" onClick={(e)=> handle(e)} className="w-2/6 h-10 bg-slate-600 text-slate-200 font-medium text-xl rounded-xl" value="Publicar"/>
        </form>
      </main>
    </>
  )
}

export default CreateOffer