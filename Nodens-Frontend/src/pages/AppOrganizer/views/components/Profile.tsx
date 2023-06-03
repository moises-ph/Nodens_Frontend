import React from 'react'
import { ProfileT } from '../../../../types';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const Profile = ({profile, key}: {profile: ProfileT, key: number}) => {
  return (
    <Link to="" key={key} className={`w-full h-fit flex flex-col p-4 border-2 border-solid border-slate-300 gap- rounded-lg transition-colors bg-slate-300 hover:bg-opacity-30 hover:bg-zinc-500 hover:cursor-pointer`}>
            <div className='w-full flex items-center gap-2 text-slate-100 '>
              {profile.url_foto_perfil 
                ? <img src={profile.url_foto_perfil as string} className="w-16 h-16 object-cover rounded-full"/> 
                : <FaUserCircle className="text-[3rem] w-16 h-16"/>
              }
              <span className='font-semibold text-lg '>{profile.Name} {profile.Lastname}</span>
            </div>
             <div className="pl-4">
             <div>
              {profile.educacion.map((name: any, index: any) => {
                return (
                  <span className="" key={index}>
                    <p className="text-2xl ">{name.nombre}</p>
                  </span>
                );
              })}
            </div>
            <p className="text-lg text-slate-100">{profile.experiencia}</p>
            <div className="flex flex-col">
              <span className='font-semibold text-slate-100'>Instrumentos:</span>
              <div className=''>
                <p>{profile.instrumentos.map(instrument => instrument.nombre).join(", ")}</p>
              </div>
            </div>
             </div>
          </Link>
  )
}

export default Profile