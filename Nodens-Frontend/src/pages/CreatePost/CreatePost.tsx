import { transform } from "framer-motion";
import { useState } from "react";
import { BsFileEarmarkPost } from "react-icons/bs"
import { BiUserCircle } from "react-icons/bi"
import { Link } from "react-router-dom";
import  Modal  from "react-bootstrap/Modal";
import Button from "react-bootstrap/esm/Button";

const CreatePost = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow (false);
  const handleShow = () => setShow (true);

  return (
    <>
      <main className="bg-gradient-to-br from-orange-400 to-fuchsia-700 min-h-screen min-w-full">
     
        <div className="pt-2 flex justify-center" >
          <div className="bg-opacity-10 bg-slate-900 w-full h-10 rounded-md flex items-center justify-center "> 
          <p><BiUserCircle className="text-slate-50 text-4xl mr-3" /></p>
            <Button variant="primary" onClick={handleShow} className="text-slate-50 pl-2 flex justify-center items-center gap-2"><p><BsFileEarmarkPost className="text-2xl"/></p> 
             Crear publicación </Button>
            <Modal show={show} onHide={handleClose} className="min-h-[40rem] bg-gradient-to-br from-orange-400 to-fuchsia-700 bg-opacity-100 shadow-inner shadow-blue-900">
              <Modal.Header closeButton className="">
                <Modal.Title></Modal.Title>
              </Modal.Header>
              <Modal.Body className="pl-2"><p className="text-slate-50">EEEEEo</p></Modal.Body>
              <Modal.Footer className="flex justify-end items-end pt-[32rem] gap-2 pr-2">
                <Button variant="secondary" onClick={handleClose} className="pr-4 bg-red-200 w-14 text-center">Close</Button>
                <Button variant="primary" onClick={handleClose} className="pr-2 bg-green-200 w-14 text-center">Save</Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </main>
    </>
  );
};

export default CreatePost;
