import axios from "axios";
import { useEffect, useState } from "react";
import { MusicianLog } from "../MusicianLog";

const App = () => {
  const [musician, setMusician] = useState<boolean | undefined>(undefined);
  const handleClick = () => {
    localStorage.removeItem('authTokenForTheUser');
    location.reload()
  }
  useEffect(()=> {
    axios.get('http://localhost:8000/musician', {headers: {Authorization: 'Bearer ' + localStorage.getItem('authTokenForTheUser')}})
      .then(res=>{
        console.log(res);
        if(!res.data) {
          setMusician(false);
        } else {
          setMusician(true);
        }
      })
      .catch(err=>{console.log(err); setMusician(false)})
  }, [])
  if(musician === undefined) return <h1>Loading...</h1>
  if(musician === false) return <MusicianLog />
  return (
    <>
    <main className='bg-gradient-to-br from-orange-400 to-fuchsia-700 h-screen'>
      <div>
          
      </div>
      <button onClick={handleClick}>Salir</button>
    </main>
    </>
  )
}

export default App