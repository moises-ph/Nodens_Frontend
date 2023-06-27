import { PostT } from "../../types";
import { useEffect, useState } from "react";
import axios from "axios"
import { Loading } from "../../components";
import { BiImageAdd, BiLink } from "react-icons/bi"
import { FaUser } from "react-icons/fa"
import banner from '../../images/banner.png'

const Posts = ({ profImg, nameProf }: { profImg: string, nameProf: string }) => {
  const url = ('https://nodensgapi.azure-api.net/posts/posts/');

  const [posts, setPosts] = useState<PostT[]>()

  const getPosts = () => {
      axios.get(url)
      .then(res => {
        console.log(res)
        setPosts(res.data)
      })
      .catch(err => console.log(err))
  }
  useEffect(() => {
    getPosts();
  }, [])

  if (!posts) {
    return <Loading />
  }
  return (
    <>
      <main className="bg-[#F3F2EF] pt-6 flex flex-col md:flex-row justify-center items-start absolute w-full h-fit min-h-screen gap-6 overflow-y-hidden">
        <div className="flex flex-col w-full md:w-[16%] min-h-[20vh] h-fit bg-white border-solid border-black/10 border-[1px] rounded-2xl gap-4">
          <img src={banner} alt="banner" className="absolute z-0 md:w-[16%] md:h-[14%] md:rounded-t-lg md:object-cover"/>
          {profImg.length > 0 ? (
            <img
              src={profImg}
              alt=""
              className="h-28 object-contain rounded-full z-10 mt-6"
            />
          ) : (
            <FaUser className="h-28 w-8 " />
          )}
          <p className="text-sm z-10 w-full text-center">
            {nameProf}
          </p>
        </div>

        <section className="md:w-2/4 w-full h-fit md:max-h-[89vh] flex flex-col items-center md:overflow-y-auto gap-2">

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
              <button className="w-full border-solid border-[1px] border-black/10 rounded-2xl h-[2rem] flex justify-start pl-4 font-normal">Crear Post </button>
            </div>
            <div className="flex justify-evenly">
              <button className="flex items-center gap-2 font-semibold"><BiImageAdd className="text-green-500 text-2xl"/> Imagen</button>
              <button className="flex items-center gap-2 font-semibold"><BiLink className="text-blue-500 text-2xl"/> Link</button>
            </div>
          </div>

          <div className="w-full flex flex-col h-fit gap-4">

            {posts.map((k, index) => (
              <div key={index} className="border-solid border-black/10 border-[1px] text-black bg-white w-full h-fit pl-2 pr-2 py-4 flex flex-col items-center rounded-xl ">
                <div className="flex flex-col items-start w-full">
                  <p className="text-xl font-semibold">{k.title}</p>
                  <span className="font-light text-sm">{k.date.slice(0, 10)}</span>
                  <p>{k.text}</p>
                  <img src={k.images[0]} alt="" className="w-full h-full " />
                </div>
              </div>
            ))}

          </div>
        </section>
        <footer className="bg-white w-[15%] h-[30vh] rounded-2xl border-solid border-black/10 border-[1px]">
          El footer y Páginas interesantes pa
        </footer>
      </main>
    </>
  );
};

export default Posts;

