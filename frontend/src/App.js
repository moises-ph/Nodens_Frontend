import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from './components/Loading/Loading'

const Nav = lazy(() => import("./components/nav/Nav"));
const Landing = lazy(() => import("./components/landing/Landing"));
const Footer = lazy(() => import("./components/footer/Footer"));
const Error = lazy(() => import("./components/error/Error"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Nav />
          <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
