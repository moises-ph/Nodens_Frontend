import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Suspense, useEffect, useState } from "react";
import { Loading, Logo, NavOrganizer } from "../components";
import { HiMenu } from "react-icons/hi";
import NavOrganizerRes from "../components/NavOrganizer/NavOrganizerRes";
import axios from "axios";
import { CreatePost } from "../pages/CreatePost";
import {lazily} from 'react-lazily';
const { AppOrganizer, CreateOffer, Error, OrganizerLog, OrganizerProfile, Posts, Profiles, OrganizerOffers } = lazily(()=>import('../pages'))

export const AppOrganizerRouter = () => {
  const [organizador, setOrganizador] = useState<boolean | undefined>(undefined);
  useEffect(()=> {
    const request = axios.create({
      baseURL : 'http://40.118.207.63/',
      headers : { Authorization : `Bearer ${localStorage.getItem('authTokenForTheUser')}` }
    })
    request.get("/Organizer")
    .then(res=>{
      console.log(res);
      if(res.data==null) {
        setOrganizador(false);
      } else {
        setOrganizador(true);
      }
    })
      .catch(err=>{console.log(err); setOrganizador(false)})
  }, [])
  const [showNav, setShowNav] = useState<boolean>(false)
  if(organizador === undefined ) return <Loading />
  return (
    <>
      <Router>
      <div className={organizador ? '' : 'hidden'}>
        <NavOrganizer inView={showNav} setShowNav={setShowNav}/>
        <NavOrganizerRes />
        <header className="fixed w-full flex justify-between items-center text-slate-100 py-4 px-4 bg-slate-900 shadow-lg z-50 md:hidden">
          <Link to='/' className='cursor-pointer'><h1 className="text-2xl flex items-center"><Logo dimensions="h-7 w-7"/> Nodens</h1></Link>
          <button onClick={()=>setShowNav(true)}><HiMenu /></button>
        </header>
      </div>
        <main className={organizador ? 'pt-11' : ''}>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={ organizador ? <AppOrganizer /> : <OrganizerLog /> } />
              <Route path="/posts" element={<Posts />} />
              <Route path="/profiles" element={<Profiles />} />
              <Route path="/mainprofile" element={<OrganizerProfile />} />
              <Route path="/create-offer" element={<CreateOffer />} />
              <Route path="/create-post" element={<CreatePost />}></Route>
              <Route path="/offers" element={<OrganizerOffers />}></Route>
              <Route path="*" element={<Error />} />
            </Routes>
          </Suspense>
        </main>
      </Router>
    </>
  );
};
