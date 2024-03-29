import { Chart, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import DefaultUserImage from '../../../assets/DefaultUser.webp'
import {Profile, LineChart} from './components'
import { chartT } from './CellphView'
import { Loading } from '../../../components'
import { useEffect, useState } from 'react'

Chart.register(ArcElement, Tooltip, Legend);

const PcView = ({profile, profiles, offers}: chartT) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
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

  const pieConfig = {
    labels: ["Ofertas disponibles", "Ofertas no disponibles"],
    datasets: [
      {
        label: '# of avilable offers',
        data:  availablesOffers,
        backgroundColor: bgColors,
        borderColors,
        borderWidth: 1,
      },
    ],
  }
  
  useEffect(()=>{
    setTimeout(()=> {
      setIsLoading(false);
    }, 4500)
  })

  return (
    <section className="w-full h-fit flex gap-6">
      <div className='flex flex-col gap-4 w-2/5 max-h-[93vh] overflow-y-scroll px-4'>
        <div className="h-[25vh] flex items-center gap-2 sticky top-0 bg-white">
          <img src={profile.url_foto_perfil || DefaultUserImage} alt="profile pic" className="h-4/5 w-auto"/>
          <div className="">
            <h3 className="text-xl">{profile.Name} {profile.Lastname}</h3>
            <p className="text-sm text-slate-500">Organizador</p>
            <p className='text-sm font-thin'>{profile.telefono}</p>
            <span className='text-sm font-thin'>{profile.ciudad}, {profile.pais}</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-2">
        {
          isLoading ? <div className={` flex items-center justify-center`}><div className='w-36 h-36 rounded-[50%] [border-left-style:solid] border-[11.2px] border-double border-[#474bff] animate-spin'></div></div>
          : profiles.map((profile, i) => {
            return  <Profile profile={profile} key={i}/>
          })
        }
        </div>
      </div>

      <div className='w-full h-[93vh] flex flex-col justify-center  p-8'>
        <div className='flex gap-4'>
          <div className="w-full h-[40vh]">
            <LineChart offers={offers}/>
          </div>
          <div className="h-1/3 w-full ">
            
            <div className='flex flex-col items-center h-[40vh]'>
              <Pie data={pieConfig} />
              <ul className="w-full flex flex-col items-center gap-2 justify-center text-sm text-slate-500">
                {
                  offers.length === 0 ?
                  <li className="text-xl">No tienes niguna oferta publicada</li>
                  : <>
                    <li>- Numero total de ofertas: <span className="text-slate-800 font-semibold">{offers.length}</span></li>
                    <li>- Numero de ofertas con aplicantes: <span className="text-slate-800 font-semibold">{offers.filter(off=> off.Applicants.length > 0).length}</span></li>
                    <li>- Promedio de aplicantes por oferta: <span className="text-slate-800 font-semibold">{
                      offers.reduce((accumulator, currentValue) => accumulator + currentValue.Applicants.length, 0) / offers.length
                    }</span></li>
                  </>
                }
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default PcView
