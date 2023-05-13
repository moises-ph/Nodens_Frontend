import { useEffect, useState } from "react";
import { Loading } from "../../components";
import { useParams } from "react-router-dom";
import axios from "axios";
import { renewToken } from "../../services";
import { OffersT } from "../../types";

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
      <section>
        <h1>{offer.Title}</h1>
        <p>{offer.Event_Ubication.City} - {offer.Event_Ubication.Town}</p>
      </section>
    </>
  )
}

export default SingleOffer