import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { App, Error, Offers, Posts, MusiciansProfile, MusicianLog } from "../pages";

export const AppMusicianRouter = () => {
  const musician = true;
  return (
    <>
      <Router>
        <main>
          <Routes>
            <Route path="/" element={musician ? <MusicianLog /> : <App />}></Route>
            <Route path="/posts" element={<Posts />}></Route>
            <Route path="/offers" element={<Offers />}></Route>
            <Route path="/mainprofile" element={<MusiciansProfile />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
        </main>
      </Router>
    </>
  );
};
