import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MusicianT } from '../../types';
import { clientHttp } from '../../services/client';
import { renewToken } from '../../services';
import { Loading } from '../../components';
import DefaultUserImg from "../../assets/DefaultUser.webp";
import { BsFacebook, BsInstagram, BsLinkedin, BsSnapchat, BsTwitter, BsWhatsapp, BsYoutube } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

const SingleMusician = () => {
  const {id} = useParams();
  const [musician, setMusuician] = useState<MusicianT>();
  const [email, setEmail] = useState<string>();

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
 const getUserEmail = async () => {
    await renewToken();
    clientHttp().get(`/auth/api/user/${musician?.IdAuth}`)
      .then(res => setEmail(res.data.email))
      .catch(err =>{
        if(err.response.status === 401) return renewToken()
      })
  }
  const getMusician = async () => {
    clientHttp().get(`/musicians/musician/${id}`)
      .then(res => {
        console.log(res);
        setMusuician(res.data);
      })
      .catch(err=> console.log(err))
  }

  useEffect(()=> {
    getMusician();
    getUserEmail();
  }, [])
  if(!musician) return <Loading />
  return (
    <article className="w-full flex justify-center">
      <section className="slide-top min-h-screen flex w-full md:w-1/2 flex-col items-center gap-4 transition"> 
          <div className=" flex flex-col gap-1 items-center px-4">
            <div className="min-w-[70%] h-[300px] shadow-2xl absolute bg-[#E15D12] bg-opacity-100 md:w-1/3 z-[1] rounded-b-full" />
            <div className="flex flex-col gap-1 items-center my-4 p-4 z-10">
              <img src={musician.url_foto_perfil || DefaultUserImg} loading="lazy" alt="user Profile" className="rounded-full h-40 w-40 object-cover mb-1" />
              <div className="flex flex-col items-center text-slate-50">
                <h1 className="text-center text-3xl organizerNameFont"><span className="font-semibold">{musician.Name}</span> <span className="organizerNameFont font-thin">{musician.Lastname}</span></h1>
                <h3 className="font-light">{email}</h3>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl drop-shadow-xl grid grid-cols-2 grid-rows-2 w-4/5 gap-3 grid-flow-col-dense place-content-center md:w-2/5 p-3">
            <div className="w-full h-11 md:flex md:flex-col md:items-center organizerNameFont mb-2"><span className="font-semibold text-gray-900">Genero:</span> <span className="font-extralight text-gray-700">{musician.genero}</span></div>
            <div className="w-full h-11 md:flex md:flex-col md:items-center organizerNameFont mb-2"><span className="font-semibold text-gray-900">Telefono:</span> <span className="font-extralight text-gray-700">{musician.telefono}</span></div>
            <div className="w-full h-11 md:flex md:flex-col md:items-center organizerNameFont"><span className="font-semibold text-gray-900">Edad:</span> <span className="font-extralight text-gray-700">{new Date().getFullYear() - new Date(musician.fecha_nacimiento).getFullYear()}</span></div>
            <div className="w-full h-11 md:flex md:flex-col md:items-center organizerNameFont"><span className="font-semibold text-gray-900">Ciudad:</span> <span className="font-extralight text-gray-700">{musician.ciudad}</span></div>
          </div>
          <div className="bg-white rounded-2xl drop-shadow-xl p-3 flex flex-col w-4/5 md:w-2/3 gap-2">
            <h2 className="font-semibold">Redes Sociales:</h2>
            <div className="flex justify-evenly flex-wrap place-items-center gap-3">
            {musician.redes_sociales.map((socialmedia, index) => {
              return(
                <div key={index} className="flex flex-col items-center hover:scale-110 transition w-fit">
                  <a href={socialmedia.url} className="text-lg hover:underline w-fit">{SocialMedias[socialmedia.nombre.toLowerCase()]}</a>
                  <span className="text-xs text-slate-50">{socialmedia.nombre}</span>
                </div>
              )
            })}
            </div>
          </div>
        </section>
      </article>
 
  )
}

export default SingleMusician
