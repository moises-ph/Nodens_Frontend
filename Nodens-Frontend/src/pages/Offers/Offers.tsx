
import { AnimatePresence } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { BsSearch } from "react-icons/bs"
import { IndexLink, Loading, Modal, SingleOffer } from "../../components"
import { OffersT } from "../../types"
import { renewToken } from "../../services"
import { clientHttp } from "../../services/client"

const Offers = () => {
	const [modal, setOpen] = useState(false);
	const [oferta, setOferta] = useState<OffersT | undefined>()
	const [offers,setOffers] = useState<OffersT[]>([]);

	useEffect(()=> {
		renewToken();
		clientHttp().get('/offers/offers')
		  .then(res=>{console.log(res); setOffers(res.data)})
			.catch(err=>console.log(err))
	}, [])

	const searchInput = useRef(null);

	const showModal = (oferta: OffersT) => {
		modal ? null : setOpen(true);
		setOferta(oferta)
	}

	const closeModal = () => {
		setOpen(false);
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
			<section className="h-full overflow-y-hidden">
				<div className="pt-8 pb-3 fixed h-min md:h-1/6 w-full flex flex-col md:flex-row ls gap-4 border-b-[1px] z-10 bg-slate-50 border-solid border-slate-500">
					<div className="flex flex-row gap-4 m-0 h-min left-0">
						<IndexLink />
						<label htmlFor="" className="md:w-[85vw] w-[80%] flex items-center justify-between gap-2 h-12 bg-slate-100 text-slate-50 placeholder:text-slate-300 rounded-3xl px-4 shadow-xl">
							<input ref={searchInput} type="text" onChange={()=>{searchOffer(searchInput)}} placeholder="Buscar" className="bg-transparent md:w-full outline-none text-slate-900" />
							<button>
								<BsSearch onClick={()=>{searchOffer(searchInput)}} className="text-slate-400" />
							</button>
						</label>
					</div>
					<p className="text-slate-600 pl-6"><span className="text-slate-800 font-bold">{offers.length}</span> Ofertas para Musicos</p>
				</div>
				<div className="flex flex-col top-[29%] md:top-[22.666667%] pt-3 absolute w-full md:w-2/5 overflow-y-scroll gap-2 p-2">
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
		</>
	)
}

export default Offers
