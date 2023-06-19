import { AnimatePresence } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { BsChevronCompactDown, BsFillBookmarkFill, BsSearch } from "react-icons/bs"
import { Filters, InfoOffer, Loading, Modal, SingleOffer } from "../../components"
import { OfferFilter, OffersT } from "../../types"
import { renewToken } from "../../services"
import { clientHttp } from "../../services/client"
import { BsFilterRight, BsArrowRepeat } from "react-icons/bs"
import { Link, useParams } from "react-router-dom"
import {VscSettings} from "react-icons/vsc";
import FilterAccordion from "./FilterAccordion/FilterAccordion"

const Offers = () => {

	const { id } = useParams();

	const [offers,setOffers] = useState<OffersT[] | null>(null);
	const [offerFilter,setOfferFilter] = useState<OfferFilter | null>(null);
	const [offersToDisplay, setOffersDisplay] = useState<OffersT[] | null>(null);

	const getInitialOffers = async () => {
    setOffers(null);
    await renewToken();
		clientHttp().get('/offers/offers')
		  .then(res=>{setOffers(res.data); setOffersDisplay(res.data)})
			.catch(err=>console.log(err)) 
	}

	useEffect(()=> {
		getInitialOffers();
		console.log(id);
	}, []);

	useEffect(()=> {
		if(offers != null){
			setOffersDisplay(offers!.filter(offer => 
				offerFilter != null ?
				(offerFilter!.creationDate != null ? offer.Creation_Date === offerFilter!.creationDate : true) &&
				(offerFilter!.eventDate != null ? offer.Event_Date === offerFilter!.eventDate : true) &&
				(offerFilter!.instrument != "" ? offer.Requeriments.includes({Description: offerFilter!.instrument!}) : true) &&
				(offerFilter!.maxPayment != null ? offer.Payment <= offerFilter!.maxPayment : true) &&
				(offerFilter!.minPayment != null ? offer.Payment >= offerFilter!.minPayment : true)
				: true
			));
		}
	},[offerFilter])

	if(!offers) return <Loading />
	return (
    <>
      <section className="min-h-screen overflow-y-hidden pt-10 flex justify-center bg-zinc-100">
        {!id ? (
          <>
            <div className="bg-white w-[17rem] max-w-[17rem] p-4 rounded-md h-fit mr-5">
              <Link
                to="/applicants-offers"
                className="h-full flex items-center gap-1"
              >
                <BsFillBookmarkFill className="text-zinc-500" />
                <span>Mis Ofertas Guardadas</span>
              </Link>
              <div className="bg-white py-4">
                <FilterAccordion setOfferFilter={setOfferFilter} />
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
        <div
          className={`h-fit flex flex-col ${
            id ? "w-[28.44rem] rounded-tr-none rounded-br-none" : "w-[34.69rem]"
          } overflow-y-scroll rounded-xl bg-white`}
        >
          <div className={`w-full h-fit py-3 pl-3 ${id ? 'bg-blue-500 text-white' : ''}`}>
            <h2 className="text-xl font-semibold">Recomendaciones</h2>
            <p className="font-thin">
              En función de tu perfil y tu historial de búsqueda
            </p>
          </div>
          {offersToDisplay!.length > 0 ? (
            offersToDisplay!.map((offer, i) => {
              return (
                <Link to={`/offers/${offer._id}`}>
                  <SingleOffer
                    offer={offer}
                    key={i}
                    Key={i.toString()}
                    isHomePage={false}
                    id={id}
                  />
                </Link>
              );
            })
          ) : (
            <div>
              <span>No hay ninguna oferta disponible por el momento :(</span>
            </div>
          )}
        </div>
        {id ? (
          <div className="w-[40.75rem]">
            <InfoOffer
              offer={
                offersToDisplay!.find((offer) => offer._id == id) as OffersT
              }
            />
          </div>
        ) : (
          <></>
        )}
      </section>
    </>
  );
}

export default Offers
