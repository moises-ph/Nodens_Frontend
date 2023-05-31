import { useEffect, useState } from "react"
import { Loading } from "../../components";
import { renewToken } from "../../services";
import { Link } from "react-router-dom";
import { clientHttp } from "../../services/client";
import { OfferTableT, OffersT } from "../../types";
import { DataTable } from "./TableComponent/OffersTable";
import { offersColumns } from "./TableComponent";
import { AxiosResponse } from "axios";

const OrganizerOffers = () => {
  const [offers, setOffers] = useState<OffersT[]>([]);
  const [offersData, setOffersData ] = useState<OfferTableT[]>([])

  const getOffers = ()=>{
    clientHttp().get('/offers/offers/organizer')
      .then((res : AxiosResponse<OffersT[]>) => {
        console.log(res);
        setOffers(res.data)
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
      Vacants : offer.Vacants
    })))
  }, [offers])

  if(!offers) return <Loading />
  return (
    <>
      <main  className="w-full flex justify-center pt-[2%]">
        <DataTable columns={offersColumns} data={offersData} />
      </main>
    </>
  )
}

export default OrganizerOffers