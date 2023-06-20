import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Loading, Logo, NavMusician, NavMusicianRes } from "../components";
import { HiMenu } from "react-icons/hi";
import { Suspense, useEffect, useState } from "react";
import { lazily } from "react-lazily";
import { clientHttp } from "../services/client";
import { renewToken } from "../services";
import CreatePost from "../pages/CreatePost/CreatePost";

const {App, Error, Posts, MusiciansProfile, MusicianLog, ApplicantsOffers, SingleOfferApplicant, SingleOrganizer} = lazily(()=> import('../pages'))

export const AppMusicianRouter = () => {
  const [musician, setMusician] = useState<boolean | undefined>(undefined)
  const [perfil, setPerfil] = useState<string>();
  const [userName, setUserName] = useState<string>();
  
  useEffect(()=> {
    const request = async () => {
      await renewToken()
      setTimeout(() => {}, 1000);
      clientHttp().get('/musicians/musician', {headers: {Authorization: 'Bearer ' + localStorage.getItem('authTokenForTheUser')}})
      .then(res=>{
        console.log(res);
        if(!res.data) {
          setMusician(false);
        } else {
          setMusician(true);
          localStorage.setItem('musicianName', `${res.data.Name} ${res.data.Lastname}`)
          localStorage.setItem('musicianId', res.data.IdAuth);
          setPerfil(res.data.url_foto_perfil);
          setUserName(`${res.data.Name} ${res.data.Lastname}` as string)
        }
      })
        .catch(err=>{console.log(err); setMusician(false)})
    }

    request();
  }, [])
  const [showNav, setShowNav] = useState<boolean>(false)
  if(musician === undefined ) return <Loading />
  return (
    <>
      <Router>
        <div className={musician ? '' : 'hidden'}>
        <NavMusician inView={showNav} setShowNav={setShowNav} />
        <NavMusicianRes perfil={perfil as string} />
        <header className="fixed w-full flex justify-between items-center text-slate-100 py-4 px-4 bg-slate-900 shadow-lg z-50 md:hidden">
          <Link to='/' className='cursor-pointer'><h1 className="text-2xl flex items-center"><Logo dimensions="h-7 w-7"/> Nodens</h1></Link>
          <button onClick={()=>setShowNav(true)}><HiMenu /></button>
        </header>
        <NavMusician inView={showNav} setShowNav={setShowNav}/>
        </div>

        
        <main className={musician ? 'pt-11' : ""}>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={musician ? <Posts /> : <MusicianLog />}></Route>
              <Route path="/offers" element={<App userName={userName as string}/>}></Route>
              <Route path="/createpost" element={ <CreatePost />}/>
              <Route path="/offers/:id" element={<App userName={userName as string} />}></Route>
              <Route path="/mainprofile" element={<MusiciansProfile />}></Route>
              <Route path="/applicants-offers" element={<ApplicantsOffers />}></Route>
              <Route path="/organizers/:id" element={<SingleOrganizer />}></Route>
              <Route path="*" element={<Error />}></Route>
            </Routes>
          </Suspense>
        </main>
      </Router>
    </>
  );
};
