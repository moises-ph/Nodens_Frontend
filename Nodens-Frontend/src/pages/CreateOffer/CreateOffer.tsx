import axios from "axios";
import { useRef, useState } from "react";
import { GrFormClose } from "react-icons/gr";
import Swal from "sweetalert2";
import {renewToken} from "../../services";

const CreateOffer = () => {
  const [requeriments, setRequeriments] = useState<{description: string}[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const requeriment = useRef<HTMLInputElement>(null);
  const tag = useRef<HTMLInputElement>(null);

  const handle = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    renewToken();
    const form = new FormData((e.target as HTMLFormElement));
    const object= Object.fromEntries(form);
    (object.requeriments as any) = [...requeriments];
    (object.tags as any) = [...tags];
    object.Creation_Date = new Date().toISOString()
    console.log(object)
    const request = axios.create({
      baseURL: 'http://nodensoffers.c8ckgnaca0gagdcg.eastus.azurecontainer.io',
      headers : { Authorization : `Bearer ${localStorage.getItem('authTokenForTheUser')}` }
    });    
    request.post('/offers', object)
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
      if(!requeriments.find(e => e.description === requeriment.current!.value)){
        setRequeriments([...requeriments, {description: requeriment.current!.value}])
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
        <form className="w-full md:w-4/6 lg:w-3/6 flex flex-col items-center bg-transparent gap-4 pb-6"  onSubmit={(e)=> e.preventDefault()}>
          <label htmlFor="Title" className="w-5/6 h-1/6 bg-slate-100 rounded-xl p-3 flex flex-col gap-6">
            <h5 className="text-xl font-semibold">Titulo de Oferta</h5>
            <input type="text" id="Title" name="Title" placeholder="Titulo" className="h-2/5 border-solid border-[1px] border-slate-900 rounded-md" required/>
          </label>
          <label htmlFor="Description" className="w-5/6 h-[30vh] bg-slate-100 rounded-xl p-3 flex flex-col gap-4">
            <h5 className="text-xl font-semibold">Descripcion de Oferta</h5>
            <textarea name="Description" id="" className="h-4/5 resize-none border-solid border-[1px] border-slate-900 rounded-md" required></textarea>
          </label>
          <label htmlFor="Event_Date" className="w-5/6 h-1/6 bg-slate-100 rounded-xl p-3 flex flex-col gap-6">
            <h5 className="text-xl font-semibold">Fecha del evento</h5>
            <input type="datetime-local" name="Event_Date" className="h-2/5 border-solid border-[1px] border-slate-900 rounded-md" required/>
          </label>
          <label htmlFor="Payment" className="w-5/6 h-1/6 bg-slate-100 rounded-xl p-3 flex flex-col gap-6">
            <h5 className="text-xl font-semibold">Pago de la oferta</h5>
            <input type="number" name="Payment" placeholder="Pago" className="h-2/5 border-solid border-[1px] border-slate-900 rounded-md" required/>
          </label>
          
          <label className="w-5/6 h-full bg-slate-100 rounded-xl p-3 flex flex-col gap-4">
            <h5 className="text-xl font-semibold">Ubicacion del evento</h5>
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
            <button>Guardar ubicacion</button>
          </label>

          <label htmlFor="Vacants" className="w-5/6 h-1/6 bg-slate-100 rounded-xl p-3 flex flex-col gap-6">
            <h5 className="text-xl font-semibold">Vacantes:</h5>
            <input type="number" name="Vacants" placeholder="Vacantes" className="h-2/5 border-solid border-[1px] border-slate-900 rounded-md" required/>
          </label>
          <label className="w-5/6 h-1/6 bg-slate-100 rounded-xl p-3 flex flex-col gap-6">
            <h5 className="text-xl font-semibold">Requerimientos</h5>
            {
              requeriments.map((req, i ) => {
                return <div key={i} className='flex items-center justify-between px-3 text-base  bg-slate-100 h-4/5 col-span-1 rounded-md text-slate-700 font-normal border-solid border-slate-600 border-[1px]'>
                <span className='text-ellipsis overflow-hidden whitespace-nowrap'>{req.description}</span>
                <button><GrFormClose className='h-6 w-6' onClick={()=>deleteRequeriment(i)}/></button>
              </div>
              })
            }
            <input type="text" name="requeriment" placeholder="Requerimiento" ref={requeriment}/>
            <button onClick={()=>addRequeriment()}>Agregar Requerimiento</button>
          </label>
          <label htmlFor="isAvailable" className="w-5/6 h-1/6 bg-slate-100 rounded-xl p-3 flex flex-col gap-4">
            <h5 className="text-xl font-semibold">Esta disponible:</h5>
            <select name="isAvailable" placeholder="Titulo" className="h-2/5 border-solid border-[1px] border-slate-900 rounded-md" required>
              <option value={true}>Disponible</option>
              <option value={false}>No Disponible</option>
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
            <button onClick={()=>addTag()}>Agregar Tag</button>
          </label>
          <input type="button" onClick={handle} className="w-2/6 h-10 bg-slate-600 text-slate-200 font-medium text-xl rounded-xl" value="Publicar"/>
        </form>
      </main>
    </>
  )
}

export default CreateOffer