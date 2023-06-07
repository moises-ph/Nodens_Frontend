import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Suspense, useEffect, useState } from "react";
import { Loading, Logo, NavOrganizer } from "../components";
import { HiMenu } from "react-icons/hi";
import NavOrganizerRes from "../components/NavOrganizer/NavOrganizerRes";
import {lazily} from 'react-lazily';
import { renewToken } from "../services";
import { clientHttp } from "../services/client";
import { OrganizerT } from "../types";
import { AxiosError } from "axios";

const { AppOrganizer, CreateOffer, Error, OrganizerLog, OrganizerProfile, Posts, Profiles, OrganizerOffers, SingleOffer, SingleMusician } = lazily(()=>import('../pages'))

export const AppOrganizerRouter = () => {
  const [organizador, setOrganizador] = useState<OrganizerT | boolean | undefined>(undefined);

  const getOrganizer = async() => {
    setTimeout('', 1000)
    clientHttp().get("/organizers/Organizer")
      .then(res=>{
        console.log(res);
        if(res.data==null) {
          setOrganizador(false);
        } else {
          setOrganizador(res.data);
        }
      })
      .catch(async (err : AxiosError)=>{        
        if(err.response?.status === 401 || err.code === "ERR_NETWORK"){
          await renewToken();
          getOrganizer();
        }
        else{
          console.log(err); 
          setOrganizador(false);
        }
      })
  }

  useEffect(()=> {
    getOrganizer();
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
        <main className={organizador ? 'pt-16 md:pt-11' : ''}>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={ organizador ? <AppOrganizer organizador={organizador as OrganizerT}/> : <OrganizerLog/> } />
              <Route path="/posts" element={<Posts />} />
              <Route path="/profiles" element={<Profiles />} />
              <Route path="/mainprofile" element={<OrganizerProfile />} />
              <Route path="/create-offer" element={<CreateOffer />} />
              <Route path="/offers" element={<OrganizerOffers />}></Route>
              <Route path="/offers/:id" element={<SingleOffer />}></Route>
              <Route path="/musician/:id" element={<SingleMusician />}></Route>
              <Route path="*" element={<Error />} />
            </Routes>
          </Suspense>
        </main>
      </Router>
    </>
  );
};
