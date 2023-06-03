import { OffersT, OrganizerT, ProfileT } from '../../../types'
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import DefaultUserImage from '../../../assets/DefaultUser.webp'
import { useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export type chartT = {
  profile: OrganizerT,
  profiles: ProfileT[],
  offers: OffersT[]
}

Chart.register(ArcElement, Tooltip, Legend);

const CellphView = ({profile, profiles, offers}: chartT) => {
  const availablesOffers = [
    offers.filter(off => off.isAvailable).length,
    offers.filter(off => !off.isAvailable).length,
  ];
  
  const bgColors = [
    'rgba(255, 99, 132, 0.8)',
    'rgba(54, 162, 235, 0.8)',
    'rgba(75, 192, 192, 0.8)',
    'rgba(153, 102, 255, 0.8)',
  ];
  const borderColors = [
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
  ];
  const [data, setData] = useState();

  const pieConfig = {
    labels: ["Ofertas disponibles", "Ofertas no disponibles"],
    datasets: [
      {
        label: '# of avilable offers',
        data: (data || availablesOffers),
        backgroundColor: bgColors,
        borderColors,
        borderWidth: 1,
      },
    ],
  }
  

  return (
    <section className="w-full h-fit">
      <div className="h-[25vh] flex items-center gap-2">
        <img src={profile.url_foto_perfil || DefaultUserImage} alt="profile pic" className="h-4/5 w-auto"/>
        <div className="">
          <h3 className="text-xl">{profile.Name} {profile.Lastname}</h3>
          <p className="text-sm text-slate-500">Organizador</p>
          <p>{profile.telefono}</p>
        </div>
      </div>
      <div className='flex flex-col mb-4'>
        {
          offers.length === 0 
          ? <h2 className="text-2xl text-center">No tienes ninguna oferta publicada</h2>
          : <div className='w-full h-[200px] flex  justify-start'>
            <Pie data={pieConfig} />
            <ul className="w-full flex flex-col gap-2 justify-center text-sm text-slate-500">
              <li>- Numero total de ofertas: <span className="text-slate-800 font-semibold">{offers.length}</span></li>
              <li>- Numero de ofertas con aplicantes: <span className="text-slate-800 font-semibold">{offers.filter(off=> off.Applicants.length > 0).length}</span></li>
            </ul>
          </div>
        }
      </div>
      <div className="flex flex-col gap-4">
        {
          profiles.map((profile, i) => {
            return <Link to="" key={i} className={`w-full h-fit flex flex-col p-4 border-2 border-solid border-slate-300 gap- rounded-lg transition-colors bg-slate-300 hover:bg-opacity-30 hover:bg-zinc-500 hover:cursor-pointer`}>
            <div className='w-full flex items-center gap-2 text-slate-100 '>
              {profile.url_foto_perfil 
                ? <img src={profile.url_foto_perfil as string} className="w-16 h-16 object-cover rounded-full"/> 
                : <FaUserCircle className="text-[3rem] w-16 h-16"/>
              }
              <span className='font-semibold text-lg '>{profile.Name} {profile.Lastname}</span>
            </div>
             <div className="pl-4">
             <div>
              {profile.educacion.map((name: any, index: any) => {
                return (
                  <span className="" key={index}>
                    <p className="text-2xl ">{name.nombre}</p>
                  </span>
                );
              })}
            </div>
            <p className="text-lg text-slate-100">{profile.experiencia}</p>
            <div className="flex flex-col">
              <span className='font-semibold text-slate-100'>Instrumentos:</span>
              <div className=''>
                <p>{profile.instrumentos.map(instrument => instrument.nombre).join(", ")}</p>
              </div>
            </div>
             </div>
          </Link>
          })
        }
      </div>
    </section>
  )
}

export default CellphView
