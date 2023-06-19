import { AnimatePresence } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { BsChevronCompactDown, BsFillBookmarkFill, BsSearch } from "react-icons/bs"
import { Filters, Loading, Modal, SingleOffer } from "../../components"
import { OffersT } from "../../types"
import { renewToken } from "../../services"
import { clientHttp } from "../../services/client"
import { BsFilterRight, BsArrowRepeat } from "react-icons/bs"
import { Link } from "react-router-dom"
import {VscSettings} from "react-icons/vsc";

const Offers = () => {
	const [modal, setOpen] = useState(false);
	const [oferta, setOferta] = useState<OffersT | undefined>()
	const [offers,setOffers] = useState<OffersT[] | null>(null);
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const searchInput = useRef<HTMLInputElement>(null);

	const [filter, setFilter] = useState<boolean>(false);

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
			<section className="h-full overflow-y-hidden pt-10 flex justify-center gap-5 bg-zinc-100">
				<div className="bg-white w-[17rem] max-w-[17rem] p-4 rounded-md h-fit">
					<Link to="/applicants-offers" className="h-full flex items-center gap-1">
						<BsFillBookmarkFill className="text-zinc-500" />
						<span>Mis Ofertas Guardadas</span>
					</Link>
					<div className="bg-white py-4">
						<button className="w-fit flex items-center gap-1" onClick={()=> setFilter(!filter)}>
							<VscSettings className="h-5 w-5" />
							<h2 className="text-xl">Filtrar ofertas</h2>
							<BsChevronCompactDown className={`transition-all duration-300 filter ${filter ? 'rotate-180' : ''}`} />
						</button>
						<div className={filter ? '' : 'hidden'}>
							<div className="flex flex-col gap-4 mb-6 ">
							<label className="flex flex-col gap-2 font-thin ">Por Pago
								<input type='number' placeholder="Pago minimo" className="rounded-lg px-2 border-[1px] border-slate-500"/>
								<input type='number' placeholder="Pago Maximo" className="rounded-lg px-2 border-[1px] border-slate-500"/>
							</label>
							<label className="flex flex-col gap-2 font-thin ">Por Requerimiento:
								<select className="rounded-lg px-2 border-[1px] border-slate-500">
								<optgroup>
									<option value="">Instrumento</option>
									<option value="Guitarra">Guitarra</option>
									<option value="Bajo">Bajo</option>
									<option value="Bateria">Bateria</option>
									<option value="Piano">Piano</option>
									<option value="Congas">Congas</option>
									<option value="Bongo">Bongo</option>
									<option value="Saxofon">Saxofon</option>
									<option value="Timbal">Timbal</option>
									<option value="Voz">Voz</option>
									<option value="Trompeta">Trompeta</option>
								</optgroup>
								</select>
							</label>
							<label className="flex flex-col gap-2 font-thin ">Por Fecha de creacion: 
								<input type='date' placeholder="fecha de creacion" className="rounded-lg px-2 border-[1px] border-slate-500"/>
							</label>
							<label className="flex flex-col gap-2 font-thin ">Por Fecha del Evento:
								<input type='date' placeholder="fecha de evento" className="rounded-lg px-2 border-[1px] border-slate-500"/>
							</label>
							</div>
							<div className="flex justify-evenly gap-4 ">
							<button className="rounded-md w-1/2 p-2 bg-red-500 text-slate-100">Cancelar</button>
							<button className="rounded-md w-1/2 p-2 bg-green-500 text-slate-100">Filtrar</button>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col pt-3 w-[38rem] overflow-y-scroll gap-2 p-4 rounded-xl bg-white">
					<div className="w-full h-fit py-3">
						<h2 className="text-xl font-semibold">Recomendaciones</h2>
						<p className="font-thin">En función de tu perfil y tu historial de búsqueda</p>
					</div>
					{
						offers.map((offer, i)=> {
							return <SingleOffer showModal={showModal} redirect={null} offer={offer} key={i} Key={i.toString()} isHomePage={false} /> 
						})
					}
				</div>
				{/* <AnimatePresence>
					{modal && <Modal open={modal} closeModal={closeModal} oferta={oferta}/>}
				</AnimatePresence> */}
			</section>
		</>
	)
}

export default Offers
