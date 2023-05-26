import { useRef, useState } from "react";
import { GrFormClose } from "react-icons/gr";
import Swal from "sweetalert2";
import {renewToken} from "../../services";
import { clientHttp } from "../../services/client";
import { Axios, AxiosError, AxiosResponse } from "axios";

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
  const [loading, setLoading] = useState<boolean>(false);

  const handle = (e:React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault();
    setLoading(true);
    clientHttp().post('/offers/offers', {
      "Title" : title.current?.value,
      "Description": description.current?.value,
      "Creation_Date": new Date().toISOString(),
      "Event_Date":new Date((event_date.current?.value as string)).toISOString(),
      "Payment": payment.current?.value,
      "Event_Ubication": { 
        "Career": career.current?.value,
        "Street": street.current?.value,
        "City": city.current?.value,
        "SiteNumber": site_number.current!.value,
        "Town": town.current?.value
      },
      "Requeriments": requeriments,
      "Vacants": vacants.current?.value,
      "isAvailable" : true,
      "tags" : tags
    })
    .then((res : AxiosResponse<{id : string, message : string}>) => {
      setLoading(false);
      Swal.fire({
        position : 'center',
        icon : "success",
        title : res.data.message,
        html : <a href={`https://nodensapim.azure-api.net/offers/offers/${res.data.id}`}></a>
      })
    })
    .catch(async (err : AxiosError<{error : string, message : string}>) =>{
      setLoading(false);
      if(err.response!.status === 401){
        await renewToken();
        handle(e); 
      }
      else{
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: err.response!.data!.message.includes("validation failed") ? `Error de validación en campo ${err.response!.data!.message.slice(err.response!.data!.message.indexOf("`")+1,err.response!.data!.message.lastIndexOf("`"))}` : err.response!.data!.message,
          showConfirmButton: false,
          timer: 700,
        });
      }
    })
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
        setRequeriments([...requeriments, {Description: requeriment.current!.value}]);
        requeriment.current!.value = "";
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
        {loading && <div className={`absolute right-4 md:right-[37rem] top-[4.25rem] md:top-[101.7rem] flex items-center justify-center`}><div className='w-8 h-8 rounded-[50%] [border-left-style:solid] border-[11.2px] border-double border-[#474bff] animate-spin'></div></div>}
        <form className="w-full md:w-4/6 lg:w-3/6 flex flex-col items-center bg-transparent gap-4 pb-6" onSubmit={(e)=> e.preventDefault()}>
          <label htmlFor="Title" className="w-5/6 h-1/6 bg-slate-100 rounded-xl p-3 flex flex-col gap-6">
            <h5 className="text-xl font-semibold">Titulo de Oferta <span className="text-red-700">*</span></h5>
            <input type="text" id="Title" name="Title" placeholder="Titulo"  ref={title} className="h-2/5 border-solid border-[1px] border-slate-900 rounded-md" required/>
          </label>
          <label htmlFor="Description" className="w-5/6 h-[30vh] bg-slate-100 rounded-xl p-3 flex flex-col gap-4">
            <h5 className="text-xl font-semibold">Descripcion de Oferta <span className="text-red-700">*</span></h5>
            <textarea name="Description" id="" ref={description} className="h-4/5 resize-none border-solid border-[1px] border-slate-900 rounded-md" required></textarea>
          </label>
          <label htmlFor="Event_Date" className="w-5/6 h-1/6 bg-slate-100 rounded-xl p-3 flex flex-col gap-6">
            <h5 className="text-xl font-semibold">Fecha del evento <span className="text-red-700">*</span></h5>
            <input type="datetime-local" name="Event_Date" ref={event_date} className="h-2/5 border-solid border-[1px] border-slate-900 rounded-md" required/>
          </label>
          <label htmlFor="Payment" className="w-5/6 h-1/6 bg-slate-100 rounded-xl p-3 flex flex-col gap-6">
            <h5 className="text-xl font-semibold">Pago de la oferta <span className="text-red-700">*</span></h5>
            <input type="number" name="Payment" placeholder="Pago" ref={payment} className="h-2/5 border-solid border-[1px] border-slate-900 rounded-md" required/>
          </label>
          
          <label className="w-5/6 h-full bg-slate-100 rounded-xl p-3 flex flex-col gap-4">
            <h5 className="text-xl font-semibold">Ubicacion del evento <span className="text-red-700">*</span></h5>
            <label htmlFor="Career">Carrera:</label>
            <input type="text" name="Career" placeholder="Carrera" ref={career} className="h-2/5 border-solid border-[1px] border-slate-900 rounded-md" />
            <label htmlFor="Street">Calle:</label>
            <input type="text" name="Street" placeholder="Calle" ref={street} className="h-2/5 border-solid border-[1px] border-slate-900 rounded-md" />
            <label htmlFor="City">Ciudad: <span className="text-red-700">*</span></label>
            <input type="text" name="City" placeholder="Ciudad" ref={city} className="h-2/5 border-solid border-[1px] border-slate-900 rounded-md" required/>
            <label htmlFor="SiteNumber">Numero: <span className="text-red-700">*</span></label>
            <input type="text" name="SiteNumber" placeholder="Numero" ref={site_number} className="h-2/5 border-solid border-[1px] border-slate-900 rounded-md" required/>
            <label htmlFor="Town">Barrio: <span className="text-red-700">*</span></label>
            <input type="text" name="Town" placeholder="Barrio" ref={town} className="h-2/5 border-solid border-[1px] border-slate-900 rounded-md" required/>
          </label>

          <label htmlFor="Vacants" className="w-5/6 h-1/6 bg-slate-100 rounded-xl p-3 flex flex-col gap-6">
            <h5 className="text-xl font-semibold">Vacantes: <span className="text-red-700">*</span></h5>
            <input type="number" name="Vacants" placeholder="Vacantes" ref={vacants} className="h-2/5 border-solid border-[1px] border-slate-900 rounded-md" required/>
          </label>
          <label className="w-5/6 h-1/6 bg-slate-100 rounded-xl p-3 flex flex-col gap-6">
            <h5 className="text-xl font-semibold">Requerimientos <span className="text-red-700">*</span></h5>
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
          <label className="w-5/6 h-1/6 bg-slate-100 rounded-xl p-3 flex flex-col gap-6">
            <h5 className="text-xl font-semibold">Tags <span className="text-red-700">*</span></h5>
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