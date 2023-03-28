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

  const [musician, setMusician] = useState({});
  const handleSave = (e:any) => {
    setMusician({...musician, ...e});
  }
  useEffect(() => {
    console.log(musician)
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
            <button onClick={()=>handleSave({fecha_nacimiento: fecha_nacimiento.current.value})}>Guardar</button>
          </motion.div>
          <Instrumentos handleSave={handleSave}/>
          <motion.div>
            <label htmlFor='genero'>genero
              <input type="text" name="genero"  ref={genero}/>
            </label>
            <button onClick={()=>handleSave({genero: genero.current.value})}>Guardar</button>
          </motion.div>
          <motion.div>
            <label htmlFor='generosMusicales'>Generos Musicales:
              <input type="text" name="generosMusicales"  ref={generosMusicales}/>
            </label>
            <button onClick={()=>handleSave({generosMusicales: [generosMusicales.current.value]})}>Guardar</button>
          </motion.div>
          <motion.div>
            <label htmlFor='pais'>Pais: 
              <input type="text" name="pais"  ref={pais}/>
            </label>
            <button onClick={()=>handleSave({pais: pais.current.value})}>Guardar</button>
          </motion.div>
          <motion.div>
            <label htmlFor='ciudad'>Ciudad: 
              <input type="text" name="ciudad"  ref={ciudad}/>
            </label>
            <button onClick={()=>handleSave({ciudad: ciudad.current.value})}>Guardar</button>
          </motion.div>
          <motion.div>
            <label htmlFor='experiencia'>Experiencia: 
              <input type="text" name="experiencia"  ref={experiencia}/>
            </label>
            <button onClick={()=>handleSave({experiencia: experiencia.current.value})}>Guardar</button>
          </motion.div>
          <motion.div>
            <label htmlFor='telefono'>telefono: 
              <input type="text" name="telefono"  ref={telefono}/>
            </label>
            <button onClick={()=>handleSave({telefono: telefono.current.value})}>Guardar</button>
          </motion.div>
        </form>
      </main>
    </>
  );
};

export default MusicianLog;
