import { useEffect, useState } from 'react'
import { Loading } from '../../components'
import { renewToken } from '../../services'
import { clientHttp } from '../../services/client'
import { OrganizerT, ProfileT } from '../../types'

const AppOrganizer = ({organizador}:{organizador: OrganizerT}) => {
  const [profiles, setProfiles] = useState<ProfileT[]>([]);
  useEffect(()=> {
    const getOffer= async () => {
      await renewToken();
      clientHttp().get('/musicians/musician/all')
        .then(res=> {
          console.log(res);
          setProfiles(res.data)
        })
        .catch(err=>console.log(err))      
    }
    getOffer();
  }, [])
  if(!profiles) return <Loading />;
  return (
    <>
      <section className="w-full flex flex-col p-4 gap-4">
        <div className="bg-red-500 h-[30vh] w-full flex items-center px-2 rounded-lg">
          <div className="h-2/3 w-2/5 bg-blue-400 rounded-full"></div>
        </div>
        <div className="flex flex-col gap-4 w-full">
          {
            profiles.map((pfp, i)=> {
              return <div key={i} className="h-[20vh] bg-slate-200 w-full rounded-lg p-3 shadow-zinc-200 shadow">
                <h3 className="text-lg">{pfp.Name} {pfp.Lastname}</h3>
                <p>{pfp.experiencia}</p>
                <p>{pfp.instrumentos.map((ins, i)=><span key={i}>{ins.nombre + (i===pfp.instrumentos.length-1 ? '.' : ',')}</span>)}</p>
                <p>{pfp.generosMusicales.map((gen, i)=><span key={i}>{gen + (i===pfp.generosMusicales.length-1 ? '.' : ',')}</span>)}</p>
              </div>
            })
          }
        </div>
      </section>
    </>
  )
}

export default AppOrganizer
