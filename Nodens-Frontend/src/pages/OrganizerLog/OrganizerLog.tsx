import { AnimatePresence, motion } from 'framer-motion';
import { Ciudad, DescripcionEmpresa, NombreEmpresa } from './inputs'
import { OrganizerT } from '../../types';
import { useEffect, useState } from 'react'
import { Genero, Lastname, Name, Pais, RedesSociales, Telefono } from '../MusicianLog/Inputs';
import { clientHttp } from '../../services/client';

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
      
    ],
    "Lastname": '',
    "Name": ''
  })

	const registerOrganizer = () => {
    clientHttp().post('/organizers/Organizer', organizer)
    .then(res=>{
      console.log(res);
      location.reload();
    })
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
      setOrganizer({
        ...organizer,
        [key]: value
      })
    sumPage()
  }

  useEffect(()=> {
    console.log(organizer);
  }, [organizer])
	const goBack = () => {
    setPage([page-1, -1])
  }
 
	const Inputs: JSX.Element[] = [
    <Ciudad handler={handler} />,
    <Pais goBack={goBack} handler={handler} />,
    <Name goBack={goBack} handler={handler}/>,
    <Lastname goBack={goBack} handler={handler}/>,
    <Genero goBack={goBack} handler={handler} />,
    <NombreEmpresa goBack={goBack} handler={handler} />,
    <DescripcionEmpresa goBack={goBack} handler={handler} />,
    <RedesSociales goBack={goBack} handler={handler} />,
    <Telefono goBack={goBack} handler={handler} />
  ];

  return (
    <>
      <main className="h-screen flex flex-col w-full items-center py-4">
        <button onClick={()=>{localStorage.removeItem("authTokenForTheUser"); location.reload()}}>salir</button>
        <h1 className="mb-8 text-3xl font-semibold text-slate-700">Registro de Organizador</h1>
        <form onSubmit={e=>e.preventDefault()} className='flex flex-col gap-4 h-full w-full items-center md:w-3/4'>
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