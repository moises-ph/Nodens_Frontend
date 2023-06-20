import { AnimatePresence } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { BsChevronCompactDown, BsFillBookmarkFill, BsSearch } from "react-icons/bs"
import { Filters, InfoOffer, Loading, Logo, Modal, SingleOffer } from "../../components"
import { OfferFilter, OffersT } from "../../types"
import { renewToken } from "../../services"
import { clientHttp } from "../../services/client"
import { BsFilterRight, BsArrowRepeat } from "react-icons/bs"
import { Link, useParams } from "react-router-dom"
import {VscSettings} from "react-icons/vsc";
import FilterAccordion from "./FilterAccordion/FilterAccordion"
import Swal from "sweetalert2"

const Offers = ({userName} : {userName : string}) => {

	const { id } = useParams();

	const [offers,setOffers] = useState<OffersT[] | null>(null);
	const [offerFilter,setOfferFilter] = useState<OfferFilter | null>(null);
	const [offersToDisplay, setOffersDisplay] = useState<OffersT[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

	const getInitialOffers = async () => {
    setOffers(null);
    await renewToken();
		clientHttp().get('/offers/offers')
		  .then(res=>{setOffers(res.data); setOffersDisplay(res.data)})
			.catch(err=>console.log(err)) 
	}

  const postulateOffer = (offerId : string) => {
    console.log(offerId);
    setLoading(true);
    clientHttp()
      .put(`/offers/offers/${offerId}`, {
        PostulationDate: new Date().toISOString().slice(0, 10),
        PostulationFullName: userName,
      })
      .then((res) => {
        setLoading(false);
        Swal.fire({
          title: res.data.message,
          icon: "success",
        });
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      }); 
  }

	useEffect(()=> {
		getInitialOffers();
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
      <section className="max-h-screen pt-10 pb-4 flex justify-center bg-zinc-100">
        {loading && (
          <div
            className={`absolute right-4 top-[4.25rem] md:top-[4.75rem] flex items-center justify-center`}
          >
            <div className="w-8 h-8 rounded-[50%] [border-left-style:solid] border-[11.2px] border-double border-[#474bff] animate-spin"></div>
          </div>
        )}
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
          className={`flex flex-col ${
            id ? "w-[28.44rem] rounded-tr-none rounded-br-none" : "w-[34.69rem]"
          } overflow-y-scroll rounded-xl bg-white justify-self-center`}
        >
          <div
            className={`w-full sticky top-0 h-fit py-3 pl-3 ${
              id ? "bg-orange-500 text-white backdrop-blur-3xl" : "bg-white"
            }`}
          >
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
              handlePostulation={postulateOffer}
              offer={
                offersToDisplay!.find((offer) => offer._id == id) as OffersT
              }
            />
          </div>
        ) : (
          <footer className="w-[17rem] flex flex-col items-center font-thin text-zinc-500">
            <Logo dimensions="h-6 w-6" />
            <span>Nodens</span>
            <span>Terminos de Uso</span>
            <span>Politica de Privacidad</span>
            <span>© 2023 Nodens</span>
          </footer>
        )}
      </section>
    </>
  );
}

export default Offers
