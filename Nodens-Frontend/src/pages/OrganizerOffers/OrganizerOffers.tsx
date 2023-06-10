import { useEffect, useState } from "react"
import { Loading } from "../../components";
import { renewToken } from "../../services";
import { clientHttp } from "../../services/client";
import { OfferTableT, OffersT } from "../../types";
import { DataTable } from "./TableComponent";
import { offersColumns } from "./TableComponent";
import { AxiosResponse } from "axios";

const OrganizerOffers = () => {
  const [offers, setOffers] = useState<OffersT[]>([]);
  const [offersData, setOffersData ] = useState<OfferTableT[]>([])
  const [loading, setLoad] = useState<boolean>(true);

  const getOffers = ()=>{
    if(!loading) setLoad(true)
    clientHttp().get('/offers/offers/organizer')
      .then((res : AxiosResponse<OffersT[]>) => {
        console.log(res);
        setOffers(res.data);
        setLoad(false);
      })
      .catch(async err => {
        if(err.response && err.response.status === 401){
          await renewToken();
          getOffers();
        }
      })
  }

  useEffect(()=> {
    getOffers();
  },[])

  useEffect(()=> {
    console.log(offers);
    setOffersData(offers.map((offer : OffersT) : OfferTableT => ({
      Title : offer.Title,
      ApplicantsNumber : offer.Applicants.length,
      Creation_Date : offer.Creation_Date,
      Event_Date : offer.Event_Date,
      isAvailable : offer.isAvailable,
      Payment : offer.Payment,
      Vacants : offer.Vacants,
      offerId : offer._id!
    })))
  }, [offers])

  if(!offers) return <Loading />
  return (
    <>
      <main  className="w-full flex flex-col justify-center pt-[4%] px-4 gap-3">
        <div className="flex flex-col h-fit w-fit gap-2">
          <button onClick={(e) => {setLoad(true); getOffers()}} className="bg-blue-500 rounded p-2 text-slate-200 hover:bg-blue-700 transition-all hover:text-white">Recargar</button>
        </div>
        <DataTable columns={offersColumns} data={offersData} isLoading={loading} />
      </main>
    </>
  )
}

export default OrganizerOffers
