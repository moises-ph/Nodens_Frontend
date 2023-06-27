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
      <main className="bg-[#F3F2EF] pt-10 flex justify-center items-start absolute w-full h-fit gap-8 overflow-y-hidden">
        <div className="flex flex-col bg-white justify-center border-solid border-black/10 border-[1px] rounded-2xl ">
          {profImg.length > 0 ? (
            <img
              src={profImg}
              alt=""
              className="h-[8rem] object-contain rounded-full"
            />
          ) : (
            <FaUser className="h-8 w-8" />
          )}
          <p className="text-sm">
            Bienvenido <span className="text-sm">{nameProf}</span>
          </p>
        </div>

        <section className="w-1/3 h-fit max-h-[89vh] flex flex-col items-center overflow-y-auto gap-2">
          <div className="bg-white h-fit w-full px-3 py-2 text-center flex flex-col rounded-2xl gap-2 border-solid border-[1px] border-black/10">
            <div className="flex items-center justify-between gap-1">
              {profImg.length > 0 ? (
                <img
                  src={profImg}
                  className="rounded-full h-[4rem] object-contain"
                />
              ) : (
                <FaUser></FaUser>
              )}
              <input className="w-full border-solid border-[1px] border-black/10 rounded-2xl h-[2rem]" />
            </div>
          </div>
          <div className="w-full flex flex-col before:w-[97%] before:self-center before:h-[1.5px] before:bg-black/30">
            {PosTs.map((k, index) => (
              <>
                <div key={index}>
                  <div className="pt-2 flex justify-center items-center">
                    <div className="border-solid border-black/10 border-[1px] text-black bg-white w-full min-h-[60vh] pl-2 pr-2 pb-4 pt-4 flex flex-col items-center rounded-xl ">
                      <div>
                        <p className="pl-1 underline">{k.name1}</p>
                        <p>{renderedText}</p>
                        <button
                          className="text-blue-500 underline"
                          onClick={toggleText}
                        >
                          {showFull ? "Acortar" : "Mostrar Completo"}
                        </button>
                        <img src={k.img} alt="" className="w-fit h-fit" />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </section>
        <footer className="bg-white w-[12vw] h-[30vh] rounded-2xl border-solid border-black/10 border-[1px]">
          El footer y Páginas interesantes pa
        </footer>
      </main>
    </>
  );
};

export default Posts;

