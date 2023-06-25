import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react'
import {Instrumentos, FechaNacimiento, Genero, GenerosMusicales, Pais, Ciudad, Experiencia, Telefono, RedesSociales, Name, Descripcion} from './Inputs'
import { renewToken } from '../../services';
import { clientHttp } from '../../services/client';
import { Logo } from '../../components';
import InfoPersonal from './Inputs/InfoPersonal';
import InfoMusical from './Inputs/InfoMusical';
import { InstrumentoT, MusicianT } from '../../types';
import LoadingScreen from './Inputs/LoadingScreen';

const variants = {
  enter: (direction: number) => {
    return {
      y: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    y: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      y: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

const MusicianLog = () => {
  const [musician, setMusician] = useState<MusicianT>({
    "fecha_nacimiento" : "",
    "Name": "",
    "Lastname": "",
    "instrumentos": [],
    "genero": "",
    "descripcion": "",
    "generosMusicales" : [
        
    ],
    "pais": "",
    "ciudad": "",
    "experiencia": "",
    "educacion": [
        
    ],
    "url_foto_perfil": "",
    "url_video_presentacion": [],
    "redes_sociales": [
        
    ],
    "telefono": []
  })

  const registerMusician = () => {
    renewToken()
    clientHttp().post('/musicians/musician', musician)
      .then(res=>{
        console.log(res);
        location.reload();
      })
      .catch(err=> console.log(err));
  }

  const sumPage = () =>{
    if(page<Inputs.length-1){
      setPage([page + 1, 1]);
    } else {
      registerMusician()
    }
  }

  const [[page, direction], setPage] = useState([0, 0]);

  const handler = (key:string, value: any) => {
    setMusician({
      ...musician,
      [key]: value
    })
    
    sumPage()
  }

  const handlerInfo = (name : string, lastname : string, description : string, genero : string, pais : string, ciudad : string, foto_perfil : string, telefono : string, fecha_nacimiento : string) => { 
    setMusician({
      ...musician,
      Name: name,
      Lastname: lastname,
      descripcion: description,
      genero: genero,
      pais: pais,
      ciudad: ciudad,
      url_foto_perfil: foto_perfil,
      telefono: [...musician.telefono, telefono],
      fecha_nacimiento: new Date(fecha_nacimiento).toISOString().slice(0,10)
    });
    sumPage();
  }

  const handlerMusic = (instruments : InstrumentoT[], generos : string[], redes : { nombre: String; url: String }[]) => {
    setMusician({
      ...musician,
      instrumentos : instruments,
      generosMusicales : generos,
      redes_sociales : redes as { nombre : string, url : string }[]
    });
    sumPage();
  }

  const goBack = () => {
    setPage([page-1, -1])
  }

  useEffect(()=> {
    console.log(musician);
  }, [musician])

  const Inputs = [
    <InfoPersonal alreadyMusician={musician} handlerInfo={handlerInfo} />,
    <InfoMusical handleSubmit={handlerMusic} goBack={goBack} />,
    <LoadingScreen registerMusician={registerMusician} />,
  ];

  return (
    <>
      <main className="h-screen flex flex-col overflow-y-hidden w-full items-center py-5 md:py-3 bg-gradient-to-br bg-zinc-100">
        <div className='flex w-full items-center justify-center'>
          <div className='flex flex-col items-center'>
            <button onClick={()=>{localStorage.removeItem("authTokenForTheUser"); location.reload()}}>Salir</button>
            <h1 className="text-3xl font-semibold ">Registro de Musico</h1>
          </div>
        </div>
        <div className='flex flex-col justify-center md:gap-2 gap-4 h-full w-full md:w-11/12 items-center'>
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              className='h-[90%] w-full flex justify-center items-center'
              key={page}
              custom={direction}
              variants={variants}
              initial='enter'
              animate='center'
              exit='exit'
              transition={{y: {type: 'keyframes', stiffness: 100, damping: 30}, opacity: {duration: 0.5}}}>
              {Inputs[page]}
            </motion.div>
          </AnimatePresence>
        </div>
        <Logo dimensions='h-[10vh] self-center place-self-start w-[12vw]'/>
      </main>
    </>
  );
};

export default MusicianLog;
