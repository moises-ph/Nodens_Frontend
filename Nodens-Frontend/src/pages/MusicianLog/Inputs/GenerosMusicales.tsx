import { motion } from "framer-motion";
import {useRef, useContext} from "react"


const GenerosMusicales = ({handler}: any) => {
	const generosMusicales = useRef(null)
  return (
    <>
      <label htmlFor="generosMusicales">
        Generos Musicales:
        <input type="text" name="generosMusicales" ref={generosMusicales} />
      </label>
      <button
        onClick={() =>
          handler('generosMusicales', generosMusicales.current.value)
        }
      >
        Guardar
      </button>
    </>
  );
};

export default GenerosMusicales;
