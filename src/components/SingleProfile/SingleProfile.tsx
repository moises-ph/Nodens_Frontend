import { FaUserCircle } from 'react-icons/fa';
import { ProfileT } from '../../types';
import {useState, useEffect} from "react";

const SingleProfile = ({profile, showModal, Key, isHomePage, redirect} : {profile :ProfileT, showModal : (profile : ProfileT) => void, Key : number, isHomePage : boolean, redirect ? : (() => void) | null }) => {

    const [instrumentsConcat, setInstrumentsConcat] = useState<string>("");

    useEffect(() => { setInstrumentsConcat(profile.instrumentos.map(instrument => instrument.nombre).join(", ")); })

    return (
      <div onClick={()=> showModal(profile)} key={Key} className={`w-full h-fit flex flex-col p-4 border border-solid border-slate-500 rounded-lg transition bg-slate-100  hover:cursor-pointer hover:shadow-lg hover:shadow-slate-600 ${isHomePage ? "backdrop-blur-md shadow-md" : null}`}>
        <div className='w-full flex items-center gap-2 text-slate-800 '>
          {profile.url_foto_perfil 
            ? <img src={profile.url_foto_perfil as string} className="w-16 h-16 object-cover rounded-full"/> 
            : <FaUserCircle className="text-[3rem] ml-2 mt-6"/>
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
        <p className="text-lg text-slate-800">{profile.experiencia}</p>
        <div className="flex flex-col">
          <span className='font-semibold text-slate-800'>Instrumentos:</span>
          <div className=''>
            <p className='text-slate-800'>{instrumentsConcat}</p>
          </div>
        </div>
         </div>
      </div>
    );
}

export default SingleProfile;
