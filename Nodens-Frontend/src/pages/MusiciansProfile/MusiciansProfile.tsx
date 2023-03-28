import { BsPersonSquare } from "react-icons/bs"
import { Link } from "react-router-dom"

const MusiciansProfile = () => {
  return (
    <>
        <main>
          <div className='pl-2'>
            <p className='text-3xl pt-5'>Profile</p>
            <BsPersonSquare className='text-6xl mt-8'/>
            <div className='flex justify-center items-center flex-col gap-3 pb-4 text-xl'>
                <p className="w-28 text-center ">SEBASTIÁN GARCÍA</p>
                <p>ARMENIA QUINDÍO</p>
            </div>
            </div>
            <div className="flex justify-evenly items-center">
            <button className="h-7 w-28 bg-slate-50 border border-slate-900 rounded-md shadow-black shadow-2xl">Aspiracion $</button>
            <button className="h-7 w-28 bg-green-600 text-slate-50 border border-slate-900  rounded-md">CONTACTAR</button>
            </div>
        </main>
    </>
  )
}

export default MusiciansProfile