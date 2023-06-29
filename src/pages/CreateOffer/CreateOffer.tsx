import { useRef, useState } from "react";
import { GrFormClose } from "react-icons/gr";
import Swal from "sweetalert2";
import {renewToken} from "../../services";
import { clientHttp } from "../../services/client";
import { AxiosError, AxiosResponse } from "axios";

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
      "tags" : tags,
      "saves" : []
    })
    .then((res : AxiosResponse<{id : string, message : string}>) => {
      console.log(res.data.message);
      setLoading(false);
      Swal.fire({
        position : 'center',
        icon : "success",
        title : "Haz creado la oferta exitosamente",
        
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
      <main className="w-full h-fit flex flex-col items-center justify-center gap-2 pt-10 bg-slate-200">
        <h1 className="text-2xl font-semibold text-slate-800">Crear Oferta</h1>
        {loading && <div className={`absolute right-4 md:right-[37rem] top-[4.25rem] md:top-[101.7rem] flex items-center justify-center`}><div className='w-8 h-8 rounded-[50%] [border-left-style:solid] border-[11.2px] border-double border-[#474bff] animate-spin'></div></div>}
        <form className="w-full bg-white flex flex-col flex-wrap max-h-[50%] bg-transparent gap-3 px-10 pb-6 z-30" onSubmit={(e)=> e.preventDefault()}>
          <div className="w-1/3 h-1/6 bg-transparent p-3 flex flex-col gap-6">
            <label className="text-xl font-semibold text-gray-900">Titulo de Oferta <span className="text-red-700">*</span></label>
            <input type="text" id="Title" name="Title" placeholder="Titulo"  ref={title} className="h-2/5 placeholder:font-thin border-solid border-b-[1px] border-slate-900 outline-none" required/>
          </div>
          <div className="w-2/5 h-[20vh] bg-transparent p-3 flex justify-between gap-4">
            <div className="flex flex-col w-2/3">
              <label className="text-xl font-semibold text-gray-900">Descripcion de Oferta <span className="text-red-700">*</span></label>
              <textarea name="Description" id="" placeholder="Describe tu oferta" ref={description} className="h-4/5 resize-none border-solid border-b-[1px] border-slate-900 placeholder:font-thin outline-none" required></textarea>
            </div>
            <div className="flex flex-col">
              <label className="text-xl font-semibold text-gray-900">Fecha del evento <span className="text-red-700">*</span></label>
              <span className="italic font-thin text-sm">Ingresa fecha y hora</span>
              <input min={new Date().toISOString().slice(0,16)} type="datetime-local" name="Event_Date" ref={event_date} className="border-solid border-b-[1px] border-slate-900 font-thin outline-none" required/>
            </div>
          </div>
          <div className="w-1/3 h-1/6 bg-transparent p-3 flex flex-col gap-6">
            
          </div>
          <div className="w-1/3 h-fit bg-transparent p-3 flex gap-6">
            <div className="flex flex-col">
              <label className="text-xl font-semibold text-gray-900">Pago de la oferta <span className="text-red-700">*</span></label>
              <div className="flex border-solid border-b-[1px] border-slate-900">
                <span className="text-black/40">$</span>
                <input type="number" pattern="[0-9]+" min={0} name="Payment" placeholder="Pago" ref={payment} className="font-thin  placeholder:font-thin outline-none" required/>
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-xl font-semibold text-gray-900">Vacantes: <span className="text-red-700">*</span></label>
              <input min={0} type="number" name="Vacants" placeholder="Vacantes" ref={vacants} className="font-thin  border-solid border-b-[1px] border-slate-900 placeholder:font-thin outline-none" required/>
            </div>
          </div>
          
          <div className="w-2/5 bg-transparent p-3 flex flex-col gap-4">
            <h5 className="text-xl font-semibold text-gray-900">Ubicacion del evento <span className="text-red-700">*</span></h5>
            <div className="flex w-full gap-2">
              <div className="flex flex-col">
                <label htmlFor="City" className="text-gray-900">Ciudad <span className="text-red-700">*</span></label>
                <input type="text" name="City" placeholder="Ciudad" ref={city} className="font-thin h-2/5 border-solid border-b-[1px] border-slate-900 placeholder:font-thin w-32 outline-none" required/>
              </div>
              <div className="flex flex-col">
                <label htmlFor="Town" className="text-gray-900">Barrio <span className="text-red-700">*</span></label>
                <input type="text" name="Town" placeholder="Barrio" ref={town} className="font-thin h-2/5 border-solid border-b-[1px] border-slate-900 placeholder:font-thin w-32 outline-none" required/>
              </div>
              <div className="flex flex-col">
                <label htmlFor="Career" className="text-gray-900">Carrera</label>
                <input type="text" name="Career" placeholder="Carrera" ref={career} className="font-thin h-2/5 border-solid border-b-[1px] border-slate-900 placeholder:font-thin w-3/4 outline-none" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="Street" className="text-gray-900">Calle</label>
                <input type="text" name="Street" placeholder="Calle" ref={street} className="font-thin h-2/5 border-solid border-b-[1px] border-slate-900 placeholder:font-thin w-3/4 outline-none" />
              </div>
              <div className="flex flex-col w-fit">
                <label htmlFor="SiteNumber" className="text-gray-900">Numero <span className="text-red-700">*</span></label>
                <input type="text" name="SiteNumber" placeholder="Numero" ref={site_number} className="font-thin h-2/5 border-solid border-b-[1px] border-slate-900 placeholder:font-thin w-3/4 outline-none" required/>
              </div>
            </div>
          </div>

          <div className="w-1/3 h-1/6 bg-transparent p-3 flex flex-col gap-6">
            
          </div>
          <div className="w-1/3 bg-transparent p-3 flex flex-col gap-6">
            <label className="text-xl font-semibold text-gray-900">Requerimientos <span className="text-red-700">*</span></label>
            {
              requeriments.map((req, i ) => {
                return <div key={i} className='flex items-center w-fit justify-between px-3 text-base  bg-transparent h-4/5 col-span-1 text-slate-700 font-normal border-solid border-slate-600 border-b-[1px]'>
                <span className='text-ellipsis overflow-hidden whitespace-nowrap'>{req.Description}</span>
                <button><GrFormClose className='h-6 w-6' onClick={(e)=>{e.preventDefault(); deleteRequeriment(i);}}/></button>
              </div>
              })
            }
            <div className="flex gap-1">
              <input type="text" name="requeriment" placeholder="Requerimiento" ref={requeriment} className="font-thin border-solid border-b-[1px] border-slate-900 placeholder:font-thin  outline-none"/>
              <button onClick={(e)=>{e.preventDefault(); addRequeriment();}} className="w-fit px-4 py-1 text-orange-500 bg-white border-solid rounded-2xl border-orange-500 border-[1px]">Agregar Requerimiento</button>
            </div>
          </div>
          <div className="w-1/3 h-1/6 bg-transparent p-3 flex flex-col gap-6">
            <label className="text-xl font-semibold text-gray-900">Tags <span className="text-red-700">*</span></label>
            {
              tags.map((req, i ) => {
                return <div key={i} className='flex items-center justify-between px-3 text-base  bg-transparent h-4/5 col-span-1 text-slate-700 font-normal border-solid border-slate-600 border-b-[1px] outline-none'>
                <span className='text-ellipsis overflow-hidden whitespace-nowrap'>{req}</span>
                <button><GrFormClose className='h-6 w-6' onClick={(e)=>{e.preventDefault(); deleteTag(i);}}/></button>
              </div>
              })
            }
            <div className="flex gap-1">
              <input type="text" name="tags" placeholder="tags" ref={tag} className="font-thin border-solid border-b-[1px] border-slate-900 placeholder:font-thin outline-none"/>
            <button onClick={(e)=>{e.preventDefault() ; addTag()}} className="w-fit px-4 py-1 text-orange-500 bg-white border-solid rounded-2xl border-orange-500 border-[1px]">Agregar Tag</button>
            </div>
          </div>
          <input type="submit" onClick={(e)=> handle(e)} className="w-2/6 h-10 bg-orange-500 text-slate-200 font-medium transition text-xl rounded-xl hover:shadow-2xl hover:shadow-black hover:ease-in hover:cursor-pointer hover:duration-200  active:translate-y-2 " value="Publicar"/>
        </form>
      </main>
    </>
  )
}

export default CreateOffer
