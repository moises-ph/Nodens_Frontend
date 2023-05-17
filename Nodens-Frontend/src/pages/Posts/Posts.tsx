import { BsSearch } from "react-icons/bs";
import { PostT } from "../../types";
import { BiUserCircle } from "react-icons/bi";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/esm/Button";
import { useState } from "react";

const posts: PostT[] = [
  {
    IDAuth: "1",
    title: "Titulo 1",
    content: {
      text: "texto de post 1",
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
      <section>
        <div className="pt-8 pl-6 shadow-xl h-40">
          <label
            htmlFor=""
            className="w-[85vw] flex items-center gap-2 h-12 bg-slate-100 text-slate-50 placeholder:text-slate-300 rounded-3xl px-4 shadow-xl"
          >
            <input
              type="text"
              placeholder="Buscar"
              className="bg-transparent w-full outline-none text-slate-900"
            />
            <button>
              <BsSearch className="text-slate-400" />
            </button>
          </label>
          <p>{posts.length} Posts </p>
        </div>
      </section>
      <main className="">
        <div className="pt-2 flex justify-center">
          <div className="bg-opacity-10 bg-slate-900 w-full h-10 rounded-md flex items-center justify-center ">
            <p>
              <BiUserCircle className="text-slate-900 text-4xl mr-3" />
            </p>
            <Button
              variant="primary"
              onClick={handleShow}
              className="text-slate-900 pl-2 flex justify-center items-center gap-2"
            >
              Crear publicación{" "}
            </Button>
            <Modal
              show={show}
              onHide={handleClose}
              className="min-h-[40rem] bg-slate-500 shadow-inner shadow-neutral-900"
            >
              <Modal.Header closeButton className="">
                <Modal.Title className="pl-2 pt-2">
					<div className="bg-slate-50 bg-opacity-25 w-52 rounded-xl">
						<p className="text-slate-50 text-center">Crea tu propio Post</p> 
					</div>
				</Modal.Title>
              </Modal.Header>
              <Modal.Body className="pl-2">
				
                <p className="text-slate-50">Publicá algo, mamaguebooooo</p>
				
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
          </div>
        </div>
      </main>
    </>
  );
};

export default Posts;
