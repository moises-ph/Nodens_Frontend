import React from "react";
import { Link } from "react-router-dom";
import {AiFillFacebook, AiFillGithub} from "react-icons/ai"
import {FaInstagram} from "react-icons/fa"

const Footer = () => {
  return (
    <>
      <footer className="bg-slate-900 flex justify-center items-center flex-col gap-4"> 
        <div className="text-2xl text-slate-50">Nodens</div>
        <p className="text-center text-slate-50">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        <div className="flex justify-center items-center flex-row">
        <Link rel="stylesheet" className="text-5xl text-slate-50 transition-colors duration-75 hover:" to=""><AiFillFacebook /></Link>
        <Link rel="stylesheet" className="text-5xl text-slate-50" to=""><FaInstagram /></Link>
        <Link rel="stylesheet" className="text-5xl text-slate-50" to=""><AiFillGithub /></Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
