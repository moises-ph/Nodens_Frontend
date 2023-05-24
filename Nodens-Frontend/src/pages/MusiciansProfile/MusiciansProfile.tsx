import { BsPersonSquare } from "react-icons/bs";
import { Link } from "react-router-dom";
import { profiles } from '../Profiles/Profiles'
import { useEffect, useState } from "react";
import { MusicianT } from "../../types";
import { clientHttp } from "../../services/client";


const MusiciansProfile = () => {
  const [user, setUser] = useState<MusicianT>();
  useEffect(()=> {
    clientHttp().get('musicians/musician')
      .then(res => {console.log(res); setUser(res.data)})
  }, [])
  if(!user) return <h1 className="text-2xl">Loading...</h1>
  return (
    <>
      <main>
        <div className="pl-2">
          <p className="text-3xl pt-5">Profile</p>
          <BsPersonSquare className="text-6xl mt-8 text-blue-900" />
          <div className="flex justify-center items-center flex-col gap-3 pb-4 text-xl">
            <p className="w-28 text-center ">SEBASTIÁN GARCÍA</p>
          </div>
        </div>
        <div className="flex justify-evenly items-center">
          <button className="h-9 w-32 bg-slate-50 border border-slate-900 rounded-md shadow-xl">
            ASPIRACIÓN $
          </button>
          <button className="h-9 w-32 bg-green-600 text-slate-50 border border-slate-900  rounded-md shadow-xl">
            CONTACTAR
          </button>
        </div>
        <div className="pl-2 pt-8 flex flex-col gap-4">
          <p className="text-xl">DESCRIPCIÓN</p>
          <p>Mi nombre es Sebastián soy un músico con {/*user.experiencia*/} de experiencia,
          he tocado {/*user.generosMusicales.map((g, i)=><span key={i}>{g}, </span>)*/} en cuanto a generos musicales se refiere.</p>
          <p>Soy del pais de {/*user.pais} de la ciudad de {user.ciudad*/}.</p>
          <p>{user.educacion.map((Edu, index)=>(
            <>
              <div key={index}>

                  <p>Inicié mis estudios en el año {Edu.fecha_Inicio.getFullYear()} en la institución educativa llamada {Edu.Institucion},
                  terminé mi {Edu.nombre} en el año {Edu.fecha_fin.getFullYear()}.</p>
              </div>
            </>
          ))}</p>
            <span>{profiles[0].Redes_Sociales.map((Social, index2)=>(
              <>
              <div key={index2}>
                  <p>Mi redes sociales son <Link to="" className="border-green-500 border-b-2">{Social.Nombre}</Link></p>
              </div>
              </>
            ))}
            </span>
        </div>
      </main>
    </>
  );
};

export default MusiciansProfile;
