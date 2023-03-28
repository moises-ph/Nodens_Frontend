import { motion } from "framer-motion";
import {useRef, useContext} from "react"


const GenerosMusicales = ({ handler, goBack }: { handler: (key: string, value: any) => void, goBack: ()=>void }) => {
	const generosMusicales = useRef(null)
  return (
    <>
      <label htmlFor="generosMusicales">
        Generos Musicales:
        <input type="text" name="generosMusicales" ref={generosMusicales} />
      </label>
      <div>
        <button onClick={() => goBack()}>Atras</button>
        <button onClick={() =>handler('generosMusicales', generosMusicales.current.value)}>Guardar</button>
      </div>
    </>
  );
};

export default GenerosMusicales;
