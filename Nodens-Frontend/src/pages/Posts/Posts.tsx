import { BsSearch } from "react-icons/bs";
import { PostT } from "../../types";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlinePlus, AiFillHome } from "react-icons/ai"
import { BsSun, BsFillMoonFill } from "react-icons/bs"
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/esm/Button";
import { useEffect, useState } from "react";
import axios, { Axios } from "axios"
import { clientHttp } from "../../services/client";
import { Loading } from "../../components";



const Posts = () => {

  const PosTs = ([
    {
      id: "1",
      name1: "Pepe",
      number: "123123123123",
      texto: "lorem ipsum dolor sit amet",
      img: "https://www.dictionary.com/e/wp-content/uploads/2018/03/Herobrine.jpg"
    },
    {
      id: "1",
      name1: "Pepe",
      number: "123123123123",
      texto: "lorem ipsum dolor sit amet",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbLEfftotnU9DINiemdJG3yjs8NAVC-ivfTA&usqp=CAU"
    },
    {
      id: "1",
      name1: "Pepe",
      number: "123123123123",
      texto: "lorem ipsum dolor sit amet",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbLEfftotnU9DINiemdJG3yjs8NAVC-ivfTA&usqp=CAU"
    },
    {
      id: "1",
      name1: "Pepe",
      number: "123123123123",
      texto: "lorem ipsum dolor sit amet",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbLEfftotnU9DINiemdJG3yjs8NAVC-ivfTA&usqp=CAU"
    },
    {
      id: "1",
      name1: "Pepe",
      number: "123123123123",
      texto: "lorem ipsum dolor sit amet",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbLEfftotnU9DINiemdJG3yjs8NAVC-ivfTA&usqp=CAU"
    },
    {
      id: "1",
      name1: "Pepe",
      number: "123123123123",
      texto: "lorem ipsum dolor sit amet",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbLEfftotnU9DINiemdJG3yjs8NAVC-ivfTA&usqp=CAU"
    },
    {
      id: "1",
      name1: "Pepe",
      number: "123123123123",
      texto: "lorem ipsum dolor sit amet",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbLEfftotnU9DINiemdJG3yjs8NAVC-ivfTA&usqp=CAU"
    }
  ]);

  const url = ('https://nodensgapi.azure-api.net/posts/posts/');

  const [post, setPost] = useState<PostT[]>()

  useEffect(() => {
    axios.get(url)
      .then(res => {
        console.log(res)
        setPost(res.data)
      })
      .catch(err => console.log(err))

  }, [])

  if (!post) {
    return <Loading />
  }
  return (
    <>
      <main className="bg-[#003F5A] absolute w-full h-screen">
        <section className="   w-full ">
          {
            // Map
          }
          <div className="overflow-y-scroll h-[95vh] pt-7">

            {
              PosTs.map((k, index) => (
                <>
                  <section key={index}>
                    <div className="pb-10 pl-10 pt-2">

                      <div className="text-slate-100 flex flex-col ">
                        <h1>
                          {k.id}
                        </h1>
                        <p>
                          {k.name1}
                        </p>
                        <p>
                          {k.number}
                        </p>
                        <img src={k.img} alt="" />
                        <p>
                          {k.texto}
                        </p>
                      </div>
                    </div>
                  </section>
                </>
              ))
            }
          </div>
        </section>
      </main>
    </>
  );
};

export default Posts;

