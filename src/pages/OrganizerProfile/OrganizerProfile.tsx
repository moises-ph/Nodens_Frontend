import { useState, useEffect, useRef } from "react";
import { OrganizerT } from "../../types";
import { EditOrganizer, Loading } from "../../components";
import { clientHttp } from "../../services/client";
import { profilePic, renewToken } from "../../services";
import Swal from "sweetalert2";
import DefaultUserImg from "../../assets/DefaultUser.webp";
import { BsFacebook, BsInstagram, BsLinkedin, BsSnapchat, BsTwitter, BsWhatsapp, BsYoutube } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoIosAddCircleOutline } from "react-icons/io";
import { ImCancelCircle } from "react-icons/im";
import banner from "../../images/banner.png"

const OrganizerProfile = () => {
  const imageInput = useRef<HTMLInputElement>(null);
  const SocialMediaName = useRef<HTMLSelectElement>(null);
  const SocialMediaUrl = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState<string>();
  const [organizer, setOrganizer] = useState<OrganizerT>();
  const [editProfileMode, setEditMode] = useState<boolean>(false);
  const [socialMedias, setSocials] = useState<{nombre:string, url: string}[]>([]);
  const [addingSocial, setAddingSocial] = useState<boolean>(false);
  const [willSendCompany, setSendCompany] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

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


  const deleteSocial = (e : any) => {
    e.preventDefault();+
    setSocials(lastSocials => lastSocials.filter((social,i) => i != e.target.parentNode.value))
  }

  const addSocialMedia = (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setSocials([... socialMedias, {nombre : SocialMediaName.current!.value, url : SocialMediaUrl.current!.value}]);
    setAddingSocial(false);
  }

  const getOrganizer = async () => {
    clientHttp().get(`/organizers/Organizer`)
      .then(res => {console.log(res);setOrganizer(res.data)})  
      .catch( async (err) => {
        if(err.response.status === 401){
          await renewToken();
          getOrganizer();
        }
      });
  }

  const getOrganizerEmail = () => {
    clientHttp().get(`/auth/api/organizer/${organizer?.IdAuth}`)
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

  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form : FormData = new FormData(e.target as HTMLFormElement);
    const entries : any = Object.fromEntries(form);
    console.log(entries);
    let updatedOrganizer : OrganizerT = {
      redes_sociales : socialMedias,
      Name : entries.Name.length > 0 ? entries.Name : organizer!.Name,
      Lastname : entries.Lastname.length > 0 ? entries.Lastname : organizer!.Lastname,
      fecha_nacimiento : entries.fecha_nacimiento,
      telefono : entries.telefono.toString().length > 0 ? entries.telefono : organizer!.telefono,
      nombre_empresa : willSendCompany ? entries.nombre_empresa.length > 0 ? entries.nombre_empresa : organizer!.nombre_empresa : "",
      descripcion_empresa : willSendCompany ? entries.descripcion_empresa.length > 0 ? entries.descripcion_empresa : organizer!.descripcion_empresa : "",
      ciudad : entries.ciudad.length > 0 ? entries.ciudad : organizer!.ciudad,
      pais : organizer!.pais,
      genero : entries.genero.length > 0 ? entries.genero : organizer!.genero,
      url_foto_perfil : organizer!.url_foto_perfil
    };

    clientHttp().put('/organizers/Organizer',updatedOrganizer)
      .then(res => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: res.data.message,
          showConfirmButton: false,
          timer: 1000
        });
        getOrganizer();
        setEditMode(false);
      })
      .catch(async err => {
        console.log(err);
        if(err.response.status === 401){
          await renewToken();
          getOrganizer();
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

  const handleProfile = async () => {
    setLoading(true);
    await profilePic("/organizers/Organizer/profile",(imageInput.current!.files));
    getOrganizer();
  }

  useEffect(()=> {    
    getOrganizer();
    getOrganizerEmail();
  }, [])

  useEffect(()=> {
    if(organizer != null) {
      setSocials(organizer.redes_sociales);
      setSendCompany(hasCompany());
      setLoading(false)
    }
  },[organizer])

  if (!organizer) return <Loading />
  return (
    <>
      <EditOrganizer editProfileMode={editProfileMode} organizer={organizer} setEditMode={setEditMode} handleSubmit={handleSubmit}/>
      <main className="flex flex-col md:items-center md:justify-evenly w-full h-full bg-slate-200 pb-3 md:pt-5">
      {loading && <div className={`absolute right-4 ${editProfileMode ? '' : 'md:right-[28rem]'} top-[4.25rem] md:top-[4.75rem] flex items-center justify-center`}><div className='w-8 h-8 rounded-[50%] [border-left-style:solid] border-[11.2px] border-double border-[#474bff] animate-spin'></div></div>}
        <section className="slide-top min-h-screen flex w-full md:w-2/5 flex-col pt-4 gap-4 transition "> 
          <div className=" flex flex-col gap-1 items-start pt-4">
            <div className="flex flex-col gap-1 items-start my-4  z-10 bg-slate-100 w-full border border-slate-400 rounded-lg">
              <img src={banner} alt="" className="absolute z-0 h-44 md:w-[99.5%]"/>
              <input onChange={handleProfile} type="file" className="hidden" ref={imageInput}/>
              <div className="flex justify-between w-full px-2 items-center z-10 pt-2">
                <img src={organizer.url_foto_perfil || DefaultUserImg} loading="lazy" alt="Organizer Profile" className="rounded-full h-40 w-40 object-cover mb-1 border-2 border-slate-800 cursor-pointer"  />
                <button onClick={()=> setEditMode(!editProfileMode)} className={`rounded-full p-2  h-1/6 hover:scale-110 transition`}><FiEdit className="w-7 h-7"/></button>
              </div>
              <div className="flex flex-col  text-slate-800 bg-slate-200 rounded-lg w-full p-2">
                <h1 className=" text-3xl organizerNameFont "><span className="font-semibold">{organizer.Name}</span> <span className="organizerNameFont font-semibold">{organizer.Lastname}</span></h1>
                <h3 className="font-semibold text-blue-500">{email}</h3>
                <p className="font-light">{organizer.ciudad}, {organizer.pais} ° {organizer.telefono}</p>
              </div>
            </div>
          </div>

          { hasCompany() &&
            <div className="bg-slate-200 h-fit w-full border border-slate-500 rounded-lg px-2 py-4">
              <span className="font-semibold text-gray-900 text-base">Empresa:</span> 
              <h2 className="font-light text-2xl">{organizer.nombre_empresa}</h2>
              <p className="font-light w-full ">{organizer.descripcion_empresa}</p>
            </div>
          }

          { organizer.redes_sociales.length > 0 &&
          <div className="bg-slate-200 rounded-2xl p-3 flex flex-col w-full gap-2 border border-slate-400 ">
            <h2 className="font-semibold">Redes Sociales:</h2>
            <div className="flex justify-evenly flex-wrap place-items-center gap-3">
            {organizer.redes_sociales.map((socialmedia, index) => {
              return(
                <div key={index} className="flex flex-col items-center hover:scale-110 transition w-fit">
                  <a href={socialmedia.url} className="text-lg hover:underline w-fit">{SocialMedias[socialmedia.nombre.toLowerCase()]}</a>
                  <span className="text-xs text-slate-50">{socialmedia.nombre}</span>
                </div>
              )
            })}
            </div>
          </div>
          }
        </section>
      </main>
    </>
  );
};

export default OrganizerProfile;
