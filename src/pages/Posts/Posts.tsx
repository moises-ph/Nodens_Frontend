import { PostT } from "../../types";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/esm/Button";
import { useEffect, useState } from "react";
import axios, { Axios } from "axios"
import { clientHttp } from "../../services/client";
import { Loading } from "../../components";
import { FaUser } from "react-icons/fa"




const Posts = ({ profImg }: { profImg: string }) => {

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
      <main className="bg-[#F3F2EF] absolute w-full h-fit">



        <div className="pt-10 flex justify-center items-start gap-10">
          {
            //Mensaje de bienvenida
          }

            <div className="bg-[#FFFFFF] w-[12vw] h-[30vh] rounded-2xl ">
              <p>Bienvenido pa</p>
            </div>

          <div className="bg-[#FFFFFF] h-[12vh] w-[30vw] pt-2 text-center flex justify-center items-start rounded-2xl gap-2">
            {
              //Creaciòn de publicaciones
            }
            {
              profImg.length > 0 ?
                <img src={profImg} alt="" className="h-11 w-12 rounded-xl" />
                :
                <FaUser className="h-10 w-10" />
            }
            <button className="bg-transparent h-[5vh] w-[25vw] border border-zinc-950 rounded-3xl transition-all ease-in-out hover:bg-[#F3F2EF]  hover:duration-200">Crear Publicación</button>
          </div>



          {
            //Páginas que puedes seguir y el footer
          }
            <div className="bg-[#FFFFFF] w-[12vw] h-[30vh] rounded-2xl">
              El footer y Páginas interesantes pa
            </div>
        </div>

        {
          //Recomendaciones
        }
        <div className="flex justify-center translate-y-[-16vh]">
          <div className="bg-[#FFFFFF] w-[30vw] h-[15vh] rounded-2xl">
            <p>Recomendaciones pa</p>
          </div>
        </div>

        <section className="w-full h-fit z-30">
          {
            // Map
          }
          <div className="">

            {
              PosTs.map((k, index) => (
                <>
                  <section key={index}>
                    <div className="pb-10 pt-2 flex justify-center items-center translate-y-[-14vh] ">

                      <div className="text-black bg-[#FFFFFF] w-[30vw] min-h-[60vh] flex flex-col justify-center items-center rounded-xl">
                        <div>
                          {
                            profImg.length > 0 ?
                              <img src={profImg} alt="" className="h-8 w-8 rounded-xl" />
                              :
                              <FaUser className="h-8 w-8" />
                          }
                          <h1>
                            {k.id}
                          </h1>
                          <p>
                            {k.name1}
                          </p>
                          <p>
                            {k.number}
                          </p>
                          <img src={k.img} alt="" className="w-[25vw] h-[35vh]" />
                          <p>
                            {k.texto}
                          </p>
                        </div>
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

