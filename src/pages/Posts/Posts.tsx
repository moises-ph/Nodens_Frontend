import { PostT } from "../../types";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/esm/Button";
import { useEffect, useState } from "react";
import axios, { Axios } from "axios"
import { clientHttp } from "../../services/client";
import { Loading } from "../../components";
import { FaUser } from "react-icons/fa"




const Posts = ({ profImg, nameProf }: { profImg: string, nameProf: string }) => {



  const PosTs = ([
    {
      name1: "Estación 23 Orquesta  ",
      texto: "Orquesta de musica perfecta para acompañar eventos. Tocamos música bailable ",
      img: "https://scontent.feoh4-4.fna.fbcdn.net/v/t39.30808-6/311231530_5592339954154507_3832962615092256505_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeH8Er1DrFUWpwoQN9BjbZTEIVYsDdXjT80hViwN1eNPzUxkx6DsErwxPAJh31JAV-suf0Ekw1zJHZMcjEWB2Eki&_nc_ohc=e9j1iQSdTn8AX--wU2R&_nc_ht=scontent.feoh4-4.fna&oh=00_AfCqUzfi_xnbeZFIxwZ_JO6oxKBXddVooWChcIanIJQwLg&oe=649EA469"
    },
    {
      name1: "Angus Young",
      texto: "Guitarrista experimentado con más de 10 años de experiencia en la industria musical",
      img: "https://149353296.v2.pressablecdn.com/wp-content/uploads/2017/01/AngusDC-e1484469134375-622x381.jpg"
    },
    {
      name1: "Dimebag Darrell",
      texto: "Guitarrista experimentado con más de 10 años de experiencia en la industria musical",
      img: "https://files2.soniccdn.com/images/articles/amp/4716.jpg"
    },
    {
      name1: "Lemmy Kilmister",
      texto: "Bajista experimentado con más de 10 años de experiencia en la industria musical",
      img: "https://images11.eitb.eus/multimedia/images/2015/12/29/1844296/lemmywantsyou_foto610x342.jpg"
    },
    {

      name1: "Dave Mustaine",
      texto: "Guitarrista experimentado con más de 10 años de experiencia en la industria musical",
      img: "https://149353296.v2.pressablecdn.com/wp-content/uploads/2019/09/Megadeth-Dave-Mustaine.jpg"
    },
    {
      name1: "Manowar",
      texto: "Banda experimentada con más de 10 años de experiencia en la industria musical",
      img: "https://lastfm.freetls.fastly.net/i/u/ar0/70045c55c18ac02e19574cdca3bf522f.jpg"
    },
    {
      name1: "Guns N' Roses",
      texto: "Banda experimentada con más de 10 años de experiencia en la industria musical",
      img: "https://indiehoy.com/wp-content/uploads/2020/09/guns-n-roses.jpg"
    }
  ]);

  const url = ('https://nodensgapi.azure-api.net/posts/posts/');
  const [fullText, setFullText] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")
  const [showFull, setShowFull] = useState(false)

  const shortenText = (text: any, maxLength: any) =>{
      if(text.length <= maxLength) {
      return text;
      }
      return text.substring(0, maxLength) + '...';
  }


    const toggleText = () => {
        setShowFull(!showFull)
    };

    const renderedText = showFull ? fullText : shortenText(fullText, 30 )

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

          <div className="bg-[#FFFFFF] w-[12vw] h-fit rounded-2xl pl-2 pr-2 pt-2 justify-start flex flex-col">
            {
              profImg.length > 0 ?
                <img src={profImg} alt="" className="h-[4rem] w-fit rounded-full" />
                :
                <FaUser className="h-8 w-8" />
            }
            <p className="text-sm">Hola {
              nameProf.length > 0 ?
                <p className="text-sm">{nameProf}</p>
                :
                <p>User</p>
            }</p>
            <p className="text-sm">Bienvenido a NODENS</p>
          </div>

          <div className="bg-[#FFFFFF] h-[12vh] w-[30vw] pt-2 text-center flex justify-center items-start rounded-2xl gap-2">
            {
              //Creaciòn de publicaciones
            }
            {
              profImg.length > 0 ?
                <img src={profImg} alt="" className="h-[5rem] w-fit rounded-full pl-1" />
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

                      <div className="text-black bg-[#FFFFFF] w-[30vw] min-h-[60vh] pl-2 pr-2 pb-4 pt-4 flex flex-col items-center rounded-xl shadow-2xl">
                        <div>
                          <p className="pl-1 underline">
                            {k.name1}
                          </p>
                          <p>{renderedText}</p>
                          <button className="text-blue-500 underline" onClick={toggleText}>{showFull ? "Acortar" : "Mostrar Completo"}</button>
                          <img src={k.img} alt="" className="w-fit h-fit" />
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

