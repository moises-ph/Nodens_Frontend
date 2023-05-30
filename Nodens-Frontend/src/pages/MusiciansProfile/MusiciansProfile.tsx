import { useState, useEffect, useRef } from "react";
import { MusicianT, InstrumentoT } from "../../types";
import { Loading } from "../../components";
import { clientHttp } from "../../services/client";
import { profilePic, renewToken } from "../../services";
import Swal from "sweetalert2";
import DefaultUserImg from "../../assets/DefaultUser.webp";
import { BsFacebook, BsInstagram, BsLinkedin, BsSnapchat, BsTwitter, BsWhatsapp, BsYoutube } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { CgProfile } from "react-icons/cg"
import { IoIosAddCircleOutline } from "react-icons/io";
import { ImCancelCircle } from "react-icons/im";
import { RiDeleteBinLine } from "react-icons/ri";
import { GrFormClose } from "react-icons/gr";

const MusiciansProfile = () => {
  const descripcion = useRef<HTMLTextAreaElement>(null);
  const GeneroRef = useRef<HTMLInputElement>(null);
  const nivelGenRef = useRef<HTMLSelectElement>(null);
  const imageInput = useRef<HTMLInputElement>(null);
  const instrumentRef = useRef<HTMLInputElement>(null);
  const nivelRef = useRef<HTMLSelectElement>(null);
  const [instrumentos, setInstrumentos] =useState<InstrumentoT[]>([]);
  const [generos, setGeneros] =useState<string[]>([]);
  const [email, setEmail] = useState<string>();
  const id = localStorage.getItem("musicianId")
  const [user, setUser] = useState<MusicianT>();
  const SocialMediaName = useRef<HTMLSelectElement>(null);
  const SocialMediaUrl = useRef<HTMLInputElement>(null);
  const [editProfileMode, setEditMode] = useState<boolean>(false);
  const [socialMedias, setSocials] = useState<{nombre:string, url: string}[]>([]);
  const [addingSocial, setAddingSocial] = useState<boolean>(false);
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

  const deleteSocial = (e : any) => {
    e.preventDefault();+
    setSocials(lastSocials => lastSocials.filter((social,i) => i != e.target.parentNode.value))
  }

  const addSocialMedia = (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setSocials([... socialMedias, {nombre : SocialMediaName.current!.value, url : SocialMediaUrl.current!.value}]);
    setAddingSocial(false);
  }

  const getUser = () => {
    renewToken();
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
      url_video_presentacion: [],
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

  const deleteInstrument = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>,i:number) => {
    e.preventDefault();
    setInstrumentos(instrumentos.filter((e, index) => index != i))
  }

  const addInstrument = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if(instrumentRef.current!.value && nivelRef.current!.value){
      if(!instrumentos.find(e => e.nombre === instrumentRef.current!.value)){
        setInstrumentos([...instrumentos, 
          {nombre: instrumentRef.current!.value, nivel: nivelRef.current!.value}]
        )
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Por favor ingresa un instrumento diferente',
          timer: 3000  
        })  
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor ingresa un instrumento y un nivel de experiencia',
        timer: 3000  
      })
    }
  }

  const deleteGen = (e: any,i:number) => {
    e.preventDefault();
    setGeneros(generos.filter((e, index) => index != i))
  }

  const addGen = (e: any) => {
    e.preventDefault();
    if(GeneroRef.current!.value){
      if(!generos.find(e => e === GeneroRef.current!.value)){
        setGeneros([...generos, GeneroRef.current!.value])
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Por favor ingresa un Genero diferente',
          timer: 3000  
        })  
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor ingresa un Genero Musical',
        timer: 3000  
      })
    }
  }

  const handleProfile = async () => {
    setLoading(true);
    await profilePic("/musicians/musician/profile",(imageInput.current!.files));
    getUser();
    setLoading(false);
  }

  const cancelProfileEdition = (e : any) => {
    e.preventDefault();
    setSocials(user!.redes_sociales);
    setEditMode(false);
  }

  useEffect(()=> {
    getUser();
    getUserEmail();
  }, [])
  if(!user) return <Loading />; 
  return (
    <>
      <main className="flex flex-col items-start md:flex-row justify-evenly w-full h-full bg-zinc-200 pb-3 md:pt-5">
      {loading && <div className={`absolute right-4 ${editProfileMode ? '' : 'md:right-[28rem]'} top-[4.25rem] md:top-[4.75rem] flex items-center justify-center`}><div className='w-8 h-8 rounded-[50%] [border-left-style:solid] border-[11.2px] border-double border-[#474bff] animate-spin'></div></div>}
        <section className="slide-top min-h-screen flex w-full md:w-1/2 flex-col items-center gap-4 transition"> 
          <div className=" flex flex-col gap-1 items-center px-4">
            <div className="min-w-[70%] h-[300px] shadow-lg absolute bg-slate-700 bg-opacity-30 md:w-1/3 z-[1] rounded-b-full" />
            <div className="flex flex-col gap-1 items-center my-4 p-4 z-10">
              <input onChange={handleProfile} type="file" className="hidden" ref={imageInput}/>
              <img src={user.url_foto_perfil || DefaultUserImg} loading="lazy" alt="user Profile" className="rounded-full h-40 w-40 object-cover mb-1" />
              <div className="flex flex-col items-center">
                <h1 className="text-center text-3xl organizerNameFont"><span className="font-semibold">{user.Name}</span> <span className="organizerNameFont font-thin">{user.Lastname}</span></h1>
                <h3 className="font-light">{email}</h3>
              </div>
              <div className="flex w-full items-center justify-around">
                <button onClick={()=> setEditMode(!editProfileMode)} className={`${editProfileMode ? 'bg-blue-500' : 'bg-slate-300'} rounded p-1 shadow hover:scale-110 hover:shadow-lg transition`}><FiEdit className="w-7 h-7"/></button>
                <button onClick={()=> imageInput.current!.click() } className="bg-slate-300 rounded p-1 shadow hover:scale-110 hover:shadow-lg transition"><CgProfile className="w-7 h-7"/> </button>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl drop-shadow-xl grid grid-cols-2 grid-rows-2 w-3/5 gap-3 grid-flow-col-dense md:w-2/5 p-3">
            <div className="w-full md:flex md:flex-col md:items-center organizerNameFont mb-2"><span className="font-semibold text-gray-900">Genero:</span> <span className="font-extralight text-gray-700">{user.genero}</span></div>
            <div className="w-full md:flex md:flex-col md:items-center organizerNameFont mb-2"><span className="font-semibold text-gray-900">Telefono:</span> <span className="font-extralight text-gray-700">{user.telefono}</span></div>
            <div className="w-full md:flex md:flex-col md:items-center organizerNameFont"><span className="font-semibold text-gray-900">Edad:</span> <span className="font-extralight text-gray-700">{new Date().getFullYear() - new Date(user.fecha_nacimiento).getFullYear()}</span></div>
            <div className="w-full md:flex md:flex-col md:items-center organizerNameFont"><span className="font-semibold text-gray-900">Ciudad:</span> <span className="font-extralight text-gray-700">{user.ciudad}</span></div>
          </div>
          <div className="bg-white rounded-2xl drop-shadow-xl p-3 flex flex-col w-4/5 md:w-2/3 gap-2">
            <h2 className="font-semibold">Redes Sociales:</h2>
            <div className="flex justify-evenly flex-wrap place-items-center gap-3">
            {user.redes_sociales.map((socialmedia, index) => {
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
          <section className="md:w-1/2 w-full min-h-screen md:pt-8 pt-4 flex justify-center overflow-scroll">
            <form onSubmit={handleSubmit} className='slide-top h-fit bg-transparent p-2 w-5/6 md:w-2/3 gap-3 rounded flex flex-col items-center'>
              <h2 className='text-3xl my-2 text-black font-semibold'>Edita tu información Personal</h2>
              <div className="w-5/6 shadow hover:drop-shadow-2xl transition md:w-2/3 flex flex-col items-center bg-blue-800 p-4 rounded-lg">
                <div className='flex flex-col w-full'>
                    <label className='text-slate-100 font-semibold ' htmlFor='name'>Nombre</label>
                    <input placeholder={user?.Name} className='rounded shadow hover:drop-shadow-lg transition text-sm p-1' id='name' type='text' name='Name'/>
                </div>
                <div className='flex flex-col w-full'>
                    <label className='text-slate-100 font-semibold ' htmlFor='lastname'>Apellido</label>
                    <input placeholder={user?.Lastname} className='rounded shadow hover:drop-shadow-lg transition text-sm p-1' id='lastname' type='text' name='Lastname'/>
                </div>
              </div>
              <div className="w-5/6 shadow hover:drop-shadow-2xl transition md:w-2/3 flex flex-col items-center bg-blue-800 p-4 rounded-lg">
                <div className='w-full flex flex-col'>
                    <label className='text-slate-100 font-semibold ' htmlFor='phone'>Telefono</label>
                    <input placeholder={user?.telefono as string} className='rounded shadow hover:drop-shadow-lg transition text-sm p-1' id='phone' type='number' name='telefono'/>
                </div>
                <div className='w-full flex flex-col'>
                    <label className='text-slate-100 font-semibold ' htmlFor='city'>Ciudad</label>
                    <input placeholder={user?.ciudad} className='rounded shadow hover:drop-shadow-lg transition text-sm p-1' id='city' type='text' name='ciudad'/>
                </div>
              </div>
              <div className="w-5/6 shadow hover:drop-shadow-2xl transition md:w-2/3 flex flex-col items-center bg-blue-800 p-4 rounded-lg">
                <div className="w-full flex flex-col gap-2">
                  <label className='text-slate-100 font-semibold ' htmlFor='phone'>Instrumentos</label>
                  <div className="w-full flex flex-col gap-2">
                    {
                      instrumentos.map((ins, i)=> {
                        return <span className="w-full flex justify-between items-center bg-blue-400 rounded-s rounded-md" key={i}>{ins.nombre} <GrFormClose onClick={(e)=>deleteInstrument(e, i)}/> </span>
                      })
                    }
                  </div>
                  <input ref={instrumentRef} placeholder="Instrumento" className='rounded shadow hover:drop-shadow-lg transition text-sm p-1' type='text'/>
                  <select ref={nivelRef} placeholder="Nivel" className='rounded shadow hover:drop-shadow-lg transition text-sm p-1'>
                    <optgroup>
                      <option value="" >Nivel de Experiencia</option>
                      <option value="Menos de 1 año">Menos de 1 año</option>
                      <option value="Mas de 1 año">Mas de 1 año</option>
                      <option value="Mas de 2 años">Mas de 2 años</option>
                      <option value="Mas de 5 años">Mas de 5 años</option>
                    </optgroup>
                  </select>
                  <button onClick={(e)=>addInstrument(e)}>Añadir</button>
                </div>  
              </div>

               <div className="w-5/6 shadow hover:drop-shadow-2xl transition md:w-2/3 flex flex-col items-center bg-blue-800 p-4 rounded-lg">
                <div className="w-full flex flex-col gap-2">
                  <label className='text-slate-100 font-semibold ' htmlFor='phone'>Generos Musicales</label>
                  <div className="w-full flex flex-col gap-2">
                    {
                      generos.map((gen, i)=> {
                        return <span className="w-full flex justify-between items-center bg-blue-400 rounded-s rounded-md" key={i}>{gen} <GrFormClose onClick={(e)=>deleteGen(e, i)}/> </span>
                      })
                    }
                  </div>
                  <input ref={GeneroRef} placeholder="Genero" className='rounded shadow hover:drop-shadow-lg transition text-sm p-1' type='text'/>
                  <select ref={nivelGenRef} placeholder="Nivel" className='rounded shadow hover:drop-shadow-lg transition text-sm p-1'>
                    <optgroup>
                      <option value="" >Nivel de Experiencia</option>
                      <option value="Menos de 1 año">Menos de 1 año</option>
                      <option value="Mas de 1 año">Mas de 1 año</option>
                      <option value="Mas de 2 años">Mas de 2 años</option>
                      <option value="Mas de 5 años">Mas de 5 años</option>
                    </optgroup>
                  </select>
                  <button onClick={(e)=>addGen(e)}>Añadir</button>
                </div>  
              </div>


              <div className="w-5/6 shadow hover:drop-shadow-2xl transition md:w-2/3 flex flex-col items-center bg-blue-800 p-4 rounded-lg">
                <div className='w-full flex flex-col'>
                    <label className='text-slate-100 font-semibold ' htmlFor='phone'>Experiencia</label>
                    <select placeholder={user?.experiencia as string} className='rounded shadow hover:drop-shadow-lg transition text-sm p-1' id='experiencia'name='experiencia'>
                      <optgroup>
                        <option value=""></option>
                        <option value="Sin Experiencia">Sin Experiencia</option>
                        <option value="Menos de 1 año">Menos de 1 año</option>
                        <option value="Mas de 1 año">Mas de 1 año</option>
                        <option value="Mas de 2 años">Mas de 2 años</option>
                        <option value="Mas de 3 años">Mas de 3 años</option>
                        <option value="Mas de 5 años">Mas de 5 años</option>
                        <option value="Mas de 7 años">Mas de 7 años</option>
                        <option value="Mas de 10 años">Mas de 10 años</option>
                      </optgroup>
                    </select>
                </div>
                <div className='w-full flex flex-col'>
                    <label className='text-slate-100 font-semibold ' htmlFor='descripcion'>Descripcion</label>
                    <textarea placeholder={user?.descripcion} ref={descripcion} className='rounded shadow hover:drop-shadow-lg transition text-sm p-1' id='descripcion' name='experiencia'/>
                </div>
              </div>
              
              <div className="w-5/6 shadow hover:drop-shadow-2xl transition md:w-2/3 flex flex-col items-center bg-blue-800 p-4 rounded-lg">
                <div className='w-full flex flex-col'>
                    <label className='text-slate-100 font-semibold ' htmlFor='birthdate'>Fecha de nacimiento</label>
                    <input defaultValue={user!.fecha_nacimiento.toString()} className='rounded shadow hover:drop-shadow-lg transition text-sm p-1' id='birthdate' type='date' name='fecha_nacimiento'/>
                </div>
                <div className='w-full flex flex-col'>
                    <label className='text-slate-100 font-semibold ' htmlFor='gender'>Genero</label>
                    <select name="genero" className='rounded shadow hover:drop-shadow-lg transition text-sm p-1' id='gender'>
                        <option selected={user?.genero.toLowerCase() === "mujer"} value="Mujer">Mujer</option>
                        <option selected={user?.genero.toLowerCase() === "hombre"} value="Hombre">Hombre</option>
                        <option selected={user?.genero.toLowerCase() === "otro"} value="Otro">Otro</option>
                    </select>
                </div>
              </div>
              <div className='w-5/6 shadow hover:drop-shadow-2xl transition md:w-2/3 flex flex-col items-center bg-blue-800 p-4 rounded-lg'>
                  <div className="flex items-center justify-center w-fit gap-1">
                    <span className='text-slate-100 font-semibold'>Redes Sociales</span>
                    <button className="h-3 w-3 rounded-full hover:scale-110 transition" onClick={(e) => {e.preventDefault(); setAddingSocial(!addingSocial)}}>{addingSocial ?  <ImCancelCircle className="text-red-600" /> : <IoIosAddCircleOutline className="text-white" />}</button>
                  </div>
                  <div className="flex justify-evenly content-start p-2 flex-wrap gap-3 max-w-full">
                  {
                      socialMedias.map((element :{nombre:string, url: string} | null , index : number)=>
                      <div className='w-24 flex flex-col gap-1 items-center justify-center p-2 bg-blue-200 rounded shadow-xl ' key={index}>
                          <button className='flex flex-col items-center hover:scale-110 transition'>{SocialMedias[element?.nombre.toLocaleLowerCase() as string]} <span>{element?.nombre}</span></button>
                          <button onClick={deleteSocial} value={index} className='hover:scale-110 transition hover:text-white hover:bg-red-500 rounded-full w-5 h-5 flex justify-center items-center bg-transparent text-red-500'><RiDeleteBinLine /></button>
                      </div>)
                  }
                  </div>
                  {
                    addingSocial &&
                    <div className="flex flex-col items-center p-4 w-full gap-2">
                    <div className="w-full flex flex-col">
                      <label className="text-slate-100 font-semibold" htmlFor="socialname">Nombre de la Red Social</label>
                      <select defaultValue={""} ref={SocialMediaName} className='rounded shadow hover:drop-shadow-lg transition text-sm p-1' id="socialname">
                        <option selected>Selecciona una</option>
                        <option value="instagram">Instagram</option>
                        <option value="facebook">Facebook</option>
                        <option value="youtube">Youtube</option>
                        <option value="linkedin">Linkedin</option>
                        <option value="snapchat">Snapchat</option>
                        <option value="tiktok">Tiktok</option>
                        <option value="twitter">Twitter</option>
                        <option value="whatsapp">Whatsapp</option>
                      </select>
                    </div>
                    <div className="w-full">
                      <label className="text-slate-100 font-semibold" htmlFor="socialurl">Url de la Red Social</label>
                      <input ref={SocialMediaUrl} className='w-full rounded shadow hover:drop-shadow-lg transition text-sm p-1' id="socialurl" placeholder="Ingresa el link de la red Social" type="url"  />
                    </div>
                    <button className="p-2 bg-blue-600 text-slate-100 font-semibold rounded-xl shadow-xl hover:drop-shadow-xl hover:scale-105 transition " onClick={addSocialMedia}>Añadir</button>
                  </div>
                  }
              </div>
              <input type="submit" className="p-4 bg-blue-600 text-slate-100 font-semibold rounded-xl shadow-xl hover:drop-shadow-xl hover:scale-105 transition " value='Actualizar Perfil'/>
              <button onClick={cancelProfileEdition} type="button" className="p-4 flex items-center justify-center gap-3 bg-red-600 text-slate-100 font-semibold rounded-xl shadow-xl hover:drop-shadow-xl hover:scale-105 transition ">Cancelar <ImCancelCircle className="w-5 h-5" /></button>
          </form>
          </section>
        </>}
      </main>
    </>
  );
};

export default MusiciansProfile;
