import { useEffect, useState } from "react";
import { InfoOffer, Loading } from "../../components";
import { useParams } from "react-router-dom";
import { renewToken } from "../../services";
import { OffersT } from "../../types";
import { clientHttp } from "../../services/client";

const SingleOfferApplicant = () => {
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
    <section className="flex flex-col gap-4 h-screen overflow-y-scroll">
        <InfoOffer offer={offer} />
      </section>
  )
}

export default SingleOfferApplicant