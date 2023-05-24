import React, { useEffect, useState } from 'react'
import { renewToken } from '../../services';
import { clientHttp } from '../../services/client';
import { OrganizerT } from '../../types';
import Swal from 'sweetalert2';
import { BsFacebook, BsInstagram, BsLinkedin, BsSnapchat, BsTwitter, BsWhatsapp, BsYoutube } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

function ChangeOrganizerProfile() {

    const SocialMedias : any = {
        instagram : <BsInstagram className="h-10 w-10 text-slate-50 bg-gradient-to-tr via-pink-600 from-indigo-600 to-amber-500 rounded-xl drop-shadow"/>,
        facebook : <BsFacebook className="h-10 w-10 text-blue-600 drop-shadow"/>,
        tiktok : <FaTiktok className="h-10 w-10 drop-shadow"/>,
        twitter : <BsTwitter className="h-10 w-10 text-blue-500 drop-shadow"/>,
        linkedin : <BsLinkedin className="h-10 w-10 text-blue-700 drop-shadow"/>,
        snapchat : <BsSnapchat className="h-10 w-10 text-yellow-400 drop-shadow"/>,
        youtube : <BsYoutube className="h-10 w-10 text-red-700 drop-shadow"/>,
        whatsapp : <BsWhatsapp className="h-10 w-10 text-green-600 drop-shadow" />
    }

    const [currentOrganizer, setOrganizer] = useState<OrganizerT | null>(null)
    const [socialMedias, setSocialMedias] = useState<{nombre:string, url: string}[] | any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const changeSocialMediaName = (e : any, index: number) => {
        console.log(index);
        console.log(e);
        socialMedias[index] = {nombre : e.target.value, url : socialMedias[index].url};
        console.log(socialMedias);
        return setSocialMedias(socialMedias);
    }

    const getOrganizer = () => {
        renewToken();
        clientHttp().get(`/organizers/Organizer`)
          .then(res => {console.log(res);setOrganizer(res.data); setLoading(false)})  
          .catch(err=> {
            if(err.response?.status === 401){
                getOrganizer();
            }
            else{
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: err.data?.message,
                    showConfirmButton: false,
                    timer: 1000
                });
            }
          });
    }

    useEffect(()=>{
        getOrganizer();
    },[]);

    useEffect(()=> {
        if (currentOrganizer) setSocialMedias(currentOrganizer!.redes_sociales);
    },[currentOrganizer]);

    useEffect(()=>{
        console.log(socialMedias);
    },[socialMedias])

    return (
    <main className='min-h-screen w-full flex flex-col items-center justify-center'>
        {loading && <div className='absolute top-[4.25rem] flex items-center justify-center'><div className='w-8 h-8 rounded-[50%] [border-left-style:solid] border-[11.2px] border-double border-[#474bff] animate-spin'></div><span>Cargando información del Organizador...</span></div>}
        <form className=' bg-blue-800 shadow-2xl transition hover:drop-shadow-2xl p-5 w-5/6 md:w-1/3 gap-3 rounded flex flex-col items-center'>
            <h2 className='text-2xl my-2 text-slate-100 font-semibold'>Edita tu información Personal</h2>
            <div className='w-5/6  md:w-2/3 flex flex-col'>
                <label className='text-slate-100 font-semibold ' htmlFor='name'>Nombre</label>
                <input placeholder={currentOrganizer?.Name} className='rounded shadow hover:drop-shadow-lg transition text-sm p-1' id='name' type='text' name='Name'/>
            </div>
            <div className='w-5/6  md:w-2/3 flex flex-col'>
                <label className='text-slate-100 font-semibold ' htmlFor='lastname'>Apellido</label>
                <input placeholder={currentOrganizer?.Lastname} className='rounded shadow hover:drop-shadow-lg transition text-sm p-1' id='lastname' type='text' name='Lastname'/>
            </div>
            <div className='w-5/6  md:w-2/3 flex flex-col'>
                <label className='text-slate-100 font-semibold ' htmlFor='birthdate'>Fecha de nacimiento</label>
                <input value={currentOrganizer?.fecha_nacimiento} className='rounded shadow hover:drop-shadow-lg transition text-sm p-1' id='birthdate' type='date' name='fecha_nacimiento'/>
            </div>
            <div className='w-5/6  md:w-2/3 flex flex-col'>
                <label className='text-slate-100 font-semibold ' htmlFor='phone'>Telefono</label>
                <input placeholder={currentOrganizer?.telefono as string} className='rounded shadow hover:drop-shadow-lg transition text-sm p-1' id='phone' type='number' name='telefono'/>
            </div>
            <div className='w-5/6  md:w-2/3 flex flex-col'>
                <label className='text-slate-100 font-semibold ' htmlFor='city'>Ciudad</label>
                <input placeholder={currentOrganizer?.ciudad} className='rounded shadow hover:drop-shadow-lg transition text-sm p-1' id='city' type='text' name='ciudad'/>
            </div>
            <div className='w-5/6  md:w-2/3 flex flex-col'>
                <label className='text-slate-100 font-semibold ' htmlFor='gender'>Genero</label>
                <select className='rounded shadow hover:drop-shadow-lg transition text-sm p-1' id='gender'>
                    <option selected={currentOrganizer?.genero.toLowerCase() === "mujer"} value="Mujer">Mujer</option>
                    <option selected={currentOrganizer?.genero.toLowerCase() === "hombre"} value="Hombre">Hombre</option>
                    <option selected={currentOrganizer?.genero.toLowerCase() === "otro"} value="Otro">Otro</option>
                </select>
            </div>
            <div className='w-5/6  md:w-2/3 flex flex-col'>
                <span className='text-slate-100 font-semibold'>Redes Sociales</span>
                {
                    socialMedias.map((element :{nombre:string, url: string} | null , index : number)=>
                    <div className='max-w-full flex-col p-3 bg-blue-400 rounded shadow-xl' key={index}>
                        <div className='mb-3'>
                            <label htmlFor={`name${index+1}`}>Nombre de la red social #{index+1}</label>
                            <select onChange={(e) => changeSocialMediaName(e,index)} className='p-1 rounded font-semibold' id={`name${index+1}`}>
                                <option defaultValue={""}>Select</option>
                                <option selected={element?.nombre.toLowerCase() === "instagram"} value="instagram">Instagram</option>
                                <option selected={element?.nombre.toLowerCase() === "facebook"} value="facebook">Facebook</option>
                                <option selected={element?.nombre.toLowerCase() === "tiktok"} value="tiktok">Tiktok</option>
                                <option selected={element?.nombre.toLowerCase() === "twitter"} value="twitter">Twitter</option>
                                <option selected={element?.nombre.toLowerCase() === "linkedin"} value="linkedin">Linkedin</option>
                                <option selected={element?.nombre.toLowerCase() === "snapchat"} value="snapchat">Snapchat</option>
                                <option selected={element?.nombre.toLowerCase() === "youtube"} value="youtube">Youtube</option>
                                <option selected={element?.nombre.toLowerCase() === "whatsapp"} value="whatsapp">Whatsapp</option>
                            </select>
                            <a href={element?.url} className="text-lg hover:underline w-fit">{SocialMedias[element?.nombre.toLowerCase() as string]}</a>
                        </div>
                        <div>
                            <label htmlFor={`name${index+1}`}>Link de la red social #{index+1}</label>
                            <input className='p-1 rounded font-semibold' id={`name${index+1}`} value={element?.url} name='url' />
                        </div>
                    </div>)
                }
                <button onClick={()=>setSocialMedias([...socialMedias, null])}>Añadir</button>
            </div>
        </form>
    </main>
    )
}

export default ChangeOrganizerProfile