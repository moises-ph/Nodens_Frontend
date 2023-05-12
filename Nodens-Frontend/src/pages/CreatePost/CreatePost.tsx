import { transform } from "framer-motion";
import { useState } from "react";
import { BsFileEarmarkPost } from "react-icons/bs"
import { Link } from "react-router-dom";
import  Modal  from "react-bootstrap/Modal";
import Button from "react-bootstrap/esm/Button";

const CreatePost = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => (false);
  const handleShow = () => (true);

  return (
    <>
      <main className="bg-slate-900 min-h-screen min-w-full">
        <div className="pt-2 pl-20 ">
          <div className="bg-opacity-10 bg-slate-100 w-44 h-10 rounded-md flex items-center justify-center ">
            <Button variant="primary" onClick={handleShow} className="text-slate-50 pl-2 flex justify-center items-center gap-2 "><Link to=""><BsFileEarmarkPost /></Link>  Crear publicación </Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal</Modal.Title>
              </Modal.Header>
              <Modal.Body>EEEEEo</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="primary" onClick={handleClose}>Save</Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </main>
    </>
  );
};

export default CreatePost;
