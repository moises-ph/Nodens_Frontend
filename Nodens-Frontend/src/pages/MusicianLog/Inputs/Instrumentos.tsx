import { motion } from "framer-motion";
import {useRef} from "react"

const Instrumentos = ({handleSave}: any) => {
	const instrumentos = useRef(null)
  return (
    <motion.div>
      <label htmlFor="instrumentos">
        instrumentos:
        <input type="text" name="instrumentos" ref={instrumentos} />
      </label>
      <button
        onClick={() =>
          handleSave({ instrumentos: [instrumentos.current.value] })
        }
      >
        Guardar
      </button>
    </motion.div>
  );
};

export default Instrumentos;
