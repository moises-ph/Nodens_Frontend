import { BsChevronLeft } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
import { ProfileT } from '../../types';

const Profile = ({
  profile,
  closeModal,
}: {
  profile: ProfileT;
  closeModal: any;
}) => {
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
          <p className="text-slate-500">{profile.telefono}</p>
        </div>
      </div>
      <div>
        <h4 className="text-2xl">Intrumentos: </h4>
        <ul>
          {
            profile.instrumentos.map((ins, i)=>{
              return <li key={i}> - {ins.nombre}, {ins.nivel}</li>
            })
          }
        </ul>
      </div>
      <div>
        <p>{profile.descripcion}</p>
      </div>
      <p>Tiempo de Experiencia: {profile.experiencia}</p>
    </section>
  )
}

export default Profile
