import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react'
import {Instrumentos, FechaNacimiento, Genero, GenerosMusicales, Pais, Ciudad, Experiencia, Telefono, RedesSociales, Name, Descripcion} from './Inputs'
import { renewToken } from '../../services';
import { clientHttp } from '../../services/client';
import { Logo } from '../../components';
import InfoPersonal from './Inputs/InfoPersonal';

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
  const [musician, setMusician] = useState({
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
    "telefono": ''
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

  const setSignleProperty = (key : string, value : any) => {
    setMusician({
      ...musician,
      [key]: value
    })
  }

  const setNameLastname = (name : string, lastname : string) => {
    setMusician({
      ...musician,
      'Name' : name,
      'Lastname' : lastname
    })
    sumPage()
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

  const goBack = () => {
    setPage([page-1, -1])
  }

  useEffect(()=> {
    console.log(musician);
  }, [musician])

  const Inputs = [
    <InfoPersonal />,
    <FechaNacimiento actualMusician={musician} handler={handler}/>,
    <Name actualMusician={musician} goBack={goBack} handler={handler} setNombre={setNameLastname}/>,
    <Descripcion goBack={goBack} handler={handler} />,
    <Genero goBack={goBack} handler={handler}/>,
    <Pais goBack={goBack} handler={handler}/>,
    <Ciudad goBack={goBack} handler={handler}/>,
    <Instrumentos goBack={goBack} handler={handler}/>,
    <GenerosMusicales goBack={goBack} handler={handler}/>,  
    <Experiencia goBack={goBack} handler={handler}/>,
    <RedesSociales goBack={goBack} handler={handler}/>, 
    <Telefono goBack={goBack} handler={handler}/>]

  return (
    <>
      <main className="h-screen flex flex-col w-full items-center py-5 bg-gradient-to-br bg-zinc-100">
      <div className='flex w-full items-center justify-center'>
        <div className='flex flex-col items-center'>
          <button onClick={()=>{localStorage.removeItem("authTokenForTheUser"); location.reload()}}>Salir</button>
          <h1 className="text-3xl font-semibold ">Registro de Musico</h1>
        </div>
      </div>
        <form onSubmit={e=>e.preventDefault()} className='flex flex-col justify-center gap-4 h-full w-full items-center md:w-3/4'>
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
        </form>
        <Logo dimensions='h-[10vh] self-center place-self-start w-[12vw]'/>
      </main>
    </>
  );
};

export default MusicianLog;
