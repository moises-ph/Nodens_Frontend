import { BsSearch } from "react-icons/bs";
import { PostT } from "../../types";
import { BiUserCircle } from "react-icons/bi";
import {  AiOutlinePlus, AiFillHome  } from "react-icons/ai"
import { BsSun, BsFillMoonFill } from "react-icons/bs"
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/esm/Button";
import { useState } from "react";

const posts: PostT[] = [
  {
    IDAuth: "1",
    title: "Vamos a poner algo más largo para ver como se ve",
    content: {
      text: "asdasdasdasdasdasdasdasda o ",
      images: [
        "Jijiji"
      ],
    },
    date: new Date(),
    likes: 20,
  },
  {
    IDAuth: "2",
    title: "Titulo 2",
    content: {
      text: "texto de post 2",
    },
    date: new Date(),
    likes: 20,
  },
  {
    IDAuth: "3",
    title: "Titulo 3",
    content: {
      text: "texto de post 3", 
    },
    date: new Date(),
    likes: 20,
  },
  {
    IDAuth: "4",
    title: "Titulo 4",
    content: {
      text: "texto de post 4",
    },
    date: new Date(),
    likes: 20,
  },
  {
    IDAuth: "5",
    title: "Titulo 5",
    content: {
      text: "texto de post 5", 
    },
    date: new Date(),
    likes: 20,
  },
  {
    IDAuth: "6",
    title: "Titulo 6",
    content: {
      text: "texto de post 6",
    },
    date: new Date(),
    likes: 20,
  },
];

const Posts = () => {
  const [show, setShow] = useState(false);


  return (
    <>
      <main className="bg-slate-50">
        <section className="bg-slate-400 z-50 rounded-b-2xl text-slate-900">
          <div className="pl-3 pt-7 flex gap-20">
            <span className="flex flex-row gap-3 items-center">
              <BiUserCircle className="text-4xl" />
              <p>Nombre de perfil</p>
            </span>
            <Button className="flex items-center text-slate-50">
              <BsFillMoonFill className="w-10"/>
            </Button>
          </div>
          <div className="pt-8 pl-6 shadow-xl rounded-lg h-32">
            <label
              htmlFor=""
              className="w-[85vw] flex items-center gap-2 h-12 bg-slate-200 text-slate-900 placeholder:text-slate-300 rounded-3xl px-4 shadow-xl"
            >
              <input
                type="text"
                placeholder="Buscar"
                className="bg-transparent w-full outline-none"
              />
              <button>
                <BsSearch className="text-slate-900" />
              </button>
            </label>
            <p className="pt-4">{posts.length} Posts </p>
          </div>
        </section>
        <section className=" h-screen w-full">
          
          <div className="pl-3 pr-2  bg-slate-100 min-h-full flex flex-col justify-start items-start pt-3">
          <div className="pt-2 flex justify-center">
            
          </div>
            <div className="flex flex-col text-slate-900 text-start gap-1 min-w-full min-h-full">
              <span className="ml-2 mt-2">{posts[0].IDAuth}</span>              <span className="ml-2 mt-2">{posts[0].title}</span>
              <span className="ml-2 mt-2 ">{posts[0].content.text}</span>
              <span className="ml-2 mt-2 ">{posts[0].content.images}</span>
              <span className="ml-2 mt-2">{posts[0].date.getFullYear()}</span>
              <span className="ml-2 mt-2 mb-2">{posts[0].likes}</span>
            </div>
          </div>
        </section>


        <footer className="h-14 w-full bg-zinc-800 flex justify-center items-center rounded-t-2xl z-50 shadow-2xl shadow-zinc-500">
        <div className="flex flex-row justify-between items-center gap-20">
            <Button
            href="/"
            >
              <AiFillHome className="text-slate-50 text-2xl"/>
            </Button>
             
            </div>
          </footer>
      </main>
    </>
  );
};

export default Posts;

// {
//   IDAuth: "2",
//   title: "Titulo 2",
//   content: {
//     text: "texto de post 2",
//   },
//   date: new Date(),
//   likes: 20,
// }
