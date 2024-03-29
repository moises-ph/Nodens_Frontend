import { Link } from "react-router-dom";
import { FiInstagram } from "react-icons/fi"
import { RiFacebookCircleFill } from "react-icons/ri"
import { TbBrandGithub } from 'react-icons/tb'

const Footer = () => {
  return (
    <>
      <footer className="h-44 w-full bg-slate-900 flex justify-center self-end items-center flex-col gap-4 relative"> 
        <div className="text-2xl text-slate-50 font-serif drop-shadow-2xl shadow-white ">Nodens</div>
        <p className="text-center text-slate-50">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        <div className="flex justify-center items-center flex-row gap-4">
        <Link rel="stylesheet" className="h-12 text-5xl text-slate-50 transition-colors duration-75 " to=""><RiFacebookCircleFill className="text-4xl rounded-full transition-all duration-200 ease-in hover:text-[#1877F2] hover:bg-slate-50 hover:text-5xl"/></Link>
        <Link rel="stylesheet" className="h-12 text-5xl text-slate-50" to=""><FiInstagram  className="text-4xl rounded-2xl transition-all duration-200 ease-in hover:bg-gradient-to-br from-[#803C96] to-[#FE0900] hover:bg-slate-50 hover:text-5xl"/></Link>
        <Link rel="stylesheet" className="h-12 text-5xl text-slate-50" to=""><TbBrandGithub className="text-4xl rounded-full transition-all duration-200 ease-in hover:text-black hover:bg-slate-50 hover:text-5xl"/></Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
