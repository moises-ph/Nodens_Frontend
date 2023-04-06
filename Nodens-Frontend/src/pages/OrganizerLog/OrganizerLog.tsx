import axios from 'axios';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react'
import {Ciudad, DescripcionEmpresa, Genero, NombreEmpresa, Pais, Telefono} from './inputs'
import { OrganizerT } from '../../types';

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


const OrganizerLog = () => {
	const cerrarSesion = () => {
    localStorage.removeItem("authTokenForTheUser");
    location.reload();
  };

  const [organizer, setOrganizer] = useState<OrganizerT>({
		"telefono": '',
    "nombre_empresa" : "",
    "descripcion_empresa": "",
    "pais": "",
    "ciudad": "",
    "url_logo": "",
    "url_foto_perfil": "",
		"genero": "",
    "redes_sociales": [
      
    ]
  })

	const registerOrganizer = () => {
    const headers = {
      Authorization: 'Bearer ' + localStorage.getItem('authTokenForTheUser'),
    }
    axios.post('', organizer, { headers: headers } )
      .then(res => console.log(res))
      .catch(err => console.log(err))

  }

	const sumPage = () =>{
    if(page<Inputs.length-1){
      setPage([page + 1, 1]);
    } else {
      registerOrganizer()
    }

  }

  const [[page, direction], setPage] = useState([0, 0]);

  const handler = (key:string, value: any) => {
    if(key !== 'redes_sociales'){
      setOrganizer({
        ...organizer,
        [key]: value
      })
    } else {
      setOrganizer({
        ...organizer,
        [key]: [...organizer[key], value]
      })
    }
    sumPage()
  }

	const goBack = () => {
    setPage([page-1, -1])
  }

	const Inputs: JSX.Element[] = [
    <Ciudad handler={handler} />,
    <DescripcionEmpresa goBack={goBack} handler={handler} />,
    <Genero goBack={goBack} handler={handler} />,
    <NombreEmpresa goBack={goBack} handler={handler} />,
    <Pais goBack={goBack} handler={handler} />,
    <Telefono goBack={goBack} handler={handler} />
  ];

  return (
    <>
    	<button onClick={cerrarSesion} className="">Salir</button>
      	<main className="h-screen flex flex-col w-full items-center">
      	  <h1 className="mb-[30%] text-3xl font-semibold text-slate-700">Registro de Organizador</h1>
      	  <form onSubmit={e=>e.preventDefault()} className='flex flex-col gap-4 h-full w-full items-center'>
      	    <AnimatePresence initial={false} custom={direction}>
      	      <motion.div
      	        className='h-5/6 w-full flex justify-center items-center'
      	        key={page}
      	        custom={direction}
      	        variants={variants}
      	        initial='enter'
      	        animate='center'
      	        exit='exit'
      	        transition={{y: {type: 'spring', stiffness: 300, damping: 30}, opacity: {duration: 0.5}}}>
      	        {Inputs[page]}
      	      </motion.div>
      	    </AnimatePresence>
      	  </form>
      	</main>
    </>
  )
}

export default OrganizerLog