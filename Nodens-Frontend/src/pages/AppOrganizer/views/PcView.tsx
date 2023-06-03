import { OffersT, OrganizerT, ProfileT } from '../../../types'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import DefaultUserImage from '../../../assets/DefaultUser.webp'
import { useState } from 'react'
import { Chart } from 'react-google-charts'

export type chartT = {
  profile: OrganizerT,
  profiles: ProfileT[],
  offers: OffersT[]
}


const PcView = ({profile, profiles, offers}: chartT) => {
  const data = [
    ["Info", "info for the organizer dashboard"],
    ["ofertas disponibles", offers.filter(of=> of.isAvailable).length],
    ["ofertas no disponibles", offers.filter(of=> !of.isAvailable).length]
  ]
  /*const [data, setData] = useState([
    {name: "Group A", value: offers.filter(of=> of.isAvailable).length},
    {name: "Group B", value: offers.filter(of=> !of.isAvailable).length}
  ]);*/
 
  const options = {
    title: "info",
    pieHole: 0.3,
    is3D: false
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
      {
        offers.length === 0 
        ? <h2 className="text-2xl text-center">No tienes ninguna oferta publicada</h2>
        : <Chart 
            chartType='PieChart'  
            width="800px"
            height="100px"
            data={data}
            options={options}
          />    
      }
    </section>
  )
}

export default PcView
