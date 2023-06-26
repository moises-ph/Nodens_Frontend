import axios, { AxiosError, AxiosResponse } from 'axios';
import { Logo } from '../Logo'
import Swal from 'sweetalert2';
import { useState } from 'react';

function RequestPassReset() {

    const [submitted , setSubmitted] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        setSubmitted(false);
        const form : FormData = new FormData(e.target as HTMLFormElement);
        const data : any = Object.fromEntries(form);
        axios.post("https://nodensgapi.azure-api.net/auth/api/auth/verify/req", data)
            .then((res : AxiosResponse<{url : string, Message : string}>) => {
                setTimeout(() => {
                    location.replace('/');
                }, 3000)
                Swal.fire({
                    title : res.data.Message,
                    icon : 'success',
                    text : 'Será redirigido al inicio en 3 segundos'
                });
            }).
            catch((err : AxiosError<{Message : string}>)=> {
                if(err.status === 404) Swal.fire({
                  title: err.response!.data.Message,
                  icon: "success"
                });
                console.log(err);
            }).finally(() => setLoading(false));
    }

  return (
    <div className='flex flex-col items-center justify-center bg-slate-100 rounded-lg w-1/4 min-h-[70vh] gap-5 p-3 shadow-2xl'>
        <Logo dimensions='h-28 w-28' />
        <h1 className='text-2xl font-semibold pt-2'>Restablece tu contraseña</h1>
        <form onSubmit={(e) => {handleSubmit(e); setLoading(true);}} className='flex flex-col gap-3 p-4 w-full'>
            <label htmlFor="email">Introduce tu correo electrónico</label>
            <input required name="email" id='email' placeholder='user@correo.com'  className='bg-transparent placeholder:font-thin placeholder:italic transition ease-in-out font-thin focus:outline-none p-1 border-solid border-slate-800 border-b-[1px]' type='email' />
            <button disabled={submitted} id="btnSubmit" type='submit' className='rounded bg-[#B701F7] w-1/2 h-9 text-slate-200 font-semibold transition ease-in-out self-center hover:bg-[#bc4ae5] hover:scale-105 disabled:bg-[#e3bbf2] disabled:hover:bg-[#e3bbf2] disabled:hover:scale-100'>Enviar</button>
        </form>
        {loading && <div className={`absolute bottom-36 flex items-center justify-center`}><div className='w-8 h-8 rounded-[50%] [border-left-style:solid] border-[11.2px] border-double border-[#474bff] animate-spin'></div></div>}
    </div>
  )
}

export default RequestPassReset