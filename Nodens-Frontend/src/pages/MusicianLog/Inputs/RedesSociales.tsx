import {useRef, useState} from "react"
import { GrFormClose } from "react-icons/gr";
import Swal from "sweetalert2";

const RedesSociales = ({ handler, goBack }: { handler: (key: string, value: any) => void, goBack: ()=>void }) => {
  const [redes, setRedes] = useState<{nombre: String;url: String}[]>([])
	const redes_sociales = useRef<HTMLSelectElement>(null)
  const url = useRef<HTMLInputElement>(null)
  
  const deleteRed = (i:number) => {
    setRedes(redes.filter((e, index) => index != i))
  }

  const checkUrl = (dom: string) => {
    let exp:RegExp | string = '';
    switch(dom){
      case 'Facebook': 
      exp = /^https?:\/\/(?:www\.)?facebook\.com\/[\w.-]+$/i;
      break;
      case 'Instagram': 
      exp = /^https?:\/\/(?:www\.)?instagram\.com\/[\w.-]+\/?$/i;
      break;
      case 'TikTok': 
      exp = /^https?:\/\/(?:www\.)?tiktok\.com\/@[\w.-]+$/i;
      break;
      case 'Youtube': 
      exp = /^https?:\/\/(?:www\.)?youtube\.com\/@[\w-]+$/i;
      break;
      case 'Linkedin': 
      exp = /^https?:\/\/(?:www\.)?linkedin\.com\/in\/[\w-]+$/i;
      break;
    }
    const urlChecker = new RegExp(exp);
    if(urlChecker.test(url.current!.value)) {
      addRed()
    } else {
      console.log(exp);
      
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor ingresa una url valida',
        timer: 3000  
      })
    }
  }

  const addRed = () => {
    if(redes_sociales.current!.value && url.current!.value){
      if(!redes.find(e => e.nombre === redes_sociales.current!.value)){
        setRedes([...redes, {nombre: redes_sociales.current!.value, url: url.current!.value}])
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Por favor ingresa una red social diferente',
          timer: 3000  
        })  
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor ingresa un red social',
        timer: 3000  
      })
    }
  }

  const checkLength = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'error',
      title: '5 redes maximo'
    })
  }

  const checking = () => {
    if(redes.length < 1) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor ingresa al menos una red social',
        timer: 2000  
      })
    } else {
      handler('redes_sociales', redes)
    }
  }

  return (
    <div className='h-full bg-slate-100 bg-opacity-20 rounded-xl border-solid w-10/12 flex flex-col gap-10 px-2 py-4 text-slate-100 shadow-lg'>
      <div className='text-2xl h-5/6 flex flex-col'>
        <h3 className="mb-2">Redes Sociales:</h3>
        <div className='grid grid-cols-2 grid-rows-3 h-4/5 w-full gap-2 mb-8'>
          {redes.map((gen, i)=>{
              return <div key={i} className='flex items-center justify-between px-3 text-base  bg-slate-100 bg-opacity-20 h-4/5 col-span-1 rounded-md text-slate-100 font-normal border-solid border-slate-600 border-[1px]'>
                <span className='text-ellipsis overflow-hidden whitespace-nowrap'>{gen.nombre}</span>
                <button><GrFormClose className='h-6 w-6' onClick={()=>deleteRed(i)}/></button>
              </div>
            })}
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="genero" className="w-11/12">Red:
            <select name="genero" ref={redes_sociales} className="ml-2 bg-transparent">
              <optgroup className="bg-slate-900">
                <option value="Facebook">Facebook</option>
                <option value="Instagram">Instagram</option>
                <option value="Linkedin">Linkedin</option>
                <option value="TikTok">TikTok</option>
                <option value="Youtube">Youtube</option>
              </optgroup>
            </select>
          </label>
          <label htmlFor="url">
            <input type="text" name="url" placeholder="URL" ref={url} className='w-full bg-transparent border-solid border-b-2 border-slate-300 text-slate-100 font-medium text-lg pl-2 outline-none focus:border-slate-500'/>
          </label>
        </div>
        <button onClick={()=>redes.length < 5 ? checkUrl(redes_sociales.current!.value) : checkLength()}>Agregar</button>
      </div>
      <div className="flex w-3/5 gap-4">
        <button onClick={() => goBack()} className='px-4 bg-slate-100 rounded-md text-slate-900 h-8'>Atras</button>
        <button onClick={() => handler('redes_sociales', redes)} className='px-4 bg-slate-100 rounded-md text-slate-900 h-8'>Guardar</button>
      </div>
    </div>
  )
}

export default RedesSociales