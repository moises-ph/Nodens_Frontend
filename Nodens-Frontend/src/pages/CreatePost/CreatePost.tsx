import React from "react";
import { BsFileEarmarkPost } from "react-icons/bs"
import { Link } from "react-router-dom";

const CreatePost = () => {
  return (
    <>
      <main className="bg-slate-900 min-h-screen min-w-full">
        <div className="pt-2 ">
          <div className="bg-opacity-10 bg-slate-100 rounded-md">
            <p className="text-slate-50 pl-2 flex items-center gap-2"><Link to=""><BsFileEarmarkPost /></Link>  Crear publicación : </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default CreatePost;
