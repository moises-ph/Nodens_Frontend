import React, { useEffect, useState } from 'react'
import { renewToken } from '../../services';
import { clientHttp } from '../../services/client';
import { OrganizerT } from '../../types';

function ChangeOrganizerProfile() {

    type SocialMedia = {
        nombre : string, 
        url : string
    }

    const [currentOrganizer, setOrganizer] = useState<OrganizerT | null>(null)
    const [socialMedias, setSocialMedias] = useState<SocialMedia[] | null[]>([]);

    const getOrganizer = () => {
        renewToken();
        clientHttp().get(`/organizers/Organizer`)
          .then(res => {console.log(res);setOrganizer(res.data)})  
          .catch(err=> console.log(err));
    }

    useEffect(()=>{
        getOrganizer();
    },[])

    return (
    <main className='min-h-screen w-full flex flex-col items-center justify-center'>
        <form className='bg-slate-400 p-5 gap-3 rounded flex flex-col items-center'>
            <h2 className='text-2xl my-2 text-slate-100 font-semibold'>Edita tu información Personal</h2>
            <div className='w-2/3 flex flex-col'>
                <label htmlFor='name'>Nombre</label>
                <input className='rounded shadow hover:drop-shadow-lg transition text-sm p-1' id='name' type='text' name='Name'/>
            </div>
            <div className='w-2/3 flex flex-col'>
                <label htmlFor='lastname'>Apellido</label>
                <input value={currentOrganizer?.Name} className='rounded shadow hover:drop-shadow-lg transition text-sm p-1' id='lastname' type='text' name='Lastname'/>
            </div>
            <div className='w-2/3 flex flex-col'>
                <label htmlFor='birthdate'>Fecha de nacimiento</label>
                <input className='rounded shadow hover:drop-shadow-lg transition text-sm p-1' id='birthdate' type='date' name='fecha_nacimiento'/>
            </div>
            <div className='w-2/3 flex flex-col'>
                <label htmlFor='phone'>Telefono</label>
                <input className='rounded shadow hover:drop-shadow-lg transition text-sm p-1' id='phone' type='number' name='telefono'/>
            </div>
            <div className='w-2/3 flex flex-col'>
                <label htmlFor='city'>Ciudad</label>
                <input className='rounded shadow hover:drop-shadow-lg transition text-sm p-1' id='city' type='text' name='ciudad'/>
            </div>
            <div className='w-2/3 flex flex-col'>
                <label htmlFor='gender'>Genero</label>
                <select id='gender'>
                    <option value="Mujer">Mujer</option>
                    <option value="Hombre">Hombre</option>
                    <option value="Otro">Otro</option>
                </select>
            </div>
            <div className='w-2/3 flex flex-col'>
                <label htmlFor='gender'>Redes Sociales</label>
                {
                    socialMedias.map((element :SocialMedia | null , index : number)=>
                    <div>
                        <label htmlFor={`name${index+1}`}>Nombre de la red social #{index+1}</label>
                        <select id={`name${index+1}`}>
                            <option selected={element?.nombre === "instagram"} value="instagram">Instagram</option>
                            <option selected={element?.nombre === "facebook"} value="facebook">Facebook</option>
                            <option selected={element?.nombre === "tiktok"} value="tiktok">Tiktok</option>
                            <option selected={element?.nombre === "twitter"} value="twitter">Twitter</option>
                            <option selected={element?.nombre === "linkedin"} value="linkedin">Linkedin</option>
                            <option selected={element?.nombre === "snapchat"} value="snapchat">Snapchat</option>
                            <option selected={element?.nombre === "youtube"} value="youtube">Youtube</option>
                            <option selected={element?.nombre === "whatsapp"} value="whatsapp">Whatsapp</option>
                        </select>
                        <label htmlFor={`name${index+1}`}>Link de la red social #{index+1}</label>
                        <input id={`name${index+1}`} name='url' />
                    </div>)
                }
                <button onClick={()=>setSocialMedias([... socialMedias, null])}>Añadir</button>
            </div>
        </form>
    </main>
    )
}

export default ChangeOrganizerProfile