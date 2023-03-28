import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react'

import {Instrumentos} from './Inputs'

const MusicianLog = () => {
  const handleClick = () => {
    localStorage.removeItem("authTokenForTheUser");
    location.reload();
  };

  const fecha_nacimiento = useRef(null)
  const genero = useRef(null)
  const generosMusicales = useRef(null)
  const pais = useRef(null)
  const ciudad = useRef(null)
  const experiencia = useRef(null)
  const telefono = useRef(null)

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
            <label htmlFor='fecha_nacimiento'>fecha de nacimiento:
              <input type="date" name="fecha_nacimiento"  ref={fecha_nacimiento}/>
            </label>
            <button onClick={()=>handler('fecha_nacimiento', fecha_nacimiento.current.value)}>Guardar</button>
          </motion.div>
          <Instrumentos handler={handler}/>
          <motion.div>
            <label htmlFor='genero'>genero
              <input type="text" name="genero"  ref={genero}/>
            </label>
            <button onClick={()=>handler('genero',genero.current.value)}>Guardar</button>
          </motion.div>
          <motion.div>
            <label htmlFor='generosMusicales'>Generos Musicales:
              <input type="text" name="generosMusicales"  ref={generosMusicales}/>
            </label>
            <button onClick={()=>handler('generosMusicales', generosMusicales.current.value)}>Guardar</button>
          </motion.div>
          <motion.div>
            <label htmlFor='pais'>Pais: 
              <input type="text" name="pais"  ref={pais}/>
            </label>
            <button onClick={()=>handler('pais', pais.current.value)}>Guardar</button>
          </motion.div>
          <motion.div>
            <label htmlFor='ciudad'>Ciudad: 
              <input type="text" name="ciudad"  ref={ciudad}/>
            </label>
            <button onClick={()=>handler('ciudad', ciudad.current.value)}>Guardar</button>
          </motion.div>
          <motion.div>
            <label htmlFor='experiencia'>Experiencia: 
              <input type="text" name="experiencia"  ref={experiencia}/>
            </label>
            <button onClick={()=>handler('experiencia', experiencia.current.value)}>Guardar</button>
          </motion.div>
          <motion.div>
            <label htmlFor='telefono'>telefono: 
              <input type="text" name="telefono"  ref={telefono}/>
            </label>
            <button onClick={()=>handler('telefono', telefono.current.value)}>Guardar</button>
          </motion.div>
        </form>
      </main>
    </>
  );
};

export default MusicianLog;
