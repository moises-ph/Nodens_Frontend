import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home, Login, Registro, Error } from "../pages";
import { Nav } from "../components";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";
import Footer from "../components/Footer/Footer";

export const InitialRouter = () => {
  const [showNav, setShowNav] = useState<boolean>(false);
  return (
    <>
      <Router>
        <Nav inView={showNav} setShowNav={setShowNav} />
        <header className="fixed w-full flex justify-between items-center text-slate-100 py-4 px-4 backdrop-blur shadow-lg z-10">
          <Link to="/" className="cursor-pointer">
            <svg
              className="ml-4"
              width="35"
              height="56"
              viewBox="0 0 230 389"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M34 10H196C209.255 10 220 20.7452 220 34V355C220 368.255 209.255 379 196 379H34C20.7452 379 10 368.255 10 355V34C10 20.7452 20.7452 10 34 10Z"
                stroke="#E15D12"
                stroke-width="20"
              />
              <rect
                x="82"
                y="38"
                width="66"
                height="19"
                rx="8"
                fill="#E15D12"
              />
              <circle
                cx="114.5"
                cy="332.5"
                r="23.5"
                stroke="#E15D12"
                stroke-width="10"
              />
              <ellipse
                cx="143.314"
                cy="215.512"
                rx="20.2472"
                ry="15.6314"
                transform="rotate(-19.5762 143.314 215.512)"
                fill="#E15D12"
              />
              <ellipse
                cx="82.3143"
                cy="237.512"
                rx="20.2472"
                ry="15.6314"
                transform="rotate(-19.5762 82.3143 237.512)"
                fill="#E15D12"
              />
              <rect x="146" y="135" width="17" height="76" fill="#E15D12" />
              <rect
                x="85"
                y="159"
                width="17"
                height="76"
                rx="1"
                fill="#E15D12"
              />
              <rect
                x="86.7773"
                y="156.73"
                width="74.8253"
                height="17.4192"
                rx="2"
                transform="rotate(-20.9304 86.7773 156.73)"
                fill="#E15D12"
              />
              <ellipse
                cx="156.966"
                cy="135.474"
                rx="6.31666"
                ry="5.18977"
                transform="rotate(-29.5565 156.966 135.474)"
                fill="#E15D12"
              />
              <ellipse
                cx="90.9854"
                cy="161.498"
                rx="6.31666"
                ry="5.09978"
                transform="rotate(27.5891 90.9854 161.498)"
                fill="#E15D12"
              />
            </svg>
          </Link>
          <button onClick={() => setShowNav(true)}>
            <HiMenu />
          </button>
        </header>
        <Nav inView={showNav} setShowNav={setShowNav} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/registro" element={<Registro />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
};
