import { AnimatePresence } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { BsSearch } from "react-icons/bs"
import { Filters, Loading, Modal, SingleOffer } from "../../components"
import { OffersT } from "../../types"
import { renewToken } from "../../services"
import { clientHttp } from "../../services/client"
import { BsFilterRight, BsArrowRepeat } from "react-icons/bs"

const Offers = () => {
	const [modal, setOpen] = useState(false);
	const [oferta, setOferta] = useState<OffersT | undefined>()
	const [offers,setOffers] = useState<OffersT[] | null>(null);
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const searchInput = useRef<HTMLInputElement>(null);

	const getOffersByTag = async () => {
		await renewToken();
		clientHttp().put("/offers/offers", {
			Tags: [searchInput.current!.value]
		})
		.then(res => {
			console.log(res);
			setOffers(res.data);
		})
		.catch(err => {
			console.log(err)
		})
	}

	const getInitialOffers = async () => {
    setOffers(null);
    await renewToken();
		clientHttp().get('/offers/offers')
		  .then(res=>{console.log(res); setOffers(res.data)})
			.catch(err=>console.log(err))
	}

	useEffect(()=> {
		getInitialOffers();
	}, []);

	const showModal = (oferta: OffersT) => {
		modal ? null : setOpen(true);
		setOferta(oferta)
	}

	const closeModal = () => {
		setOpen(false);
	}

	const openFilters = () => {
		setIsOpen(true);
	}

	const searchOffer = (e:any)=>{
		console.log(e.current.value);
		if(e.current.value.length === 0){
			setOffers(offers);
		}
		else{
			setOffers(offers!.filter(value => value.Title.includes(e.current.value)));
		}
	}

	if(!offers) return <Loading />
	return (
		<>
			<section className="h-full overflow-y-hidden ">
				<div className="flex flex-col md:top-[25.666667%] pt-3 md:absolute w-full md:w-2/5 overflow-y-scroll gap-2 p-2">
					{
						offers.map((offer, i)=> {
							return <SingleOffer showModal={showModal} redirect={null} offer={offer} key={i} Key={i.toString()} isHomePage={false} /> 
						})
					}
				</div>
				<AnimatePresence>
					{modal && <Modal open={modal} closeModal={closeModal} oferta={oferta}/>}
				</AnimatePresence>
			</section>
			<Filters isOpen={isOpen} setOffers={setOffers} getOffers={getInitialOffers} offers={offers} setIsOpen={setIsOpen}/>
		</>
	)
}

export default Offers
