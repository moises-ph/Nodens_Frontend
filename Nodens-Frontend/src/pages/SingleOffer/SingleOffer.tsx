import { useEffect, useState } from "react";
import { Loading } from "../../components";
import { useParams } from "react-router-dom";
import axios from "axios";
import { renewToken } from "../../services";
import { OffersT } from "../../types";
import { FaCircle, FaClipboardList } from "react-icons/fa";
import { MdOutlineAttachMoney } from "react-icons/md";


const SingleOffer = () => {
  const params = useParams();
  const client = axios.create({
    baseURL: "http://nodensoffers.c8ckgnaca0gagdcg.eastus.azurecontainer.io",
    headers : { Authorization : `Bearer ${localStorage.getItem('authTokenForTheUser')}` }
  })
  const [offer, setOffer] = useState<OffersT>();
  useEffect(()=> {
    renewToken()
    client.get(`/offers/${params.id}`)
      .then(res=>{console.log(res); setOffer(res.data)})
      .catch(err=>console.log(err))
  }, [])
  if(!offer) return <Loading />
  return (
    <>
      <section className="flex flex-col gap-4 h-screen overflow-y-scroll">
        <div className="px-2 h-[12%] bg-blue-200  pt-4 rounded-b-2xl">
          <h1 className="text-4xl font-semibold text-slate-900">{offer.Title}</h1>
          <p>{offer.Event_Ubication.City} - {offer.Event_Ubication.Town}</p>
        </div>
        <div className="flex flex-col px-2 gap-2">
          <h3 className="text-xl font-medium">Descripcion de Oferta</h3>
          <div className="grid grid-cols-4 gap-3">
            {
              offer.tags.map((tag, i) => {
                return <span key={i} className="border-[1px] border-slate-300 flex justify-center items-center rounded-xl">{tag}</span>
              })
            }
          </div>
          <p>{offer.Description}</p>
          <h4 className="flex items-center font-semibold"><FaClipboardList />Requerimientos</h4>
          <ul>
            {
              offer.Requeriments.map((req, i) => {
                return <li key={i} className="flex items-center gap-1 font-light">- {req.Description}</li>
              })
            }
          </ul>
          <p className="text-slate-500 text-sm">Creacion el {new Date(offer.Creation_Date).toLocaleDateString()}</p>
          <h3 className="text-xl">Vacantes disponibles: {offer.Vacants}</h3>
          <h2 className="text-2xl ">Fecha del Evento {new Date(offer.Event_Date).toLocaleDateString()}</h2>
          <h4 className="text-lg font-medium">Ubicacion:</h4>
          <ul>
            <li>Ciudad: {offer.Event_Ubication.City}</li>
            <li>Barrio: {offer.Event_Ubication.Town}</li>
            <li>Carrera: {offer.Event_Ubication.Career}</li>
            <li>Calle: {offer.Event_Ubication.Street}</li>
            <li>Numero: {offer.Event_Ubication.SiteNumber}</li>
          </ul>
          <h2 className="flex items-center text-2xl text-slate-800 font-semibold">Pago: {offer.Payment}<MdOutlineAttachMoney /></h2>
          <h3>Disponibilidad: {offer.isAvailable ? 'Disponible' : 'No disponible'}</h3>
        </div>
      </section>
    </>
  )
}

export default SingleOffer