import { ProfileT } from '../../../../types';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const Profile = ({profile, key}: {profile: ProfileT, key: number}) => {
  return ( 
    <Link to={`/musician/${profile._id.$oid}`} key={key} className={`w-full h-fit flex flex-col p-4 border border-solid border-slate-500 rounded-lg transition bg-slate-100 hover:bg-opacity-30 hover:cursor-pointer hover:shadow-xl`}>
      <div className='w-full flex items-center gap-2 text-slate-800 '>
        {profile.url_foto_perfil 
          ? <img src={profile.url_foto_perfil as string} className="w-16 h-16 object-cover rounded-full"/> 
          : <FaUserCircle className="text-[3rem] text-slate-900 w-16 h-16"/>
        }
        <span className='font-semibold text-lg text'>{profile.Name} {profile.Lastname}</span>
      </div>
      <div className="pl-2">
        <p className="w-full text-ellipsis overflow-hidden whitespace-nowrap">{profile.descripcion}</p>
        <p className="text-lg text-slate-500">{profile.experiencia}</p>
        {
          profile.instrumentos.length > 0 && 
          <div className="flex flex-col">
            <span className=' text-slate-500'>Instrumentos:</span>
            <p>{profile.instrumentos.map(instrument => instrument.nombre).join(", ")}</p>
          </div>
        }
      </div>
    </Link>
  )
}

export default Profile
