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
      id: "1",
      name1: "Till Lindemann",
      number: "123123123123",
      texto: "Till Lindemann, born on January 4, 1963, is a German musician, singer, and songwriter. He is best known as the lead vocalist and frontman of the industrial metal band Rammstein.",
      img: "https://64.media.tumblr.com/d58888c4500919054beca278d1cc91a5/5355a5c07980f540-7e/s1280x1920/1d26ad8ea4908b7e1d5ed03f842de499e22a25a8.jpg"
    },
    {
      id: "2",
      name1: "Angus Young",
      number: "123123123123",
      texto: "Angus Young, born on March 31, 1955, is a Scottish-born Australian musician and songwriter. He is best known as the co-founder, lead guitarist, and songwriter of the legendary rock band AC/DC.",
      img: "https://149353296.v2.pressablecdn.com/wp-content/uploads/2017/01/AngusDC-e1484469134375-622x381.jpg"
    },
    {
      id: "3",
      name1: "Dimebag Darrell",
      number: "123123123123",
      texto: "Kobe Bryant was a professional basketball player who played for the Los Angeles Lakers in the National Basketball Association (NBA). He was born on August 23, 1978, in Philadelphia, Pennsylvania, and tragically passed away on January 26, 2020, in a helicopter crash in Calabasas, California.",
      img: "https://files2.soniccdn.com/images/articles/amp/4716.jpg"
    },
    {
      id: "4",
      name1: "Lemmy Kilmister",
      number: "123123123123",
      texto: "Lemmy Kilmister, born Ian Fraser Kilmister on December 24, 1945, was a legendary British musician and songwriter. He is best known as the founder, lead vocalist, bassist, and primary songwriter of the iconic rock band Motörhead.",
      img: "https://images11.eitb.eus/multimedia/images/2015/12/29/1844296/lemmywantsyou_foto610x342.jpg"
    },
    {

      id: "5",
      name1: "Dave Mustaine",
      number: "123123123123",
      texto: "Dave Mustaine, born David Scott Mustaine on September 13, 1961, is an American musician, singer, and songwriter. He is best known as the founder, lead guitarist, and primary songwriter of the influential heavy metal band Megadeth.",
      img: "https://149353296.v2.pressablecdn.com/wp-content/uploads/2019/09/Megadeth-Dave-Mustaine.jpg"
    },
    {
      id: "6",
      name1: "Manowar",
      number: "123123123123",
      texto: "Manowar is an American heavy metal band known for their epic sound, powerful lyrics, and strong emphasis on themes of mythology, warfare, and fantasy. The band was formed in 1980 by bassist Joey DeMaio and guitarist Ross (The Boss) Friedman, and they have since become one of the most iconic and influential bands in the genre.",
      img: "https://lastfm.freetls.fastly.net/i/u/ar0/70045c55c18ac02e19574cdca3bf522f.jpg"
    },
    {
      id: "7",
      name1: "Guns N' Roses",
      number: "123123123123",
      texto: "Guns N' Roses is an American rock band that was formed in Los Angeles, California, in 1985. The band achieved tremendous success in the late 1980s and early 1990s, becoming one of the most popular and influential rock bands of their time.",
      img: "https://indiehoy.com/wp-content/uploads/2020/09/guns-n-roses.jpg"
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

            <div className="bg-[#FFFFFF] w-[12vw] h-[30vh] rounded-2xl pl-2 pr-2 pt-2 justify-start flex flex-col">
            {
                            profImg.length > 0 ?
                              <img src={profImg} alt="" className="h-fit w-fit rounded-xl" />
                              :
                              <FaUser className="h-8 w-8" />
                          }
            <p>Hola, Biendenido {
            nameProf.length > 0 ?
            <p>{nameProf}</p>
            :
            <p>User</p>
            }</p>
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

                      <div className="text-black bg-[#FFFFFF] w-[30vw] min-h-[60vh] pl-2 pr-2 pb-4 pt-4 flex flex-col items-center rounded-xl">
                        <div>
                     
                          <h1>
                            {k.id}
                          </h1>
                          <p>
                            {k.name1}
                          </p>
                          <p>
                            {k.number}
                          </p>                      
                          <img src={k.img} alt="" className="w-fit h-fit" />                       
                          <p className="text-center">
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

