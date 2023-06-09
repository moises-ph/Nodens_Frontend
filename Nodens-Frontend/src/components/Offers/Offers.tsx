
import { AnimatePresence } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { BsSearch } from "react-icons/bs"
import { Filters, IndexLink, Loading, Modal, SingleOffer } from "../../components"
import { OffersT } from "../../types"
import { renewToken } from "../../services"
import { clientHttp } from "../../services/client"

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
			setOffers(offers.filter(value => value.Title.includes(e.current.value)));
		}
	}

	if(!offers) return <Loading />
	return (
		<>
			<section className="h-full overflow-y-hidden ">
				<div className="pt-8 pb-3 h-min md:h-1/6 w-full md:fixed flex flex-col justify-center  ls gap-4 border-b-[1px] z-10 bg-slate-50 border-solid border-slate-500">
					<div className="flex flex-col md:flex-row gap-4 m-0 h-min pl-4">
						<label htmlFor="" className="md:w-[85vw] w-[90%] flex items-center justify-between gap-2 h-12 bg-slate-100 text-slate-50 placeholder:text-slate-300 rounded-3xl px-4 shadow-xl">
							<input ref={searchInput} type="text" placeholder="Buscar por Tag" className="bg-transparent w-full outline-none text-slate-900" />
							<button>
								<BsSearch onClick={()=>{getOffersByTag()}} className="text-slate-400" />
							</button>
						</label>
						<p className="text-slate-600"><span className="text-slate-800 font-bold">{offers.length}</span> Ofertas para Musicos</p>
					</div>
          <div>
					<button className="place-self-start ml-4"onClick={()=> openFilters()}>Filtros</button>
          <button onClick={()=> getInitialOffers()}>Recargar ofertas</button>
          </div>
				</div>
				<div className="flex flex-col md:top-[22.666667%] pt-3 md:absolute w-full md:w-2/5 overflow-y-scroll gap-2 p-2">
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