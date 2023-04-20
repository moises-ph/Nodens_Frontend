import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AppOrganizer, Error, OrganizerLog, OrganizerProfile, Posts, Profiles } from "../pages";
import { useState } from "react";
import { Logo, NavOrganizer } from "../components";
import { HiMenu } from "react-icons/hi";
import NavOrganizerRes from "../components/NavOrganizer/NavOrganizerRes";

export const AppOrganizerRouter = () => {
  const organizador = true;
  const [showNav, setShowNav] = useState<boolean>(false)
  return (
    <>
      <Router>
      <NavOrganizer inView={showNav} setShowNav={setShowNav}/>
      <NavOrganizerRes />
        <header className="fixed w-full flex justify-between items-center text-slate-100 py-4 px-4 bg-slate-900 shadow-lg z-50 md:hidden">
          <Link to='/' className='cursor-pointer'><h1 className="text-2xl flex items-center"><Logo dimensions="h-7 w-7"/> Nodens</h1></Link>
          <button onClick={()=>setShowNav(true)}><HiMenu /></button>
        </header>
        <NavOrganizer inView={showNav} setShowNav={setShowNav}/>
        <main className="py-11">
          <Routes>
            <Route path="/" element={ organizador ? <OrganizerLog /> : <AppOrganizer /> } />
            <Route path="/posts" element={<Posts />} />
            <Route path="/profiles" element={<Profiles />} />
            <Route path="/mainprofile" element={<OrganizerProfile />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
      </Router>
    </>
  );
};
