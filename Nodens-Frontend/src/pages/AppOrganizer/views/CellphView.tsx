import { OffersT, OrganizerT, ProfileT } from '../../../types'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import DefaultUserImage from '../../../assets/DefaultUser.webp'
import { useState } from 'react'

export type chartT = {
  profile: OrganizerT,
  profiles: ProfileT[],
  offers: OffersT[]
}

const CellphView = ({profile, profiles, offers}: chartT) => {
  const [data, setData] = useState([
    {name: "Group A", value: offers.filter(of=> of.isAvailable).length},
    {name: "Group B", value: offers.filter(of=> !of.isAvailable).length}
  ]);
 
  const RADIAN = Math.PI/180;
  const renderCustomeLabel = ({cx, cy, midAngle, innerRadius, outerRadius, percent, index}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius + Math.cos(-midAngle * RADIAN);
    const y = cy + radius + Math.cos(-midAngle * RADIAN);
    return (
      <text x={x} y={y} fill="white" textAnchor={x> cx ? "start" : "end"} dominantBaseline="central">
       {`${(percent * 100).toFixed(0)}%`}
      </text>
    )
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
        : <PieChart width={300}height={300}>
              <Pie
                data={data}
                cx={200}
                cy={200}
                labelLine={false}
                label={renderCustomeLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {
                  data.map((entry, index)=> (
                    <Cell key={`cell-${index}`} fill='#ee4466' />
                  ))
                }
              </Pie>
            </PieChart>
      }
    </section>
  )
}

export default CellphView
