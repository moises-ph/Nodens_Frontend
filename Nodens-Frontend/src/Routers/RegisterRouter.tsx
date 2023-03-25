import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const RegisterRouter = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<h1>holi</h1>} />
        </Routes>
      </Router>
    </>
  );
};
