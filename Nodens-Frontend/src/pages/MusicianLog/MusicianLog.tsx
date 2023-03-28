import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react'
import {Instrumentos, FechaNacimiento, Genero, GenerosMusicales, Pais, Ciudad, Experiencia, Telefono} from './Inputs'

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
  const handleClick = () => {
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
        
    ]
  })

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
    
  }

  useEffect(()=> {
    console.log(musician);
  }, [musician])

  const Inputs = [<Instrumentos handler={handler}/>, <FechaNacimiento handler={handler}/>, <Genero handler={handler}/>, <GenerosMusicales handler={handler}/>, <Pais handler={handler}/>, <Ciudad handler={handler}/>, <Experiencia handler={handler}/>, <Telefono handler={handler}/>]

  const [[page, direction], setPage] = useState([0, 0]);
  return (
    <>
      <button onClick={handleClick}>Salir</button>
      <main>
        <h1>Musico</h1>
        <form onSubmit={e=>e.preventDefault()} className='flex flex-col gap-4'>
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial='enter'
              animate='center'
              exit='exit'
              transition={{y: {type: 'spring', stiffness: 300, damping: 30}, opacity: {duration: 0.2}}}>
              {Inputs[page]}
            </motion.div>
          </AnimatePresence>
          {/* <motion.div>
            <FechaNacimiento handler={handler}/>
          </motion.div>
          <motion.div>
            <Instrumentos handler={handler}/>
          </motion.div>
          <motion.div>
            <Genero handler={handler}/>
          </motion.div>
          <motion.div>
            <GenerosMusicales handler={handler}/>
          </motion.div>
          <motion.div>
            <Pais handler={handler} />
          </motion.div>
          <motion.div>
            <Ciudad handler={handler} />
          </motion.div>
          <motion.div>
            <Experiencia handler={handler} />
          </motion.div>
          <motion.div>
            <Telefono handler={handler} />
          </motion.div> */}
        </form>
      </main>
    </>
  );
};

export default MusicianLog;
