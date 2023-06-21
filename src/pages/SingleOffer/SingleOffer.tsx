import { useEffect, useState } from "react";
import { InfoOffer, Loading } from "../../components";
import { useParams } from "react-router-dom";
import { renewToken } from "../../services";
import { OffersT } from "../../types";
import { clientHttp } from "../../services/client";
import { AxiosError } from "axios";


const SingleOffer = () => {
  const params = useParams();
  const [offer, setOffer] = useState<OffersT>();

  const getSingleOffer = () => {
    clientHttp().get(`/offers/offers/${params.id}`)
      .then(res=>{console.log(res); setOffer(res.data)})
      .catch(async (err : AxiosError<{message : string}>)=>{
        if(err.response!.status === 401){
          await renewToken();
          getSingleOffer();
        }
      })
  }

  useEffect(()=> {
    getSingleOffer();
  }, [])
  if(!offer) return <Loading />
  return (
    <>
      <section className="flex flex-col md:items-center w-full gap-4 overflow-y-scroll">
        <InfoOffer handleSaveOffer={(id : string) =>{}} isMusician={false} handlePostulation={(id:string) => {return;}} isLoading={false} offer={offer} />
        
      </section>
    </>
  )
}

export default SingleOffer