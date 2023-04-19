import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react'
import {Instrumentos, FechaNacimiento, Genero, GenerosMusicales, Pais, Ciudad, Experiencia, Telefono, RedesSociales} from './Inputs'

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
  const cerrarSesion = () => {
    localStorage.removeItem("authTokenForTheUser");
    location.reload();
  };

  const [musician, setMusician] = useState({
    "fecha_nacimiento" : "",
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
    const headers = {
      Authorization: 'Bearer ' + localStorage.getItem('authTokenForTheUser'),
    }
    // axios.get('http://localhost:8000/musician/all').then(res=>console.log(res))
    fetch('http://localhost:8000/musician', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('authTokenForTheUser')}`
      },
      body: JSON.stringify(musician)
    }).then(res=>{
      console.log(res);
      location.reload();
    })
    // axios.post('http://localhost:8000/musician/', musician, { headers: headers } )
    //   .then(res => console.log(res))
    //   .catch(err => console.log(err))

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
    <FechaNacimiento handler={handler}/>,
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
      <main className="h-screen flex flex-col w-full items-center py-4">
        <h1 className="mb-8 text-3xl font-semibold text-slate-700">Registro de Musico</h1>
        <form onSubmit={e=>e.preventDefault()} className='flex flex-col gap-4 h-full w-full items-center md:w-3/4'>
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
