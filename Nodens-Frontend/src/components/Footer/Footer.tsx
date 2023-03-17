import React from "react";
import { Link } from "react-router-dom";
import {AiFillFacebook, AiFillGithub} from "react-icons/ai"
import {FaInstagram} from "react-icons/fa"

const Footer = () => {
  return (
    <>
      <footer className="flex justify-center items-center flex-col gap-4"> 
        <div className="text-2xl">Nodens</div>
        <p className="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        <div className="flex justify-center items-center flex-row">
        <Link rel="stylesheet" className="text-5xl" to=""><AiFillFacebook /></Link>
        <Link rel="stylesheet" className="text-5xl" to=""><FaInstagram /></Link>
        <Link rel="stylesheet" className="text-5xl" to=""><AiFillGithub /></Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
