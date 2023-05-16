import { useEffect, useState } from "react";
import { InfoOffer, Loading } from "../../components";
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
      <section className="flex flex-col md:items-center w-full gap-4 overflow-y-scroll">
        <InfoOffer offer={offer} />
        
      </section>
    </>
  )
}

export default SingleOffer