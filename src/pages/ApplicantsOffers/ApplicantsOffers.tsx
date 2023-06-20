import { DataTable } from "../OrganizerOffers/TableComponent"
import { TableColums } from "./TableComponents"
import { renewToken } from "../../services" 
import { clientHttp } from "../../services/client"
import { OfferTableT, OffersT } from "../../types"
import { useEffect, useState } from "react"
import { Loading } from "../../components"
import { BsFillBookmarkFill } from "react-icons/bs"
import { MdAssignmentTurnedIn } from "react-icons/md"
import { SavedOfferTableT } from "../../types/savedoffertable"
import { TableColumnsSaved } from "./TableComponents/SavedTableColumns"
import { AxiosResponse } from "axios"


const ApplicantsOffers = ({musicianId} : {musicianId : Number}) => {
  const [postulatedOffers, sepostulatedOffers] = useState<OfferTableT[]>();
  const [areOffersPostulated, setAreOffersPostulated] = useState<boolean>(true);
  const [savedOffers, setSavedOffers] = useState<SavedOfferTableT[]>();
  
  const getPostulatedOffers = async () => {
    await renewToken();
    clientHttp().get("/offers/offers/musician")
      .then(res =>  {
        sepostulatedOffers(res.data);
      })
      .catch(err => console.log(err))
  }

  const getSavedOffers = async () => {
    clientHttp()
      .get("/offers/offers/musician/saved")
      .then((res: AxiosResponse<OffersT[], any>) => {
        let offers: SavedOfferTableT[] = res.data.map((offer: OffersT) => {
          return {
            Title: offer.Title,
            Creation_Date: offer.Creation_Date,
            Event_Date: offer.Event_Date,
            Payment: offer.Payment,
            ApplicantsNumber: offer.Applicants.length,
            Vacants: offer.Vacants,
            isAvailable: offer.isAvailable,
            offerId: offer._id,
            aplied: offer.Applicants.map((offer) => offer.ApplicantId).includes(musicianId),
          } as SavedOfferTableT;
        });
        setSavedOffers(offers);
      })
      .catch((err) => console.log(err));
  }

  useEffect(()=> {
    getPostulatedOffers();
    getSavedOffers();
  }, [])
  if (!postulatedOffers || !savedOffers ) return <Loading />
  return (
    <>
      <section className="pt-8 px-6 flex justify-center gap-2 bg-zinc-100 md:h-[94vh]">
        <div className="w-fit bg-white rounded-xl h-fit p-3 gap-2 flex-col items-start">
          <button
            onClick={() => setAreOffersPostulated(true)}
            className="flex gap-2 text-lg items-center p-2"
          >
            <MdAssignmentTurnedIn
              className={areOffersPostulated ? "" : "text-zinc-500"}
            />
            <span>Mis Ofertas Postuladas</span>
          </button>
          <button
            onClick={() => setAreOffersPostulated(false)}
            className="flex gap-2 text-lg items-center p-2 bg-white rounded-xl"
          >
            <BsFillBookmarkFill
              className={areOffersPostulated ? "text-zinc-500" : ""}
            />
            <span>Mis Ofertas Guardadas</span>
          </button>
        </div>
        <div className="w-3/5 h-fit py-4 px-1 bg-white rounded-xl flex flex-col items-center overflow-y-auto">
          <h1 className="sticky text-xl font-semibold">
            {areOffersPostulated ? "Ofertas Postuladas" : "Ofertas Guardadas"}
          </h1>
          <DataTable
            data={areOffersPostulated ? postulatedOffers : savedOffers}
            columns={areOffersPostulated ? TableColums : TableColumnsSaved as any}
            isLoading={false}
          />
        </div>
      </section>
    </>
  );
}

export default ApplicantsOffers
