import { useEffect, useRef, useState } from "react";
import { FaUser } from "react-icons/fa";
import { GiCancel } from "react-icons/gi"
import { PostT } from "../../types";
import CloudinaryWidget from "../CloudinarySnipet/CloudinaryWidget";
import { renewToken } from "../../services";
import { clientHttp } from "../../services/client";
import Swal from "sweetalert2";
import { Loading } from "../Loading";
import { Timer } from "lucide-react";

const CreatePost = ({profImg, open, setOpen} : {profImg : string, open : boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>>}) => {
  const title = useRef<HTMLInputElement>(null);
  const text = useRef<HTMLTextAreaElement>(null);
  const links = useRef<HTMLInputElement>(null);
  const actualDate = new Date().toISOString().slice(0, 10);
  const [loading, setLoading] = useState<boolean>(false);
  const [foto, setFoto] = useState<string>();
  const [post, setPost] = useState<PostT>({
    text: "",
    likes: [],
    title: '',
    links: [],
    images:  [],
    comments: [],
    date: new Date().toISOString()
  });

  const setting = () => {
    setPost({
      text: text.current!.value,
      likes: [],
      title: '',
      links: [links.current!.value],
      images:  foto ? [foto]: [],
      comments: [],
      date: new Date().toISOString()
    })
  }
 
  const checking = () => {
    if(text.current!.value === "") {
      Swal.fire({
        icon: 'warning',
        text: 'por favor ingresa una descripcion'
      })
    } else {
      let timerInterval: any
      Swal.fire({
        title: 'Publicando tu post.',
        html: 'Danos un momento',
        timer: 10000,
        timerProgressBar: true,
        willClose: () => {
          clearInterval(timerInterval)
        }
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log('I was closed by the timer')
        }
      })
      sendPost();
    }
  }

  const sendPost = async () => {
    setLoading(true);
    await renewToken();
    console.log(post);
    
    clientHttp().post('/posts/posts/new', post)
    .then(res => {
      setLoading(false);
      Swal.fire({
        icon: 'success',
        text: 'Post publicado'
      })
      setOpen(false);
    })
    .catch(err=> {
      console.log(err)
      setLoading(false);
      Swal.fire({
      icon: 'error',
      text: 'Intentalo de nuevo'
    })}
    )
  }

  if(!open) return <></>;
  if(loading) return <Loading />
  return (
    <>
    <section className="fixed z-[100] top-0 left-0 backdrop-blur-sm bg-[rgba(36,44,71,0.68)] flex justify-center items-center h-full overflow-y-scroll w-full pt-12">
      <div className="md:w-2/4 md:h-[90%] w-full h-4/5 rounded-lg bg-slate-100 p-4 flex flex-col gap-4">
        <div className="flex items-center justify-between gap-4 w-full ">
          <div className="flex gap-4 items-center">
            {profImg.length > 0 ? (<img src={profImg} alt="user profile image" className="h-16 object-container rounded-full"/>) 
            : (<FaUser className="h-18 w-8 " />)}
            <div className="h-full flex flex-col gap-1">
              <h2 className="text-2xl font-semibold">Crear Post</h2>
              <p className="font-light text-slate-500">{actualDate}</p>
            </div>
          </div>
          <button className="relative right-1" onClick={()=> setOpen(false)}><GiCancel className="text-2xl text-red-500"/></button>
        </div> 
        <textarea ref={text} onChange={()=> setting()} className="w-full h-[60%] bg-slate-50 placeholder:text-slate-500 text-slate-800" placeholder="Que te gustaria compartir?"></textarea>
        <div className="flex md:flex-row md:gap-0 flex-col justify-around w-full gap-2">
          <CloudinaryWidget sendInfo={setFoto} className="bg-blue-600 text-slate-100 p-2 rounded-lg"/>
          <label className="md:w-3/4 w-full flex gap-2 items-center">Sube un link
            <input type="text" ref={links} onChange={()=> setting()} className="border border-slate-600 rounded-lg px-2 md:w-2/3 w-[75%]" placeholder="Link"/>
          </label>
        </div>
        <div className="flex justify-end">
          <button className="bg-blue-500 text-slate-100 rounded-lg w-1/4 p-2" onClick={()=>checking()}>Publicar</button>
        </div>
      </div>
    </section>
    </>
  )
}

export default CreatePost;
