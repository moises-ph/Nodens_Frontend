import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Loading } from '../../components';
import { renewToken } from '../../services';
import { clientHttp } from '../../services/client';
import { OrganizerT } from '../../types';
import Profile from '../AppOrganizer/views/components/Profile';

const App = () => {
  const [profiles, setProfiles] = useState<OrganizerT[]>();

  const getProfiles = async () => {
    await renewToken();
    clientHttp().get('/organizers/Organizer/all')
      .then(res => {
        console.log(res.data);
        setProfiles(res.data);
      })
      .catch(err => console.log(err))
  } 

  useEffect(() => {
    getProfiles();
  }, [])

  if (!profiles) return <Loading />
  return (
    <>
      <main className='bg-[#003F5A] h-screen'>
        {
          profiles.map((prf, i) => {
            return <Link to={`organizers/${prf._id?.$oid}`} key={i}>
              <h3>{prf.Name} {prf.Lastname}</h3>
            </Link> 
          })
        }
      </main>
    </>
  )
}

export default App 
