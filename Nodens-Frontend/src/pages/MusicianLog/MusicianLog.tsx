import { motion } from 'framer-motion';
import { useState, useEffect } from 'react'
import {Instrumentos, FechaNacimiento, Genero, GenerosMusicales, Pais, Ciudad, Experiencia, Telefono} from './Inputs'

const Inputs = [Instrumentos, FechaNacimiento, Genero, GenerosMusicales, Pais, Ciudad, Experiencia, Telefono]

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
  return (
    <>
      <button onClick={handleClick}>Salir</button>
      <main>
        <h1>Musico</h1>
        <form onSubmit={e=>e.preventDefault()} className='flex flex-col gap-4'>
          <motion.div>
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
          </motion.div>
        </form>
      </main>
    </>
  );
};

export default MusicianLog;
