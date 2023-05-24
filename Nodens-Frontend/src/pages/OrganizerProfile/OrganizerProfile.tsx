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
        if(err.response.status === 401) return renewToken()
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: err.data.message,
          showConfirmButton: false,
          timer: 1000
        });
      })
  }

  const hasCompany = () : boolean => organizer!.nombre_empresa.length > 0 && organizer!.descripcion_empresa.length > 0

  const hasCompanyLogo = () => organizer!.url_logo != null

  const handleProfile = async () => {
    await profilePic("/organizers/Organizer/profile",(imageInput.current!.files));
    getOrganizer();
  }

  useEffect(()=> {    
    // setOrganizer({
    //   Name: "Moises",
    //   Lastname: "Pineda",
    //   fecha_nacimiento: "2005-01-01",
    //   telefono: "123456789",
    //   nombre_empresa: "Si",
    //   descripcion_empresa: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam amet asperiores eum, voluptatum esse saepe maxime, sapiente perferendis dolor dicta animi cum hic sed reprehenderit eos quas rem ratione officia",
    //   pais: "Colombia",
    //   ciudad: "Armenia",
    //   url_foto_perfil: "https://res.cloudinary.com/dx9vdom9p/image/upload/v1684541629/profileOrg7.jpg",
    //   url_logo : "",
    //   genero: "Hombre",
    //   redes_sociales: [
    //     {
    //       nombre: "Facebook",
    //       url: "facebook.com"
    //     },
    //     {
    //       nombre: "Instagram",
    //       url: "facebook.com"
    //     },
    //     {
    //       nombre: "TikTok",
    //       url: "facebook.com"
    //     },
    //     {
    //       nombre: "Twitter",
    //       url: "facebook.com"
    //     },
    //     {
    //       nombre: "Linkedin",
    //       url: "facebook.com"
    //     },
    //     {
    //       nombre: "Snapchat",
    //       url: "facebook.com"
    //     },
    //     {
    //       nombre: "Youtube",
    //       url: "facebook.com"
    //     },
    //     {
    //       nombre: "Whatsapp",
    //       url: "facebook.com"
    //     }
    //   ],
    //   IdAuth: 7
    // });
    // setEmail("mois.mp8@gmail.com");
    getOrganizer();
    getOrganizerEmail();
  }, [])

  useEffect(() => {
    console.log(image);
  }, [image])

  if (!organizer) return <Loading />
  return (
    <>
      <main className="min-h-screen bg-zinc-200 flex flex-col items-center gap-4"> 
        <section className=" flex flex-col gap-1 items-center px-4">
          <div className="w-full h-[300px] shadow-lg absolute bg-slate-700 bg-opacity-30 md:w-1/3 z-[1] rounded-b-full"></div>
          <div className="flex flex-col gap-1 items-center my-4 p-4 z-10">
            <img src={organizer.url_foto_perfil || DefaultUserImg} loading="lazy" alt="Organizer Profile" className="rounded-full h-40 w-40 object-cover mb-1" />
            <div className="flex flex-col items-center">
              <h1 className="text-center text-3xl organizerNameFont"><span className="font-semibold">{organizer.Name}</span> <span className="organizerNameFont font-thin">{organizer.Lastname}</span></h1>
              <h3 className="font-light">{email}</h3>
            </div>
            <div className="flex w-full items-center justify-around">
              <Link to="/changeProfile" className="bg-slate-300 rounded p-1 shadow hover:scale-110 hover:shadow-lg transition"><FiEdit className="w-7 h-7"/></Link>
              <button className="bg-slate-300 rounded p-1 shadow hover:scale-110 hover:shadow-lg transition"><CgProfile className="w-7 h-7"/> </button>
            </div>
          </div>
        </section>
        <section className="bg-white rounded-2xl drop-shadow-xl grid grid-cols-2 grid-rows-2 w-3/5 gap-3 grid-flow-col-dense md:w-1/5 p-3">
          <div className="w-full md:flex md:flex-col md:items-center organizerNameFont mb-2"><span className="font-semibold text-gray-900">Genero:</span> <span className="font-extralight text-gray-700">{organizer.genero}</span></div>
          <div className="w-full md:flex md:flex-col md:items-center organizerNameFont mb-2"><span className="font-semibold text-gray-900">Telefono:</span> <span className="font-extralight text-gray-700">{organizer.telefono}</span></div>
          <div className="w-full md:flex md:flex-col md:items-center organizerNameFont"><span className="font-semibold text-gray-900">Edad:</span> <span className="font-extralight text-gray-700">{new Date().getFullYear() - new Date(organizer.fecha_nacimiento).getFullYear() - 1}</span></div>
          <div className="w-full md:flex md:flex-col md:items-center organizerNameFont"><span className="font-semibold text-gray-900">Ciudad:</span> <span className="font-extralight text-gray-700">{organizer.ciudad}</span></div>
        </section>
        { hasCompany() &&
          <section className="bg-white rounded-2xl drop-shadow-xl p-4 flex flex-col w-4/5 md:w-1/3">
            <span className="font-semibold text-gray-900 text-base">Empresa:</span> 
            <h2 className="organizerNameFont mb-2 text-2xl">{organizer.nombre_empresa}</h2>
            <p className="text-base">{organizer.descripcion_empresa}</p>
            { hasCompanyLogo() && <img src={organizer.url_logo} alt={`(${organizer.nombre_empresa} logo)`} className="text-sm italic"></img> }
          </section>
        }
        <section className="bg-white rounded-2xl drop-shadow-xl p-3 flex flex-col w-4/5 md:w-1/3 gap-2">
          <h2 className="font-semibold">Redes Sociales:</h2>
          <div className="grid grid-cols-2 place-items-center gap-3">
          {organizer.redes_sociales.map(socialmedia => {
            return(
              <div className="flex flex-col items-center hover:scale-110 transition w-fit">
                <a href={socialmedia.url} className="text-lg hover:underline w-fit">{SocialMedias[socialmedia.nombre.toLowerCase()]}</a>
                <span className="text-xs">{socialmedia.nombre}</span>
              </div>
            )
          })}
          </div>
        </section>
      </main>
    </>
  );
};

export default OrganizerProfile;
