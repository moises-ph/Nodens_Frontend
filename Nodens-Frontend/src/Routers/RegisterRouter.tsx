import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MusicianLog } from "../pages";

export const RegisterRouter = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MusicianLog />} />
        </Routes>
      </Router>
    </>
  );
};
