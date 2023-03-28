import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react'

const MusicianLog = () => {
  const handleClick = () => {
    localStorage.removeItem("authTokenForTheUser");
    location.reload();
  };

  const fecha_nacimiento = useRef(null)
  const instrumentos = useRef(null)
  const genero = useRef(null)

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
        <form onSubmit={e=>e.preventDefault()}>
          <motion.div>
            <label htmlFor='fecha_nacimiento'>
              <input type="date" name="fecha_nacimiento"  ref={fecha_nacimiento}/>
            </label>
            <button onClick={()=>handleSave({fecha_nacimiento: fecha_nacimiento.current.value})}>Guardar</button>
          </motion.div>
          <motion.div>
            <label htmlFor='instrumentos'>
              <input type="text" name="instrumentos"  ref={instrumentos}/>
            </label>
            <button onClick={()=>handleSave({instrumentos: [instrumentos.current.value]})}>Guardar</button>
          </motion.div>
          <motion.div>
            <label htmlFor='genero'>
              <input type="text" name="genero"  ref={genero}/>
            </label>
            <button onClick={()=>handleSave({genero: genero.current.value})}>Guardar</button>
          </motion.div>
        </form>
      </main>
    </>
  );
};

export default MusicianLog;
