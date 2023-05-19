import { useEffect, useState } from "react";
import { InfoOffer, Loading } from "../../components";
import { useParams } from "react-router-dom";
import { renewToken } from "../../services";
import { OffersT } from "../../types";
import { clientHttp } from "../../services/client";


const SingleOffer = () => {
  const params = useParams();
  const [offer, setOffer] = useState<OffersT>();

  useEffect(()=> {
    renewToken()
    clientHttp.get(`/offers/offers/${params.id}`)
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