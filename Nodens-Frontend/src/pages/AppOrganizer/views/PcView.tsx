import { Chart, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import DefaultUserImage from '../../../assets/DefaultUser.webp'
import {Profile} from './components'
import { chartT } from './CellphView'

Chart.register(ArcElement, Tooltip, Legend);

const PcView = ({profile, profiles, offers}: chartT) => {
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
  

  return (
    <section className="w-full h-fit flex gap-6">
      <div className='flex flex-col gap-4 w-2/5 h-[95vh] overflow-y-scroll px-4'>
        <div className="h-[25vh] flex items-center gap-2">
          <img src={profile.url_foto_perfil || DefaultUserImage} alt="profile pic" className="h-4/5 w-auto"/>
          <div className="">
            <h3 className="text-xl">{profile.Name} {profile.Lastname}</h3>
            <p className="text-sm text-slate-500">Organizador</p>
            <p>{profile.telefono}</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
        {
            profiles.map((profile, i) => {
              return  <Profile profile={profile} key={i}/>
            })
          }
        </div>
      </div>

      <div className='w-full h-[95vh] flex flex-col  p-8'>
        <div className='flex gap-4'>
          <div className="w-full h-[40vh] bg-red-500">
            {/* hacer info*/}
          </div>
          <div className="h-1/3 w-full ">
            {
            offers.length === 0 
            ? <h2 className="text-2xl text-center">No tienes ninguna oferta publicada</h2>
            : <div className='flex flex-col items-center h-[40vh]'>
              <Pie data={pieConfig} />
              <ul className="w-full flex flex-col items-center gap-2 justify-center text-sm text-slate-500">
                <li>- Numero total de ofertas: <span className="text-slate-800 font-semibold">{offers.length}</span></li>
                <li>- Numero de ofertas con aplicantes: <span className="text-slate-800 font-semibold">{offers.filter(off=> off.Applicants.length > 0).length}</span></li>
                <li>- Promedio de aplicantes por oferta: <span className="text-slate-800 font-semibold">{
                  offers.reduce((accumulator, currentValue) => accumulator + currentValue.Applicants.length, 0) / offers.length
                }</span></li>
              </ul>
            </div>
            }
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default PcView
