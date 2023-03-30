import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ProfileT } from "../../types";

export const profile: ProfileT[] = [
  {
    IdAuth: "1",
    Fecha_Nacimiento: new Date(),
    Instrumentos: [
      {
        Nombre: "Guitarra",
        Nivel: "Avanzado",
      },
      {
        Nombre: "piano",
        Nivel: "Avanzado",
      },
    ],
    GenerosMusicales: "De todo",
    Pais: "Colombia",
    Ciudad: "Armenia",
    Experiencia: "10 Años",
    Educacion: [
      {
        Nombre: "Bachillerato",
        Institucion: "Fundanza",
        Fecha_Inicio: new Date(),
        Fecha_Fin: new Date(),
      },
    ],
    Url_Foto_Perfil: "ichbineinmann.24",
    Url_Video_Presentacion: "wirbineinemanner.77",
    Redes_Sociales: [
      {
        Nombre: "ichwilleinehundin",
        Url: "pwihrefiugf",
      },
    ],
  },
  {
    IdAuth: "1",
    Fecha_Nacimiento: new Date(),
    Instrumentos: [
      {
        Nombre: "Guitarra",
        Nivel: "Avanzado",
      },
    ],
    GenerosMusicales: "De todo",
    Pais: "Colombia",
    Ciudad: "Armenia",
    Experiencia: "10 Años",
    Educacion: [
      {
        Nombre: "Sebastián",
        Institucion: "Fundanza",
        Fecha_Inicio: new Date(),
        Fecha_Fin: new Date(),
      },
    ],
    Url_Foto_Perfil: "ichbineinmann.24",
    Url_Video_Presentacion: "wirbieneinemanner.77",
    Redes_Sociales: [
      {
        Nombre: "ichwilleinehundin",
        Url: "pwihrefiugf",
      },
    ],
  },
  {
    IdAuth: "1",
    Fecha_Nacimiento: new Date(),
    Instrumentos: [
      {
        Nombre: "Guitarra",
        Nivel: "Avanzado",
      },
      {
        Nombre: "piano",
        Nivel: "Avanzado",
      },
    ],
    GenerosMusicales: "De todo",
    Pais: "Colombia",
    Ciudad: "Armenia",
    Experiencia: "10 Años",
    Educacion: [
      {
        Nombre: "Sebastián",
        Institucion: "Fundanza",
        Fecha_Inicio: new Date(),
        Fecha_Fin: new Date(),
      },
    ],
    Url_Foto_Perfil: "ichbineinmann.24",
    Url_Video_Presentacion: "wirbieneinemanner.77",
    Redes_Sociales: [
      {
        Nombre: "ichwilleinehundin",
        Url: "pwihrefiugf",
      },
    ],
  },
  {
    IdAuth: "1",
    Fecha_Nacimiento: new Date(),
    Instrumentos: [
      {
        Nombre: "Guitarra",
        Nivel: "Avanzado",
      },
    ],
    GenerosMusicales: "De todo",
    Pais: "Colombia",
    Ciudad: "Armenia",
    Experiencia: "10 Años",
    Educacion: [
      {
        Nombre: "Sebastián",
        Institucion: "Fundanza",
        Fecha_Inicio: new Date(),
        Fecha_Fin: new Date(),
      },
    ],
    Url_Foto_Perfil: "ichbineinmann.24",
    Url_Video_Presentacion: "wirbieneinemanner.77",
    Redes_Sociales: [
      {
        Nombre: "ichwilleinehundin",
        Url: "pwihrefiugf",
      },
    ],
  },
  {
    IdAuth: "1",
    Fecha_Nacimiento: new Date(),
    Instrumentos: [
      {
        Nombre: "Guitarra",
        Nivel: "Avanzado",
      },
      {
        Nombre: "piano",
        Nivel: "Avanzado",
      },
    ],
    GenerosMusicales: "De todo",
    Pais: "Colombia",
    Ciudad: "Armenia",
    Experiencia: "10 Años",
    Educacion: [
      {
        Nombre: "Sebastián",
        Institucion: "Fundanza",
        Fecha_Inicio: new Date(),
        Fecha_Fin: new Date(),
      },
    ],
    Url_Foto_Perfil: "ichbineinmann.24",
    Url_Video_Presentacion: "wirbieneinemanner.77",
    Redes_Sociales: [
      {
        Nombre: "ichwilleinehundin",
        Url: "pwihrefiugf",
      },
    ],
  },
  {
    IdAuth: "1",
    Fecha_Nacimiento: new Date(),
    Instrumentos: [
      {
        Nombre: "Guitarra",
        Nivel: "Avanzado",
      },
    ],
    GenerosMusicales: "De todo",
    Pais: "Colombia",
    Ciudad: "Armenia",
    Experiencia: "10 Años",
    Educacion: [
      {
        Nombre: "Sebastián",
        Institucion: "Fundanza",
        Fecha_Inicio: new Date(),
        Fecha_Fin: new Date(),
      },
    ],
    Url_Foto_Perfil: "ichbineinmann.24",
    Url_Video_Presentacion: "wirbieneinemanner.77",
    Redes_Sociales: [
      {
        Nombre: "ichwilleinehundin",
        Url: "pwihrefiugf",
      },
    ],
  },
  {
    IdAuth: "1",
    Fecha_Nacimiento: new Date(),
    Instrumentos: [
      {
        Nombre: "Guitarra",
        Nivel: "Avanzado",
      },
      {
        Nombre: "piano",
        Nivel: "Avanzado",
      },
    ],
    GenerosMusicales: "De todo",
    Pais: "Colombia",
    Ciudad: "Armenia",
    Experiencia: "10 Años",
    Educacion: [
      {
        Nombre: "Sebastián",
        Institucion: "Fundanza",
        Fecha_Inicio: new Date(),
        Fecha_Fin: new Date(),
      },
    ],
    Url_Foto_Perfil: "ichbineinmann.24",
    Url_Video_Presentacion: "wirbieneinemanner.77",
    Redes_Sociales: [
      {
        Nombre: "ichwilleinehundin",
        Url: "pwihrefiugf",
      },
    ],
  },
];

const Profile = () => {

  return (
    <>
      <main>
        <p className="border-b-2 pt-2 pl-4 pb-4 shadow-xl text-3xl">Perfiles de <span className="border-b-2 border-red-500 text-red-500 ">Músicos</span></p>
        {profile.map((profile1, index) => {
          return (
            <div key={index} className="border-b-2 pb-2 flex rounded-b-xl rounded-t-xl shadow-sm shadow-slate-300">
              <Link to=""><FaUserCircle className="text-[3rem] ml-2 mt-6"/></Link>
               <div className="pl-4">
               <p>
                {profile1.Educacion.map((name, index2) => {
                  return (
                    <span className="" key={index2}>
                      <p className="text-2xl ">{name.Nombre}</p>
                    </span>
                  );
                })}
              </p>
              <p className="text-lg">{profile1.Experiencia}</p>
              <p className="flex">
                {profile1.Instrumentos.map((instrumentos, inst) => {
                  return (
                    <span className="flex align-center justify-center" key={inst}>
                      <p>{instrumentos.Nombre},</p>
                    </span>
                  );
                })}
              </p>
               </div>
            </div>
          );
        })}
      </main>
    </>
  );
};

export default Profile;
