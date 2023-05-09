import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ProfileT } from "../../types";
import { useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { IndexLink, ModalProfile, SingleProfile } from "../../components";
import { BsSearch } from "react-icons/bs";

export const profiles: ProfileT[] = [
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
  const [modal, setOpen] = useState(false);
	const [profile, setProfile] = useState<ProfileT | undefined>()
	const [pfps,setPfps] = useState(profiles);

  const searchInput = useRef(null)

  const showModal = (perfil: ProfileT) => {
    console.log(modal);
    
		modal ? null : setOpen(true);
		setProfile(perfil)
	}

  const closeModal = () => {
		setOpen(false);
	}

  const searchOffer = (e:any)=>{
		console.log(e.current.value);
		if(e.current.value.length === 0){
			setPfps(profiles);
		}
		else{
			setPfps(profiles.filter(value => value.Instrumentos[0].Nombre.includes(e.current.value)));
		}
	}

  return (
    <>
      <main className="h-full overflow-y-hidden">
        {/* <h1 className="border-b-2 pt-2 pl-4 pb-4 shadow-xl text-3xl">Perfiles de <span className="border-b-2 border-red-500 text-red-500 ">Músicos</span></h1> */}
        <div className="pt-8 pb-3 fixed h-min md:h-1/6 w-full flex flex-col  items-center md:flex-row ls gap-4 border-b-[1px] z-10 bg-slate-50 border-solid border-slate-500">
					<div className="flex flex-row gap-4 m-0 h-min left-0">
						<IndexLink />
						<label htmlFor="" className="md:w-[85vw] w-[80%] flex items-center justify-between gap-2 h-12 bg-slate-100 text-slate-50 placeholder:text-slate-300 rounded-3xl px-4 shadow-xl">
							<input ref={searchInput} type="text" onChange={()=>{searchOffer(searchInput)}} placeholder="Buscar" className="bg-transparent md:w-full outline-none text-slate-900" />
							<button>
								<BsSearch onClick={()=>{searchOffer(searchInput)}} className="text-slate-400" />
							</button>
						</label>
					</div>
					<p className="text-slate-600 pl-6"><span className="text-slate-800 font-bold">{pfps.length}</span> Perfiles</p>
				</div>
        <section className="flex flex-col top-[18%] md:top-[16.666667%] pt-3 absolute w-full md:w-2/5 overflow-y-scroll gap-2 p-2">
          <div>
            {
              pfps.map((prof, i)=>{
                return <SingleProfile showModal={showModal} redirect={null} profile={prof} key={i} isHomePage={false}/>
              })
            }
          </div>
        </section>
        <AnimatePresence>
					  {modal && <ModalProfile open={modal} closeModal={closeModal} profile={profile}/>}
				  </AnimatePresence>
      </main>
    </>
  );
};

export default Profile;
