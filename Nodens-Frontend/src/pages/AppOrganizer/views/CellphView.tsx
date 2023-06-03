import { OffersT, OrganizerT, ProfileT } from '../../../types'
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import DefaultUserImage from '../../../assets/DefaultUser.webp'
import { useState } from 'react'

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
  console.log(availablesOffers);
  
  const bgColors = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
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
      <div className='h-[200px] w-[200px]'>
      {
        offers.length === 0 
        ? <h2 className="text-2xl text-center">No tienes ninguna oferta publicada</h2>
        : <Pie data={pieConfig} />
      }
      </div>
    </section>
  )
}

export default CellphView
