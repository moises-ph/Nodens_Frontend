import { BsSearch } from "react-icons/bs";
import { PostT } from "../../types";
import { BiUserCircle } from "react-icons/bi";
import {  AiOutlinePlus, AiFillHome  } from "react-icons/ai"
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

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <main className="bg-black">
        <section className="bg-zinc-800 z-50 rounded-b-2xl text-slate-50">
          <div className="pl-3 pt-7">
            <span className="flex flex-row gap-3 items-center">
              <BiUserCircle className="text-4xl" />
              <p>Nombre de perfil</p>
            </span>
          </div>
          <div className="pt-8 pl-6 shadow-xl rounded-lg h-36">
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
                <BsSearch className="text-slate-400" />
              </button>
            </label>
            <p className="pt-4">{posts.length} Posts </p>
          </div>
        </section>
        <section className=" h-screen w-full">
          
          <div className="pl-3 pr-2  bg-black min-h-full flex flex-col justify-start items-start pt-3">
          <div className="pt-2 flex justify-center">
            
          </div>
            <div className="flex flex-col text-slate-50 text-start gap-1 min-w-full min-h-full">
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
              <Button
                variant="primary"
                onClick={handleShow}
                className="text-slate-900 flex justify-center items-center gap-2"
              >
                <AiOutlinePlus className="text-slate-50 text-3xl"/>
              </Button>
              <Modal
                show={show}
                onHide={handleClose}
                className="min-h-[40rem] bg-slate-500 shadow-inner shadow-neutral-900"
              >
                <Modal.Header closeButton className="">
                  <Modal.Title className="pl-2 pt-2">
                    <div className="bg-slate-50 bg-opacity-25 w-52 rounded-xl">
                      <p className="text-slate-50 text-center">
                        Crea tu propio Post
                      </p>
                    </div>
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body className="pl-2">
                  <p></p>
                </Modal.Body>
                <Modal.Footer className="flex justify-end items-end pt-[32rem] gap-2 pr-2">
                  <Button
                    variant="secondary"
                    onClick={handleClose}
                    className=" bg-zinc-900 w-16 h-8 rounded-2xl flex justify-center items-center text-slate-50"
                  >
                    Close
                  </Button>
                  <Button
                    type="submit"
                    variant="primary"
                    onClick={handleClose}
                    className=" bg-zinc-900 w-16 h-8 rounded-2xl flex justify-center items-center text-slate-50"
                  >
                    Save
                  </Button>
                </Modal.Footer>
              </Modal>
              <Button
              href="/mainprofile"
              >
                <BiUserCircle className="text-slate-50 text-2xl"/>
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
