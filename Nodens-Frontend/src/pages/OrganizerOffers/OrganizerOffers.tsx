import { useEffect, useState } from "react"
import { Loading } from "../../components";
import { renewToken } from "../../services";
import { Link } from "react-router-dom";
import { clientHttp } from "../../services/client";

const OrganizerOffers = () => {
  const [offers, setOffers] = useState([]);

  useEffect(()=> {
    renewToken()
    clientHttp().get('/offers/offers/organizer')
      .then(res => {console.log(res);setOffers(res.data)})
      .catch(err => console.log(err))
  }, [])

  if(!offers) return <Loading />
  return (
    <>
      <main  className="w-full flex justify-center pt-[2%]">
      <table className="w-[93%] h-4/5 flex flex-col overflow-x-scroll items-centers rounded-3xl shadow-xl mb-14">
          <thead className="sm:w-full w-[180vw] h-[8%]  flex items-center pt-4 bg-slate-700 rounded-t-3xl">
          <tr className="flex flex-row w-full h-full justify-around items-center px-5">
            <td className="w-[16.666%] flex justify-center text-gray-50 text-sm font-bold ">Title</td>
            <td className="w-[16.666%] flex justify-center text-gray-50 text-sm font-bold ">Fecha de Evento</td>
            <td className="w-[16.666%] flex justify-center text-gray-50 text-sm font-bold ">Fecha de Creacion</td>
            <td className="w-[16.666%] flex justify-center text-gray-50 text-sm font-bold ">Pago</td>
            <td className="w-[16.666%] flex justify-center text-gray-50 text-sm font-bold ">Vacantes</td>
            <td className="w-[16.666%] flex justify-center text-gray-50 text-sm font-bold ">Disponibilidad</td>
          </tr>
          </thead>
          <tbody className="overflow-scroll shadow-2xl rounded-b-3xl sm:w-full w-[180vw] h-full flex flex-col items-center bg-teal-600">
            {
              offers.map((off, i) => {
                const {Event_Date, Creation_Date, Title, Payment, Vacants, isAvailable, _id} = off;
                const event_date = new Date(Event_Date).toLocaleDateString()
                const creation_date = new Date(Creation_Date).toLocaleDateString()
                return <Link to={`/offers/${_id}`} className="w-full"  key={_id}><tr className="flex flex-row h-9 items-center w-full justify-around cursor-pointer px-5 transition-all duration-500 ease hover:bg-slate-500/70">
                <td className="w-[16.666%] flex justify-center text-slate-100 text-sm font-bold text-ellipsis overflow-hidden whitespace-nowrap">{Title}</td>
                <td className="w-[16.666%] flex justify-center text-slate-100 text-sm font-bold text-ellipsis overflow-hidden whitespace-nowrap">{event_date}</td>
                <td className="w-[16.666%] flex justify-center text-slate-100 text-sm font-bold text-ellipsis overflow-hidden whitespace-nowrap">{creation_date}</td>
                <td className="w-[16.666%] flex justify-center text-slate-100 text-sm font-bold text-ellipsis overflow-hidden whitespace-nowrap">{Payment}</td>
                <td className="w-[16.666%] flex justify-center text-slate-100 text-sm font-bold text-ellipsis overflow-hidden whitespace-nowrap">{Vacants}</td>
                <td className="w-[16.666%] flex justify-center text-slate-100 text-sm font-bold text-ellipsis overflow-hidden whitespace-nowrap">{isAvailable ? 'Disponible': 'No disponible'}</td>
              </tr>
              </Link>
              })
            }
          </tbody>
        </table>
      </main>
    </>
  )
}

export default OrganizerOffers