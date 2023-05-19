import { BiUserCircle, BiHeartCircle } from "react-icons/bi";
import { AiOutlineMail, AiFillEye, AiOutlinePhone } from "react-icons/ai";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { OrganizerT } from "../../types";
import { Loading } from "../../components";
import { clientHttp } from "../../services/client";

const OrganizerProfile = () => {
  const [organizer, setOrganizer] = useState<OrganizerT>();
  const id = localStorage.getItem("OrganizerId")

  const [color, setColor] = useState("white");
  const change = (e: any) => {
    setColor(e);
  };

  const [color2, setColor2] = useState("white");
  const change2 = (a: any) => {
    setColor2(a);
  };

  useEffect(()=> {    
    clientHttp.get(`/organizers/Organizer/${id}`)
      .then(res => {console.log(res);setOrganizer(res.data)})  
      .catch(err=> console.log(err))
  }, [])

  if (!organizer) return <Loading />
  return (
    <>
      <main className="h-screen overflow-y-scroll fondoorgprof ">
        <div className="pt-10 shadow-2xl">
          <div className="flex  h-[40rem] bg-zinc-500 z-10 bg-opacity-10 rounded-2xl justify-start flex-col shadow-2xl">
            <div className="flex bg-zinc-300 rounded-2xl justify-start w-[100%] bg-opacity-10 h-52">
              <Link to="" className="ml-4 text-9xl">
                <BiUserCircle className="text-black mt-10 z-20" />
              </Link>
            </div>
            <div className="flex justify-end items-end flex-col pt-2 mr-2 gap-3">
              <div className="flex justify-start flex-col ">
                <div className="flex min-w-full justify-between">
                  <div>
                    <h1 className="text-3xl pl-4 pt-3 text-blue-100">{organizer.nombre_empresa}</h1>
                    <h2 className="text-2xl pl-4 pt-3 text-blue-100">
                      {organizer.Name}
                    </h2>
                    <p className="pl-5 text-slate-50">What he does</p>
                    <p className="pl-5 text-slate-50">Rating (Stars)</p>
                  </div>
                  <div className="pt-6 pl-8 gap-2">
                    <Link to="">
                      <BiHeartCircle
                        onClick={(e) =>
                          change(color == "white" ? "red-500" : "white")
                        }
                        className={`text-[1.7rem] text-${color}`}
                      />
                    </Link>
                    <Link to="">
                      <AiOutlineMail className="text-2xl text-slate-50" />
                    </Link>
                  </div>
                </div>
                <p className="pl-5 pt-8 text-sm text-blue-400">Profile: </p>
                <p className="pl-5 text-xs text-slate-50">
                  {organizer.descripcion_empresa}
                </p>
                <p className="text-blue-400 underline flex pl-5 pt-2">
                  Información de contacto:
                </p>
                <div className="flex mt-5 gap-2 ml-5 justify-start">
                  <Link to="">
                    <BsFacebook
                      onClick={(a) =>
                        change2(color2 == "white" ? "blue-500" : "white")
                      }
                      className={`text-${color2} text-2xl`}
                    />
                  </Link>
                  <Link to="">
                    <BsInstagram className="text-2xl text-white" />
                  </Link>
                  <Link to="">
                    <AiOutlinePhone className="text-2xl text-white" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-5">
          <div className="bg-opacity-10 bg-zinc-500 shadow-2xl rounded-lg pt-2">
            <p className="text-xl pl-5 text-slate-50">Sugerencias</p>
            <p className="flex pl-5 text-slate-500 text-sm">
              {" "}
              <Link to="">
                <AiFillEye className="mt-1 mr-1" />
              </Link>{" "}
              Solo para ti{" "}
            </p>
            <p className="pl-5 text-sm text-slate-400">
              (En este lugar se recomendará al usuario poner cierta información
              para que el perfil quede más llamativo)
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default OrganizerProfile;
