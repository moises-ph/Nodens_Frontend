import { Chart } from 'react-google-charts'
import { OffersT, OrganizerT, ProfileT } from '../../../types'
import DefaultUserImage from '../../../assets/DefaultUser.webp'

export type chartT = {
  profile: OrganizerT,
  profiles: ProfileT[],
  offers: OffersT[]
}

const CellphView = ({profile, profiles, offers}: chartT) => {
  const data = [
    ["Info", "info for the organizer dashboard"],
    ["vacants", 10],
    ["offers", 20]
  ]
  const options = {
    title: "info",
    pieHole: 0.3,
    is3D: false
  }
  return (
    <section className="w-full h-fit">
      <div className="h-[30vh]">
        <div className="flex items-center gap-2 h-2/4">
          <img src={profile.url_foto_perfil || DefaultUserImage} alt="profile pic" className="h-4/5 w-auto"/>
          <h3>{profile.Name} {profile.Lastname}</h3>
        </div>
      </div>
      <Chart 
        chartType='PieChart'  
        width="100%"
        height="300px"
        data={data}
        options={options}
      />
    </section>
  )
}

export default CellphView
