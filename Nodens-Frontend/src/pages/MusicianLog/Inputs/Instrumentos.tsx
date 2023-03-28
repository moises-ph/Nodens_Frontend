import { motion } from "framer-motion";
import {useRef, useContext} from "react"


const Instrumentos = ({handler}: {handler: (key:string, value: any)=> void}) => {
	const instrumentos = useRef(null)
  return (
    <motion.div>
      <label htmlFor="instrumentos">
        instrumentos:
        <input type="text" name="instrumentos" ref={instrumentos} />
      </label>
      <button
        onClick={() =>
          handler('instrumentos', instrumentos.current.value)
        }
      >
        Guardar
      </button>
    </motion.div>
  );
};

export default Instrumentos;
