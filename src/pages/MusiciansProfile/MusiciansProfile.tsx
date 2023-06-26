import { useState, useEffect, useRef } from "react";
import { MusicianT, InstrumentoT } from "../../types";
import { Loading, MusicVideos, EditMusician } from "../../components";
import { clientHttp } from "../../services/client";
import { profilePic, renewToken } from "../../services";
import banner from "../../images/banner.png"
import Swal from "sweetalert2";
import DefaultUserImg from "../../assets/DefaultUser.webp";
import { BsFacebook, BsInstagram, BsLinkedin, BsSnapchat, BsTwitter, BsWhatsapp, BsYoutube } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { FcAddImage } from "react-icons/fc";

const MusiciansProfile = () => {
  const [videoOpening, setVideoOpening] = useState<boolean>(false);
  const descripcion = useRef<HTMLTextAreaElement>(null);
  const imageInput = useRef<HTMLInputElement>(null);
  const [instrumentos, setInstrumentos] =useState<InstrumentoT[]>([]);
  const [generos, setGeneros] =useState<string[]>([]);
  const [email, setEmail] = useState<string>();
  const [user, setUser] = useState<MusicianT>();
  const [editProfileMode, setEditMode] = useState<boolean>(false);
  const [socialMedias, setSocials] = useState<{nombre:string, url: string}[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

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

  const getUser = async () => {
    await renewToken();
    clientHttp().get(`/musicians/musician`)
      .then(res => {console.log(res);setUser(res.data)})  
      .catch(err=> console.log(err));
  }

  const getUserEmail = async () => {
    await renewToken();
    clientHttp().get(`/auth/api/user/${user?.IdAuth}`)
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

  const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await renewToken();
    setLoading(true);
    const form : FormData = new FormData(e.target as HTMLFormElement);
    const entries : any = Object.fromEntries(form);
    console.log(entries);
    let updatedMusician : MusicianT = {
      redes_sociales : socialMedias,
      Name : entries.Name.length > 0 ? entries.Name : user!.Name,
      Lastname : entries.Lastname.length > 0 ? entries.Lastname : user!.Lastname,
      fecha_nacimiento : entries.fecha_nacimiento,
      telefono : entries.telefono.toString().length > 0 ? entries.telefono : user!.telefono,
      ciudad : entries.ciudad.length > 0 ? entries.ciudad : user!.ciudad,
      pais : user!.pais,
      educacion: [],
      descripcion: (descripcion.current!.value.length > 0  ? descripcion.current!.value : user?.descripcion as string),
      experiencia: '',
      generosMusicales: (generos.length > 0 ? generos : user?.generosMusicales as string[]),
      instrumentos: instrumentos,
      url_video_presentacion: user!.url_video_presentacion,
      genero : entries.genero.length > 0 ? entries.genero : user!.genero,
      url_foto_perfil : user!.url_foto_perfil
    };

    clientHttp().put('/musicians/musician',updatedMusician)
      .then(res => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: res.data.message,
          showConfirmButton: false,
          timer: 1000
        });
        getUser();
        setEditMode(false);
      })
      .catch(err => {
        console.log(err);
        if(err.response.status === 401){
          renewToken();
          getUser();
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
    await profilePic("/musicians/musician/profile",(imageInput.current!.files));
    getUser();
    setLoading(false);
  }

  useEffect(()=> {
    getUser();
    getUserEmail();
  }, [])
  if(!user) return <Loading />; 
  return (
    <>
      <MusicVideos setVideoOpening={setVideoOpening} videoOpening={videoOpening}/>
      <EditMusician editProfileMode={editProfileMode} handleSubmit={handleSubmit} setEditMode={setEditMode} user={user}/>
      <main className="flex flex-col md:items-center md:justify-evenly w-full h-full bg-slate-200 pb-3 md:pt-5">
        {loading && <div className={`absolute right-4 top-[4.25rem] md:top-[4.75rem] flex items-center justify-center`}><div className='w-8 h-8 rounded-[50%] [border-left-style:solid] border-[11.2px] border-double border-[#474bff] animate-spin'></div></div>}
        <section className={`slide-top min-h-screen flex w-full md:w-2/5 flex-col pt-4 gap-4 transition `}> 
          <div className=" flex flex-col gap-1 items-start pt-4">
            <div className="flex flex-col gap-1 items-start my-4  z-10 bg-slate-100 w-full border border-slate-400 rounded-lg">
              <img src={banner} alt="" className="absolute z-0 h-44 md:w-[99.5%]"/>
              <input onChange={handleProfile} type="file" className="hidden" ref={imageInput}/>
              <div className="flex justify-between w-full px-2 items-center z-10 pt-2">
                <img src={user.url_foto_perfil || DefaultUserImg} onClick={()=> imageInput.current!.click() } loading="lazy" alt="user Profile" className="rounded-full h-40 w-40 object-cover mb-1 border-2 border-slate-800 cursor-pointer" />
                <button onClick={()=> setEditMode(!editProfileMode)} className={`rounded-full p-2  h-1/6 hover:scale-110 transition`}><FiEdit className="w-7 h-7"/></button>
              </div>
              <div className="flex flex-col  text-slate-800 bg-slate-200 rounded-lg w-full p-2">
                <h1 className=" text-3xl organizerNameFont "><span className="font-semibold">{user.Name}</span> <span className="organizerNameFont font-semibold">{user.Lastname}</span></h1>
                <h3 className="font-semibold text-blue-500">{email}</h3>
                <p className="font-light">{user.ciudad}, {user.pais} ° {user.telefono}</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-200 h-fit w-full border border-slate-500 rounded-lg px-2 py-4">
            <h3 className="font-light text-xl">Descripcion</h3>
            <p className="font-light w-full ">{user.descripcion}</p>
          </div>

          <div className="bg-slate-200 h-fit w-full border border-slate-500 rounded-lg px-2 py-4">
            <h3 className="pl-2">Generos Musicales:</h3>
            <div className=" grid gap-2 grid-cols-2 px-2 ">
              {user.generosMusicales.map((gen, i) => {
                return <span key={i} className="rounded-full border w-fit h-fit border-zinc-700 flex justify-center items-center text-zinc-700 ">{gen}</span>
              })}
            </div>
          </div>

          <div className="bg-slate-200 h-fit w-full border border-slate-500 rounded-lg px-2 py-4">
            <h3 className="pl-2">Instrumentos Musicales</h3>
            <div className=" grid gap-2 grid-cols-2 px-2 ">
              {user.instrumentos.map((ins, i) => {
                return <span key={i} className="rounded-full border w-full h-10 border-zinc-700 flex justify-center items-center text-zinc-700 ">{ins.nombre}</span>
              })}
            </div>
          </div>

          <div className="bg-slate-200 rounded-lg drop-shadow-xl border border-slate-400 grid grid-cols-2 grid-rows-2 w-full gap-3 grid-flow-col-dense md:w-2/5 p-3">
            <div className="w-full md:flex md:flex-col md:items-center organizerNameFont mb-2"><span className="font-semibold text-gray-900">Genero:</span> <span className="font-extralight text-gray-700">{user.genero}</span></div>
            <div className="w-full md:flex md:flex-col md:items-center organizerNameFont"><span className="font-semibold text-gray-900">Edad:</span> <span className="font-extralight text-gray-700">{new Date().getFullYear() - new Date(user.fecha_nacimiento).getFullYear()}</span></div>
          </div>

          { user.redes_sociales.length > 0 &&
          <div className="bg-slate-200 rounded-2xl p-3 flex flex-col w-full gap-2 border border-slate-400 ">
            <h2 className="font-semibold">Redes Sociales:</h2>
            <div className="flex justify-evenly flex-wrap place-items-center gap-3">
            {user.redes_sociales.map((socialmedia, index) => {
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
          <div className="bg-slate-200 rounded-lg drop-shadow-xl border border-slate-400 flex flex-col w-full gap-4 p-3">
            <div className="flex justify-between px-4 pt-2">
              <h2 className="text-xl font-semibold ">Videos:</h2>
              <button className="flex gap-2 items-center text-slate-400 text-sm " onClick={()=> setVideoOpening(true)}>Agregar video<FcAddImage /></button>
              
            </div>
            <div className="flex flex-col  gap-4 pb-4 items-center">
              {
                user.url_video_presentacion.map((vid, i)=> {
                  return <video src={vid} controls={true} key={i} autoPlay={false} width={300} height={300} className="w-full"></video>
                })
              }
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default MusiciansProfile;
