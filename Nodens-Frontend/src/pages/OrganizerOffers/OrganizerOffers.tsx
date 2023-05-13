import axios from "axios"
import { useEffect, useState } from "react"
import { Loading } from "../../components";
import { renewToken } from "../../services";

const OrganizerOffers = () => {
  const [offers, setOffers] = useState([]);
  const client = axios.create({
    baseURL: "http://nodensoffers.c8ckgnaca0gagdcg.eastus.azurecontainer.io",
    headers : { Authorization : `Bearer ${localStorage.getItem('authTokenForTheUser')}` }
  })

  useEffect(()=> {
    renewToken()
    client.get('/offers/organizer')
      .then(res=> {console.log(res);setOffers(res.data)})
      .catch(err=> console.log(err))
  }, [])

  if(!offers) return <Loading />
  return (
    <>
      <main  className="w-full flex justify-center pt-[2%]">
      <table className="w-[93%] h-4/5 flex flex-col items-centers rounded-3xl shadow-xl mb-14">
          <thead className="w-full h-[8%] flex items-center pt-4 bg-slate-700 rounded-t-3xl">
          <tr className="flex flex-row w-full h-full justify-around items-center px-5">
            <td className="w-[16.666%] flex justify-center text-gray-50 text-sm font-bold ">Title</td>
            <td className="w-[16.666%] flex justify-center text-gray-50 text-sm font-bold ">Fecha de Evento</td>
            <td className="w-[16.666%] flex justify-center text-gray-50 text-sm font-bold ">Fecha de Creacion</td>
            <td className="w-[16.666%] flex justify-center text-gray-50 text-sm font-bold ">Pago</td>
            <td className="w-[16.666%] flex justify-center text-gray-50 text-sm font-bold ">Vacantes</td>
            <td className="w-[16.666%] flex justify-center text-gray-50 text-sm font-bold ">Disponibilidad</td>
          </tr>
          </thead>
          <tbody className="overflow-scroll shadow-2xl rounded-b-3xl w-full h-full flex flex-col items-center bg-teal-600">
            {
              offers.map((off, i) => {
                const {Event_Date, Creation_Date} = off;
                const event_date = new Date(Event_Date).toLocaleDateString()
                const creation_date = new Date(Creation_Date).toLocaleDateString()
                return <tr className="flex flex-row h-9 items-center w-full justify-around cursor-pointer px-5 transition-all duration-500 ease hover:bg-slate-500/70" key={i}>
                <td className="w-[16.666%] flex justify-center text-slate-100 text-sm font-bold text-ellipsis overflow-hidden whitespace-nowrap">{off.Title}</td>
                <td className="w-[16.666%] flex justify-center text-slate-100 text-sm font-bold text-ellipsis overflow-hidden whitespace-nowrap">{event_date}</td>
                <td className="w-[16.666%] flex justify-center text-slate-100 text-sm font-bold text-ellipsis overflow-hidden whitespace-nowrap">{creation_date}</td>
                <td className="w-[16.666%] flex justify-center text-slate-100 text-sm font-bold text-ellipsis overflow-hidden whitespace-nowrap">{off.Payment}</td>
                <td className="w-[16.666%] flex justify-center text-slate-100 text-sm font-bold text-ellipsis overflow-hidden whitespace-nowrap">{off.Vacants}</td>
                <td className="w-[16.666%] flex justify-center text-slate-100 text-sm font-bold text-ellipsis overflow-hidden whitespace-nowrap">{off.isAvailable ? 'Disponible': 'No disponible'}</td>
              </tr>
              })
            }
          </tbody>
        </table>
      </main>
    </>
  )
}

export default OrganizerOffers