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
      <main className="w-full h-fit flex flex-col items-center justify-center gap-2 pt-6 bg-[#003F5A]">
      <div className="fixed h-full w-full blur-[2px]">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className="absolute z-0 mt-[-10%] ml-4" viewBox="0 0 500 500" width="30%" id="blobSvg"><defs><linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style={{stopColor: "rgb(225,93,18)"}}></stop><stop offset="100%" style={{stopColor: "rgb(235,217,200)"}}></stop></linearGradient></defs><path id="blob" fill="url(#gradient)"><animate attributeName="d" dur="10000ms" repeatCount="indefinite" values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"></animate></path></svg>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className="absolute z-0 mt-[80%] ml-[-20%]" viewBox="0 0 500 500" width="30%" id="blobSvg"><defs><linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style={{stopColor: "rgb(225,93,18)"}}></stop><stop offset="100%" style={{stopColor: "rgb(235,217,200)"}}></stop></linearGradient></defs><path id="blob" fill="url(#gradient)"><animate attributeName="d" dur="10000ms" repeatCount="indefinite" values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"></animate></path></svg>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className="absolute z-0 mt-[100%] ml-[80%]" viewBox="0 0 500 500" width="60%" id="blobSvg"><defs><linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style={{stopColor: "rgb(225,93,18)"}}></stop><stop offset="100%" style={{stopColor: "rgb(235,217,200)"}}></stop></linearGradient></defs><path id="blob" fill="url(#gradient)"><animate attributeName="d" dur="10000ms" repeatCount="indefinite" values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"></animate></path></svg>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className="absolute z-0 mt-32 ml-[70%]" viewBox="0 0 500 500" width="30%" id="blobSvg"><defs><linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style={{stopColor: "rgb(225,93,18)"}}></stop><stop offset="100%" style={{stopColor: "rgb(235,217,200)"}}></stop></linearGradient></defs><path id="blob" fill="url(#gradient)"><animate attributeName="d" dur="10000ms" repeatCount="indefinite" values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"></animate></path></svg>        
        </div> 
        <h1 className="text-2xl font-semibold text-slate-100">Crear Oferta</h1>
        {loading && <div className={`absolute right-4 md:right-[37rem] top-[4.25rem] md:top-[101.7rem] flex items-center justify-center`}><div className='w-8 h-8 rounded-[50%] [border-left-style:solid] border-[11.2px] border-double border-[#474bff] animate-spin'></div></div>}
        <form className="w-full md:w-4/6 lg:w-3/6 flex flex-col items-center bg-transparent gap-4 pb-6 z-30" onSubmit={(e)=> e.preventDefault()}>
          <label htmlFor="Title" className="w-5/6 h-1/6 bg-zinc-900 rounded-xl p-3 flex flex-col gap-6">
            <h5 className="text-xl font-semibold text-slate-100">Titulo de Oferta <span className="text-red-700">*</span></h5>
            <input type="text" id="Title" name="Title" placeholder="Titulo"  ref={title} className="h-2/5 border-solid border-[1px] border-slate-900 rounded-md" required/>
          </label>
          <label htmlFor="Description" className="w-5/6 h-[30vh] bg-zinc-900 rounded-xl p-3 flex flex-col gap-4">
            <h5 className="text-xl font-semibold text-slate-100">Descripcion de Oferta <span className="text-red-700">*</span></h5>
            <textarea name="Description" id="" ref={description} className="h-4/5 resize-none border-solid border-[1px] border-slate-900 rounded-md" required></textarea>
          </label>
          <label htmlFor="Event_Date" className="w-5/6 h-1/6 bg-zinc-900 rounded-xl p-3 flex flex-col gap-6">
            <h5 className="text-xl font-semibold text-slate-100">Fecha del evento <span className="text-red-700">*</span></h5>
            <input type="datetime-local" name="Event_Date" ref={event_date} className="h-2/5 border-solid border-[1px] border-slate-900 rounded-md" required/>
          </label>
          <label htmlFor="Payment" className="w-5/6 h-1/6 bg-zinc-900 rounded-xl p-3 flex flex-col gap-6">
            <h5 className="text-xl font-semibold text-slate-100">Pago de la oferta <span className="text-red-700">*</span></h5>
            <input type="number" name="Payment" placeholder="Pago" ref={payment} className="h-2/5 border-solid border-[1px] border-slate-900 rounded-md" required/>
          </label>
          
          <label className="w-5/6 h-full bg-zinc-900 rounded-xl p-3 flex flex-col gap-4">
            <h5 className="text-xl font-semibold text-slate-100">Ubicacion del evento <span className="text-red-700">*</span></h5>
            <label htmlFor="Career" className="text-slate-100">Carrera:</label>
            <input type="text" name="Career" placeholder="Carrera" ref={career} className="h-2/5 border-solid border-[1px] border-slate-900 rounded-md" />
            <label htmlFor="Street" className="text-slate-100">Calle:</label>
            <input type="text" name="Street" placeholder="Calle" ref={street} className="h-2/5 border-solid border-[1px] border-slate-900 rounded-md" />
            <label htmlFor="City" className="text-slate-100">Ciudad: <span className="text-red-700">*</span></label>
            <input type="text" name="City" placeholder="Ciudad" ref={city} className="h-2/5 border-solid border-[1px] border-slate-900 rounded-md" required/>
            <label htmlFor="SiteNumber" className="text-slate-100">Numero: <span className="text-red-700">*</span></label>
            <input type="text" name="SiteNumber" placeholder="Numero" ref={site_number} className="h-2/5 border-solid border-[1px] border-slate-900 rounded-md" required/>
            <label htmlFor="Town" className="text-slate-100">Barrio: <span className="text-red-700">*</span></label>
            <input type="text" name="Town" placeholder="Barrio" ref={town} className="h-2/5 border-solid border-[1px] border-slate-900 rounded-md" required/>
          </label>

          <label htmlFor="Vacants" className="w-5/6 h-1/6 bg-zinc-900 rounded-xl p-3 flex flex-col gap-6">
            <h5 className="text-xl font-semibold text-slate-100">Vacantes: <span className="text-red-700">*</span></h5>
            <input type="number" name="Vacants" placeholder="Vacantes" ref={vacants} className="h-2/5 border-solid border-[1px] border-slate-900 rounded-md" required/>
          </label>
          <label className="w-5/6 h-1/6 bg-zinc-900 rounded-xl p-3 flex flex-col gap-6">
            <h5 className="text-xl font-semibold text-slate-100">Requerimientos <span className="text-red-700">*</span></h5>
            {
              requeriments.map((req, i ) => {
                return <div key={i} className='flex items-center justify-between px-3 text-base  bg-slate-100 h-4/5 col-span-1 rounded-md text-slate-700 font-normal border-solid border-slate-600 border-[1px]'>
                <span className='text-ellipsis overflow-hidden whitespace-nowrap'>{req.Description}</span>
                <button><GrFormClose className='h-6 w-6' onClick={()=>deleteRequeriment(i)}/></button>
              </div>
              })
            }
            <input type="text" name="requeriment" placeholder="Requerimiento" ref={requeriment}/>
            <span onClick={()=>addRequeriment()} className="text-slate-100">Agregar Requerimiento</span>
          </label>
          <label className="w-5/6 h-1/6 bg-zinc-900 rounded-xl p-3 flex flex-col gap-6">
            <h5 className="text-xl font-semibold text-slate-100">Tags <span className="text-red-700">*</span></h5>
            {
              tags.map((req, i ) => {
                return <div key={i} className='flex items-center justify-between px-3 text-base  bg-slate-100 h-4/5 col-span-1 rounded-md text-slate-700 font-normal border-solid border-slate-600 border-[1px]'>
                <span className='text-ellipsis overflow-hidden whitespace-nowrap'>{req}</span>
                <button><GrFormClose className='h-6 w-6' onClick={()=>deleteTag(i)}/></button>
              </div>
              })
            }
            <input type="text" name="tags" placeholder="tags" ref={tag}/>
            <span onClick={()=>addTag()} className="text-slate-100">Agregar Tag</span>
          </label>
          <input type="submit" onClick={(e)=> handle(e)} className="w-2/6 h-10 bg-orange-500 text-slate-200 font-medium text-xl rounded-xl" value="Publicar"/>
        </form>
      </main>
    </>
  )
}

export default CreateOffer