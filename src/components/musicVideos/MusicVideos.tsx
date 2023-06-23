import React, { useRef, useState } from 'react'
import { IoMdAdd } from 'react-icons/io';
import { videoMusician } from '../../services';
import { AiFillCloseCircle } from 'react-icons/ai';

type musicVideosT = {
  videoOpening: boolean,
  setVideoOpening: React.Dispatch<React.SetStateAction<boolean>>,
}

const MusicVideos = ({setVideoOpening, videoOpening}: musicVideosT) => {
  const video = useRef<HTMLInputElement>(null);
  const [videoFile, setVideoFile] = useState<FileList>();
  const sendVideo = () => {
    videoMusician('/musicians/musician/uploadVideo', videoFile!)
  }
  const closeMusicVideo = () => {
    setVideoOpening(false);
  }
  if(!videoOpening) return <></>
  return (
    <div className='fixed z-[10000] top-0 left-0 backdrop-blur-sm bg-[rgba(36,44,71,0.68)] flex justify-center items-center h-full w-full'>
      <div className="h-3/6 overflow-y-scroll w-2/4 lg:w-2/5 bg-slate-100 rounded-lg shadow-lg p-4">
        <div className='flex justify-between items-center h-fit py-2'>
          <h2 className="text-xl font-semibold text-slate-800">Subir video:</h2>
          <button onClick={()=> closeMusicVideo()}><AiFillCloseCircle className='text-red-500 text-2xl'/></button>
        </div>
        <div className='w-full h-[70%] bg-slate-300 rounded-lg border-2 border-slate-500 flex flex-col items-center justify-center cursor-pointer' onClick={()=>video.current?.click()}>
          { videoFile ? <h2>{videoFile[0].name}</h2>
            :<>
            <input type="file" className="hidden" ref={video} onChange={()=> setVideoFile((video.current!.files as FileList))}/>
            <IoMdAdd className='text-8xl text-slate-700 bg-slate-300'/>
            <p className="text-slate-700">Seleccionar video</p>
            </>
          }
        </div>
        <button className='text-center w-full mt-1' onClick={()=> {sendVideo(); closeMusicVideo()}}>Enviar</button>
      </div>
    </div>
  )
}

export default MusicVideos
