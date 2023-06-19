import { BsChevronLeft } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
import { ProfileT } from '../../types';
import { BsFacebook, BsInstagram, BsLinkedin, BsSnapchat, BsTwitter, BsWhatsapp, BsYoutube } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

const Profile = ({
  profile,
  closeModal,
}: {
  profile: ProfileT;
  closeModal: any;
}) => {
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
  return (
    <section className='flex flex-col gap-4'>
      <button onClick={closeModal}>
        <BsChevronLeft />
      </button>
      <div className='flex items-center gap-6'>
        {profile?.url_foto_perfil 
          ? <img src={profile!.url_foto_perfil as string} className="w-32 h-32 object-cover rounded-full" /> 
          : <FaUserCircle className="text-[8rem] ml-2 mt-6"/>
        }
        <div>
          <h1 className="text-4xl">{profile.Name} {profile.Lastname}</h1>
          <p className="text-slate-500">Ubicacion: {profile.pais}, {profile.ciudad}</p>
          <p className="text-slate-500">Telefono: {profile.telefono}</p>
        </div>
      </div>
      <div>
        <h4 className="text-2xl font-semibold">Intrumentos: </h4>
        <ul>
          {
            profile.instrumentos.map((ins, i)=>{
              return <li key={i}> - <span className='font-semibold'>{ins.nombre}</span>: {ins.nivel}</li>
            })
          }
        </ul>
      </div>
      <div>
        <p>{profile.descripcion}</p>
      </div>
      <div><span className='font-semibold'>Tiempo de Experiencia:</span> <span>{profile.experiencia.length>0 ? profile.experiencia	: "El músico no ha registrado experiencia"}</span></div>
      <div>
        <span className='font-semibold'>Redes Sociales: </span>
        {
          profile.redes_sociales.length > 0 ?
          profile.redes_sociales.map((socialmedia, index)=><div key={index} className="flex flex-col items-center hover:scale-110 transition w-fit">
          <a href={socialmedia.url as string} className="text-lg hover:underline w-fit">{SocialMedias[socialmedia.nombre.toLowerCase()]}</a>
          <span className="text-xs">{socialmedia.nombre}</span>
        </div>)
        :
        <><span className=''>El músico no ha registrado redes sociales</span></>
        }
      </div>
    </section>
  )
}

export default Profile
