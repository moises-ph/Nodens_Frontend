import { sync } from "framer-motion";
import { BsPersonSquare } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Profiles } from "../Profiles";
import { profile } from '../Profiles/Profiles'


const MusiciansProfile = () => {
  return (
    <>
      <main>
        <div className="pl-2">
          <p className="text-3xl pt-5">Profile</p>
          <BsPersonSquare className="text-6xl mt-8" />
          <div className="flex justify-center items-center flex-col gap-3 pb-4 text-xl">
            <p className="w-28 text-center ">SEBASTIÁN GARCÍA</p>
            <p>ARMENIA QUINDÍO</p>
          </div>
        </div>
        <div className="flex justify-evenly items-center">
          <button className="h-9 w-32 bg-slate-50 border border-slate-900 rounded-md shadow-xl">
            ASPIRACION $
          </button>
          <button className="h-9 w-32 bg-green-600 text-slate-50 border border-slate-900  rounded-md shadow-xl">
            CONTACTAR
          </button>
        </div>
        <div className="pl-2 pt-8 flex flex-col gap-4">
          <p className="text-xl">DESCRIPCIÓN</p>
          <p>Mi nombre es Sebastián soy un músico con {profile[0].Experiencia} de experiencia,
          he tocado {profile[0].GenerosMusicales} en cuanto a generos musicales se refiere.</p>
          <p>Soy del pais de {profile[0].Pais} de la ciudad de {profile[0].Ciudad}.</p>
          <p>{profile[0].Educacion.map((Edu, index)=>(
            <>
              <div key={index}>

                  <p>Inicié mis estudios en el año {Edu.Fecha_Inicio.getFullYear()} en la institución educativa llamada {Edu.Institucion},
                  terminé mi {Edu.Nombre} en el año {Edu.Fecha_Fin.getFullYear()}.</p>
              </div>
            </>
          ))}</p>
            <span>{profile[0].Redes_Sociales.map((Social, index2)=>(
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


/*Primero descripción, después datos personales, ubiación luego el resto de datos faltantes tales como: Experiencia, Instrumentos, Educación */ 