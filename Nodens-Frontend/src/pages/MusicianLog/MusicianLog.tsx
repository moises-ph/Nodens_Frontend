import axios from 'axios';
import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react'
import {Instrumentos, FechaNacimiento, Genero, GenerosMusicales, Pais, Ciudad, Experiencia, Telefono} from './Inputs'

const variants = {
  enter: (direction: number) => {
    return {
      y: direction > 0 ? 500 : -500,
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
      y: direction < 0 ? 500 : -500,
      opacity: 0
    };
  }
};

const MusicianLog = () => {
  const cerrarSesion = () => {
    localStorage.removeItem("authTokenForTheUser");
    location.reload();
  };

  const [musician, setMusician] = useState({
    "fecha_nacimiento" : "",
    "instrumentos": [
        
    ],
    "genero": "",
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
    telefono: ''
  })

  const registerMusician = () => {
    const headers = {
      Authorization: 'Bearer ' + localStorage.getItem('authTokenForTheUser'),
    }
    axios.post('http://localhost:8000/musician', musician, { headers: headers } )
      .then(res => console.log(res))
      .catch(err => console.log(err))
    // axios({
    //   method: 'POST',
    //   url: '/musician',
    //   data: musician,
    //   headers: headers
    // })
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
    if(key !== 'instrumentos' && key !== 'generosMusicales'){
      setMusician({
        ...musician,
        [key]: value
      })
    } else {
      setMusician({
        ...musician,
        [key]: [...musician[key], value]
      })
    }
    sumPage()
  }

  const goBack = () => {
    setPage([page-1, -1])
  }

  useEffect(()=> {
    console.log(musician);
  }, [musician])

  const Inputs = [
    <FechaNacimiento handler={handler}/>,
    <Instrumentos goBack={goBack} handler={handler}/>,
    <Genero goBack={goBack} handler={handler}/>, 
    <GenerosMusicales goBack={goBack} handler={handler}/>, 
    <Pais goBack={goBack} handler={handler}/>, 
    <Ciudad goBack={goBack} handler={handler}/>, 
    <Experiencia goBack={goBack} handler={handler}/>, 
    <Telefono goBack={goBack} handler={handler}/>]

  return (
    <>
      <button onClick={cerrarSesion} className="">Salir</button>
      <main className="h-screen flex flex-col w-full items-center">
        <h1 className="mb-[30%] text-3xl font-semibold">Registro de Musico</h1>
        <form onSubmit={e=>e.preventDefault()} className='flex flex-col gap-4 h-full w-full items-center'>
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              className='h-5/6 w-full flex justify-center items-center'
              key={page}
              custom={direction}
              variants={variants}
              initial='enter'
              animate='center'
              exit='exit'
              transition={{y: {type: 'spring', stiffness: 300, damping: 30}, opacity: {duration: 0.5}}}>
              {Inputs[page]}
            </motion.div>
          </AnimatePresence>
        </form>
      </main>
    </>
  );
};

export default MusicianLog;
