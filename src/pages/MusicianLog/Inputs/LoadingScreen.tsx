import React, { useEffect } from 'react'

function LoadingScreen({registerMusician} : { registerMusician : () => void }) {
    useEffect(() => {
        registerMusician();
    })
  return (
    <div className="bg-white transition-all bg-opacity-100 md:h-full rounded-lg w-full lg:w-10/12 flex flex-col items-center justify-center gap-8 py-10 md:py-16 px-24 text-black/90 shadow-xl">
      <h1 className='text-2xl'>Un momento estamos registrandote...</h1>
      <h2 className='font-thin text-xl'>En unos momentos serás redirigido</h2>
      <div className={`flex items-center justify-center`}><div className='w-8 h-8 rounded-[50%] [border-left-style:solid] border-[11.2px] border-double border-[#474bff] animate-spin'></div></div>
    </div>
  );
}

export default LoadingScreen