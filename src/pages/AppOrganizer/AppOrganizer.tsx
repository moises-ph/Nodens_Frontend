import { useEffect, useState } from 'react'
import { Loading } from '../../components'
import { renewToken } from '../../services'
import { clientHttp } from '../../services/client'
import { OffersT, OrganizerT, ProfileT } from '../../types'
import CellphView from './views/CellphView'
import PcView from './views/PcView'

const AppOrganizer = ({organizador}:{organizador: OrganizerT}) => {
  const [profiles, setProfiles] = useState<ProfileT[]>([]);
  const [offers, setOffers] = useState<OffersT[]>([]);

  const getOffers = () => {
    clientHttp().get('offers/offers/organizer')
      .then(res => {
        console.log(res);
        setOffers(res.data);
      })
      .catch(err=> console.log(err))
  }

  const getProfiles= async () => {
    await renewToken();
    clientHttp().get('/musicians/musician/all')
      .then(res=> {
        console.log(res);
        setProfiles(res.data)
      })
      .catch(err=>console.log(err))      
  }

  useEffect(()=> {
    const calling = async () => {
      await renewToken();
      getProfiles();
      getOffers();
    }
    calling();
  }, [])
  if(profiles.length > 0 && offers.length > 0) return <Loading />;
  return (
    <>
      <section>
        {
          window.innerWidth > 760 
          ? <PcView profile={organizador} profiles={profiles} offers={offers}/>
          : <CellphView profile={organizador} profiles={profiles} offers={offers}/>
        }
      </section>
    </>
  )
}

export default AppOrganizer
