import { motion } from "framer-motion";
import {useRef, useContext} from "react"


const Instrumentos = ({ handler, goBack }: { handler: (key: string, value: any) => void, goBack: ()=>void }) => {
	const instrumentos = useRef(null)
  return (
    <motion.div>
      <label htmlFor="instrumentos">
        instrumentos:
        <input type="text" name="instrumentos" ref={instrumentos} />
      </label>
      <div>
        <button onClick={() => goBack()}>Atras</button>
        <button onClick={() =>handler('instrumentos', instrumentos.current.value)}>Guardar</button>
      </div>
    </motion.div>
  );
};

export default Instrumentos;
