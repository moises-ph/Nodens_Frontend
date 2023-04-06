import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppOrganizer, Error, OrganizerLog, OrganizerProfile, Profiles } from "../pages";

export const AppOrganizerRouter = () => {
  const organizador = true;
  return (
    <>
      <Router>
        <main>
          <Routes>
            <Route path="/" element={ organizador ? <OrganizerLog /> : <AppOrganizer /> } />
            <Route path="/profiles" element={<Profiles />} />
            <Route path="/mainprofile" element={<OrganizerProfile />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
      </Router>
    </>
  );
};
