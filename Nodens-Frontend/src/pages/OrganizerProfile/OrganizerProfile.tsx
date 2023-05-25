import { useState, useEffect, useRef } from "react";
import { OrganizerT } from "../../types";
import { Loading } from "../../components";
import { clientHttp } from "../../services/client";
import { profilePic, renewToken } from "../../services";
import Swal from "sweetalert2";
import DefaultUserImg from "../../assets/DefaultUser.webp";
import { BsFacebook, BsInstagram, BsLinkedin, BsSnapchat, BsTwitter, BsWhatsapp, BsYoutube } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { CgProfile } from "react-icons/cg"
import { Link } from "react-router-dom";

const OrganizerProfile = () => {
  const imageInput = useRef<HTMLInputElement>(null);
  const image = useRef(null);
  const [email, setEmail] = useState<string>();
  const [organizer, setOrganizer] = useState<OrganizerT>();
  const [editProfileMode, setEditMode] = useState<boolean>(false);
  const id = localStorage.getItem("OrganizerId")

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

  const getOrganizer = () => {
    renewToken();
    clientHttp().get(`/organizers/Organizer`)
      .then(res => {console.log(res);setOrganizer(res.data)})  
      .catch(err=> console.log(err));
  }

  const getOrganizerEmail = () => {
    clientHttp().get(`/auth/api/user/${organizer?.IdAuth}`)
      .then(res => setEmail(res.data.email))
      .catch(err =>{
        if(err.response.status === 401){
          renewToken();
          getOrganizerEmail();
        }
        else{
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: err.data.message,
            showConfirmButton: false,
            timer: 1000
          });
        }
      })
  }

  const hasCompany = () : boolean => organizer!.nombre_empresa.length > 0 && organizer!.descripcion_empresa.length > 0

  const hasCompanyLogo = () => organizer!.url_logo != null

  const handleProfile = async () => {
    await profilePic("/organizers/Organizer/profile",(imageInput.current!.files));
    getOrganizer();
  }

  useEffect(()=> {    
    getOrganizer();
    getOrganizerEmail();
  }, [])

  if (!organizer) return <Loading />
  return (
    <>
      <main className="flex flex-col items-center md:flex-row justify-evenly w-full bg-zinc-200 pb-3">
        <section className="h-screen flex w-full md:w-1/2 mb-4 overflow-scroll flex-col items-center gap-4"> 
          <div className=" flex flex-col gap-1 items-center px-4">
            <div className="w-full h-[300px] shadow-lg absolute bg-slate-700 bg-opacity-30 md:w-1/3 z-[1] rounded-b-full"></div>
            <div className="flex flex-col gap-1 items-center my-4 p-4 z-10">
              <img src={organizer.url_foto_perfil || DefaultUserImg} loading="lazy" alt="Organizer Profile" className="rounded-full h-40 w-40 object-cover mb-1" />
              <div className="flex flex-col items-center">
                <h1 className="text-center text-3xl organizerNameFont"><span className="font-semibold">{organizer.Name}</span> <span className="organizerNameFont font-thin">{organizer.Lastname}</span></h1>
                <h3 className="font-light">{email}</h3>
              </div>
              <div className="flex w-full items-center justify-around">
                <button onClick={()=> setEditMode(!editProfileMode)} className={`${editProfileMode ? 'bg-blue-500' : 'bg-slate-300'} rounded p-1 shadow hover:scale-110 hover:shadow-lg transition`}><FiEdit className="w-7 h-7"/></button>
                <button className="bg-slate-300 rounded p-1 shadow hover:scale-110 hover:shadow-lg transition"><CgProfile className="w-7 h-7"/> </button>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl drop-shadow-xl grid grid-cols-2 grid-rows-2 w-3/5 gap-3 grid-flow-col-dense md:w-2/5 p-3">
            <div className="w-full md:flex md:flex-col md:items-center organizerNameFont mb-2"><span className="font-semibold text-gray-900">Genero:</span> <span className="font-extralight text-gray-700">{organizer.genero}</span></div>
            <div className="w-full md:flex md:flex-col md:items-center organizerNameFont mb-2"><span className="font-semibold text-gray-900">Telefono:</span> <span className="font-extralight text-gray-700">{organizer.telefono}</span></div>
            <div className="w-full md:flex md:flex-col md:items-center organizerNameFont"><span className="font-semibold text-gray-900">Edad:</span> <span className="font-extralight text-gray-700">{new Date().getFullYear() - new Date(organizer.fecha_nacimiento).getFullYear() - 1}</span></div>
            <div className="w-full md:flex md:flex-col md:items-center organizerNameFont"><span className="font-semibold text-gray-900">Ciudad:</span> <span className="font-extralight text-gray-700">{organizer.ciudad}</span></div>
          </div>
          { hasCompany() &&
            <div className="bg-white rounded-2xl drop-shadow-xl p-4 flex flex-col w-4/5 md:w-2/3">
              <span className="font-semibold text-gray-900 text-base">Empresa:</span> 
              <h2 className="organizerNameFont mb-2 text-2xl">{organizer.nombre_empresa}</h2>
              <p className="text-base">{organizer.descripcion_empresa}</p>
              { hasCompanyLogo() && <img src={organizer.url_logo} alt={`(${organizer.nombre_empresa} logo)`} className="text-sm italic"></img> }
            </div>
          }
          <div className="bg-white rounded-2xl drop-shadow-xl p-3 flex flex-col w-4/5 md:w-2/3 gap-2">
            <h2 className="font-semibold">Redes Sociales:</h2>
            <div className="grid grid-cols-2 place-items-center gap-3">
            {organizer.redes_sociales.map((socialmedia, index) => {
              return(
                <div key={index} className="flex flex-col items-center hover:scale-110 transition w-fit">
                  <a href={socialmedia.url} className="text-lg hover:underline w-fit">{SocialMedias[socialmedia.nombre.toLowerCase()]}</a>
                  <span className="text-xs">{socialmedia.nombre}</span>
                </div>
              )
            })}
            </div>
          </div>
        </section>
        {editProfileMode && 
        <>
          <section className="md:w-1/2 w-full flex justify-center overflow-auto">
            <form className=' bg-blue-800 shadow-2xl transition hover:drop-shadow-2xl p-5 w-5/6 md:w-2/3 gap-3 rounded flex flex-col items-center'>
              <h2 className='text-2xl my-2 text-slate-100 font-semibold'>Edita tu información Personal</h2>
              <div className='w-5/6  md:w-2/3 flex flex-col'>
                  <label className='text-slate-100 font-semibold ' htmlFor='name'>Nombre</label>
                  <input placeholder={organizer?.Name} className='rounded shadow hover:drop-shadow-lg transition text-sm p-1' id='name' type='text' name='Name'/>
              </div>
              <div className='w-5/6  md:w-2/3 flex flex-col'>
                  <label className='text-slate-100 font-semibold ' htmlFor='lastname'>Apellido</label>
                  <input placeholder={organizer?.Lastname} className='rounded shadow hover:drop-shadow-lg transition text-sm p-1' id='lastname' type='text' name='Lastname'/>
              </div>
              <div className='w-5/6  md:w-2/3 flex flex-col'>
                  <label className='text-slate-100 font-semibold ' htmlFor='birthdate'>Fecha de nacimiento</label>
                  <input value={organizer?.fecha_nacimiento} className='rounded shadow hover:drop-shadow-lg transition text-sm p-1' id='birthdate' type='date' name='fecha_nacimiento'/>
              </div>
              <div className='w-5/6  md:w-2/3 flex flex-col'>
                  <label className='text-slate-100 font-semibold ' htmlFor='phone'>Telefono</label>
                  <input placeholder={organizer?.telefono as string} className='rounded shadow hover:drop-shadow-lg transition text-sm p-1' id='phone' type='number' name='telefono'/>
              </div>
              <div className='w-5/6  md:w-2/3 flex flex-col'>
                  <label className='text-slate-100 font-semibold ' htmlFor='city'>Ciudad</label>
                  <input placeholder={organizer?.ciudad} className='rounded shadow hover:drop-shadow-lg transition text-sm p-1' id='city' type='text' name='ciudad'/>
              </div>
              <div className='w-5/6  md:w-2/3 flex flex-col'>
                  <label className='text-slate-100 font-semibold ' htmlFor='gender'>Genero</label>
                  <select className='rounded shadow hover:drop-shadow-lg transition text-sm p-1' id='gender'>
                      <option selected={organizer?.genero.toLowerCase() === "mujer"} value="Mujer">Mujer</option>
                      <option selected={organizer?.genero.toLowerCase() === "hombre"} value="Hombre">Hombre</option>
                      <option selected={organizer?.genero.toLowerCase() === "otro"} value="Otro">Otro</option>
                  </select>
              </div>
              {hasCompany() &&
                <>
                  <div className="w-5/6  md:w-2/3 flex flex-col">
                    <label htmlFor="companyname" className="text-slate-100 font-semibold">Nombre de la Empresa</label>
                    <input id="companyname" className='rounded shadow hover:drop-shadow-lg transition text-sm p-1' name="nombre_empresa" placeholder={organizer?.nombre_empresa} />
                  </div>
                  <div className="w-5/6  md:w-2/3 flex flex-col">
                    <label htmlFor="companydescription" className="text-slate-100 font-semibold">Descripción de la Empresa</label>
                    <textarea id="companydescription" className='rounded shadow hover:drop-shadow-lg transition text-sm p-1' placeholder={organizer?.descripcion_empresa} name="descripcion_empresa" />
                  </div>
                </>
              }
              <div className='w-5/6  md:w-2/3 flex flex-col'>
                  <span className='text-slate-100 font-semibold'>Redes Sociales</span>
                  {
                      organizer.redes_sociales.map((element :{nombre:string, url: string} | null , index : number)=>
                      <div className='w-fit flex-col p-2 bg-blue-200 rounded shadow-xl hover:scale-110 transition' key={index}>
                          <button className='w-fit flex flex-col items-center'>{SocialMedias[element?.nombre.toLocaleLowerCase() as string]} <span>{element?.nombre}</span></button>
                      </div>)
                  }
                  <button onClick={(e) => e.preventDefault()}>Añadir</button>
              </div>
          </form>
          </section>
        </>}
      </main>
    </>
  );
};

export default OrganizerProfile;
