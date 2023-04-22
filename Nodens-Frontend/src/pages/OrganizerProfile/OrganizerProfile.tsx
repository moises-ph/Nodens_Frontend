import { BiUserCircle, BiHeartCircle } from "react-icons/bi";
import { AiOutlineMail, AiFillEye,AiOutlinePhone } from "react-icons/ai";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";

const OrganizerProfile = () => {
  const [color, setColor] = useState("black");
  const change = (e: any) => {
    setColor(e);
  };

  const [color2, setColor2] = useState("black");
  const change2 = (a: any) => {
    setColor2(a);
  };
  return (
    <>
      <main className="bg-slate-300 h-screen w-full">
        <div className="pt-10 shadow-2xl">
        <div className="flex  h-[40rem] bg-slate-50 rounded-2xl justify-start flex-col">
          <Link to="" className="ml-4 text-9xl">
            <BiUserCircle className="text-black mt-2"/>
          </Link>
          <div className="flex justify-end items-end flex-col mr-2 gap-3">
            <Link to="">
              <BiHeartCircle
                onClick={(e) => change(color == "black" ? "red-500" : "black")}
                className={`text-[1.7rem] text-${color}`}
              />
            </Link>
            <Link to="">
              <AiOutlineMail className="text-2xl" />
            </Link>
            <div className="flex justify-start flex-col ">
            <h2 className="text-2xl pl-4 pt-3 text-blue-500">Organizer name</h2>
            <p className="pl-5 text-slate-500">What he does</p>
            <p className="pl-5">Rating (Stars)</p>
            <p className="pl-5 pt-8 text-sm text-blue-800">Profile: </p>
            <p className="pl-5 text-xs">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores,
              quis officiis? Exercitationem commodi quasi aut nihil eligendi
              illum at vero possimus modi vitae ullam, recusandae rerum aliquam
              id quae. Delectus?
            </p>
            <p className="text-blue-600 underline flex pl-5 pt-2">
              Información de contacto:              
            </p>
            <div className="flex mt-5 gap-2 ml-5">
              <Link to="">
                <BsFacebook
                  onClick={(a) =>
                    change2(color2 == "black" ? "blue-500" : "black")
                  }
                  className={`text-${color2} text-2xl`}
                />
              </Link>
              <Link to="">
                <BsInstagram className="text-2xl " />
              </Link>
              <Link to="" >
                <AiOutlinePhone className="text-2xl"/>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="pt-5">
          <div className="bg-slate-50 shadow-2xl rounded-lg pt-2">
            <p className="text-xl pl-5">Sugerencias</p>
            <p className="flex pl-5 text-slate-500 text-sm"> <Link to=""><AiFillEye className="mt-1 mr-1"/></Link> Solo para ti </p>
            <p className="pl-5 text-sm text-slate-400">(En este lugar se recomendará al usuario poner cierta información para que el perfil quede más llamativo)</p>
          </div>
      </div>


      </main>
    </>
  );
};

export default OrganizerProfile;
