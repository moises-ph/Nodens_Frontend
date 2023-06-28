import { useRef, useState } from "react";
import { FaUser } from "react-icons/fa";
import { PostT } from "../../types";
import CloudinaryWidget from "../CloudinarySnipet/CloudinaryWidget";

const CreatePost = ({profImg, open}) => {
  const [post, setPost] = useState<PostT>({
    text: "",
    likes: 0,
    title: "",
    links: [],
    images: [],
    comments: [],
    date: new Date().toISOString(),
  });
  const title = useRef<HTMLInputElement>(null);
  const text = useRef<HTMLTextAreaElement>(null);
  const links = useRef<HTMLInputElement>(null);
  const actualDate = new Date().toISOString().slice(0, 10);
  const [foto, setFoto] = useState();
  if(!open) return <></>;
  return (
    <>
    <section className="fixed z-[10000] top-0 left-0 backdrop-blur-sm bg-[rgba(36,44,71,0.68)] flex justify-center items-center h-full overflow-y-scroll w-full pt-12">
      <div className="md:w-2/4 md:h-[90%] rounded-lg bg-slate-100 p-4 flex flex-col gap-4">
        <div className="flex items-center gap-4">
          {profImg.length > 0 ? (<img src={profImg} alt="user profile image" className="h-16 object-container rounded-full"/>) 
          : (<FaUser className="h-18 w-8 " />)}
          <div className="h-full flex flex-col gap-1">
            <h2 className="text-2xl font-semibold">Crear Post</h2>
            <p className="font-light text-slate-500">{actualDate}</p>
          </div>
        </div> 
        <label className="flex gap-4 ">Titulo
          <input type="text" ref={title} className="border border-slate-600 rounded-lg px-2"/>
        </label>
        <textarea ref={text} className="w-full h-[60%] bg-slate-100 placeholder:text-slate-500 text-slate-800" placeholder="Que te gustaria compartir?"></textarea>
        <div className="flex justify-around w-full">
          <CloudinaryWidget sendInfo={setFoto} className="bg-blue-600 text-slate-100 p-2 rounded-lg"/>
          <label className="w-3/4 flex gap-2 items-center">Sube un link
            <input type="text" ref={links} className="border border-slate-600 rounded-lg px-2" placeholder="Link"/>
          </label>
        </div>
        <div className="flex justify-end">
          <button className="bg-blue-500 text-slate-100 rounded-lg w-1/4 p-2">Publicar</button>
        </div>
      </div>
    </section>
    </>
  )
}

export default CreatePost;
