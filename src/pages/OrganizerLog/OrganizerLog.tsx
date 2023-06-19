import { AnimatePresence, motion } from 'framer-motion';
import { Ciudad, DescripcionEmpresa, NombreEmpresa } from './inputs'
import { OrganizerT } from '../../types';
import { useEffect, useState } from 'react'
import { FechaNacimiento, Genero, Lastname, Name, Pais, RedesSociales, Telefono } from '../MusicianLog/Inputs';
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
    <FechaNacimiento goBack={goBack} handler={handler} />,
    <Name goBack={goBack} handler={handler}/>,
    <Lastname goBack={goBack} handler={handler}/>,
    <Genero goBack={goBack} handler={handler} />,
    <NombreEmpresa goBack={goBack} handler={handler} />,
    <DescripcionEmpresa goBack={goBack} handler={handler} gotCompany={organizer.nombre_empresa.length > 0} />,
    <RedesSociales goBack={goBack} handler={handler} />,
    <Telefono goBack={goBack} handler={handler} />
  ];

  return (
    <> 
      <main className="h-screen flex flex-col w-full items-center py-4 bg-[#003F5A]">
      <div className="fixed h-full w-full blur-[2px]">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className="absolute z-0 mt-[-10%] ml-4" viewBox="0 0 500 500" width="30%" id="blobSvg"><defs><linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style={{stopColor: "rgb(225,93,18)"}}></stop><stop offset="100%" style={{stopColor: "rgb(235,217,200)"}}></stop></linearGradient></defs><path id="blob" fill="url(#gradient)"><animate attributeName="d" dur="10000ms" repeatCount="indefinite" values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"></animate></path></svg>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className="absolute z-0 mt-[80%] ml-[-20%]" viewBox="0 0 500 500" width="30%" id="blobSvg"><defs><linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style={{stopColor: "rgb(225,93,18)"}}></stop><stop offset="100%" style={{stopColor: "rgb(235,217,200)"}}></stop></linearGradient></defs><path id="blob" fill="url(#gradient)"><animate attributeName="d" dur="10000ms" repeatCount="indefinite" values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"></animate></path></svg>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className="absolute z-0 mt-[100%] ml-[80%]" viewBox="0 0 500 500" width="60%" id="blobSvg"><defs><linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style={{stopColor: "rgb(225,93,18)"}}></stop><stop offset="100%" style={{stopColor: "rgb(235,217,200)"}}></stop></linearGradient></defs><path id="blob" fill="url(#gradient)"><animate attributeName="d" dur="10000ms" repeatCount="indefinite" values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"></animate></path></svg>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className="absolute z-0 mt-32 ml-[70%]" viewBox="0 0 500 500" width="30%" id="blobSvg"><defs><linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style={{stopColor: "rgb(225,93,18)"}}></stop><stop offset="100%" style={{stopColor: "rgb(235,217,200)"}}></stop></linearGradient></defs><path id="blob" fill="url(#gradient)"><animate attributeName="d" dur="10000ms" repeatCount="indefinite" values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"></animate></path></svg>        
        </div>  
        <button onClick={()=>{localStorage.removeItem("authTokenForTheUser"); location.reload()}}>salir</button>
        <h1 className="mb-8 text-3xl font-semibold text-slate-100">Registro de Organizador</h1>
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