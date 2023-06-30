import { AnimatePresence, motion } from 'framer-motion';
import { EnterpriseInfo } from './inputs'
import { OrganizerT } from '../../types';
import { useEffect, useState } from 'react'
import { clientHttp } from '../../services/client';
import InfoPersonalOrganizer from './inputs/InfoPersonalOrganizer';
import Swal from 'sweetalert2';
import { renewToken } from '../../services';

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
		"telefono": "",
    "nombre_empresa" : "",
    "descripcion_empresa": "",
    "pais": "Colombia",
    "ciudad": "",
    "url_foto_perfil": "",
		"genero": "",
    "redes_sociales": [
      
    ],
    "Lastname": '',
    "Name": '',
    "fecha_nacimiento" : ""
  })

	const registerOrganizer = async () => {
    await renewToken();
    clientHttp().post('/organizers/Organizer', organizer)
    .then(res=>{
      console.log(res);
    })
    .then(res =>{ 
      Swal.fire({
        icon: 'success',
        text: 'Fuiste Registrado exitosamente',
        timer: 2000
      });
      location.reload();
      }
    )
    .catch(async(err) => {
      if(err.response.status==401){
        await renewToken();
        registerOrganizer();
      } else{
        Swal.fire({
          icon: 'error',
          text: 'ups, intentalo de nuevo',
          timer: 2000
        })
      }
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
 
  const handlerEnterprise = async (nombre: string, descripcion: string) => {
    setOrganizer({...organizer, nombre_empresa: nombre, descripcion_empresa: descripcion})
    await registerOrganizer();
  }
  const handler = (key:string, value: any) => {
    setOrganizer({...organizer, [key]: value })
    sumPage()
  }

  useEffect(()=> {
    console.log(organizer);
  }, [organizer])
	const goBack = () => {
    setPage([page-1, -1])
  }
 
  const handlerInfo = (name : string, lastname : string, genero : string, pais : string, ciudad : string, foto_perfil : string, telefono : string, fecha_nacimiento : string) => { 
    setOrganizer({
      ...organizer,
      Name: name,
      Lastname: lastname,
      genero: genero,
      pais: pais,
      ciudad: ciudad,
      url_foto_perfil: foto_perfil,
      telefono: telefono,
      fecha_nacimiento: new Date(fecha_nacimiento).toISOString().slice(0,10)
    });
    sumPage();
  }



	const Inputs: JSX.Element[] = [
    <InfoPersonalOrganizer handlerInfo={handlerInfo} alreadyOrganizer={organizer}/>,
    <EnterpriseInfo handler={registerOrganizer} goBack={goBack} setOrganizer={setOrganizer} organizer={organizer}/>,
  ];

  return (
    <> 
      <main className="h-screen flex flex-col gap-2 w-full items-center py-5 bg-gradient-to-br bg-zinc-100">
      <div className='flex w-full items-center justify-center'>
        <div className='flex flex-col items-center'>
          <button onClick={()=>{localStorage.removeItem("authTokenForTheUser"); location.reload()}}>Salir</button>
          <h1 className="text-3xl font-semibold ">Registro de Organizador</h1>
        </div>
      </div>
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
