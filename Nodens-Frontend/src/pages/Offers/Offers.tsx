import { AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import { BsSearch, BsPersonSquare } from "react-icons/bs"
import { IndexLink, Modal, SingleOffer } from "../../components"
import { OffersT } from "../../types"

const offersTemp: OffersT[] = [
	{
		Title: 'Titulo mas largo para ver que onda',
		Description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus voluptatem exercitationem recusandae accusantium praesentium quisquam commodi explicabo quas possimus nam expedita inventore vel, tempora deserunt impedit numquam provident dolore totam!',
		Creation_Date: new Date(),
		Event_Date: new Date(),
		Payment: 150000,
		OrganizerId: '1',
		Event_Ubication: {
			city: 'Cali',
			Street: '15',
			career: '23b',
			SiteNumber: '#15-48',
			Town: 'Colon'
		},
		Applicant: [{
			ApplicantId: '1',
			PostulationDate: new Date()
		}],
		Img: 'si',
		Requeriments: [{
			description: 'descripcion de los requerimientos 1'
		},
		{
			description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus voluptatem exercitationem recusandae accusantium praesentium quisquam commodi explicabo quas possimus nam expedita inventore vel, tempora deserunt impedit numquam provident dolore totam!'
		},
		{
			description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus voluptatem exercitationem recusandae accusantium praesentium quisquam commodi explicabo quas possimus nam expedita inventore vel, tempora deserunt impedit numquam provident dolore totam!'
		},
		{
			description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus voluptatem exercitationem recusandae accusantium praesentium quisquam commodi explicabo quas possimus nam expedita inventore vel, tempora deserunt impedit numquam provident dolore totam!'
		}
	],
		vacants: 15
	},
	{
		Title: 'Músico con experiencia',
		Description: "Importante grupo musical requiere para su equipo un Músico con conocimientos avanzados en percusión ",
		Creation_Date: new Date(),
		Event_Date: new Date(),
		Payment: 150000,
		OrganizerId: '2',
		Event_Ubication: {
			city: 'Cali',
			Street: '15',
			career: '23b',
			SiteNumber: '#15-48',
			Town: 'Colon'
		},
		Applicant: [{
			ApplicantId: '2',
			PostulationDate: new Date()
		}],
		Img: 'si',
		Requeriments: [{
			description: 'Saber tocar varios instrumentos de percusión'
		}],
		vacants: 15
	},
	{
		Title: 'Oferta 3',
		Description: 'descripcion de la oferta 3',
		Creation_Date: new Date(),
		Event_Date: new Date(),
		Payment: 150000,
		OrganizerId: '3',
		Event_Ubication: {
			city: 'Cali',
			Street: '15',
			career: '23b',
			SiteNumber: '#15-48',
			Town: 'Colon'
		},
		Applicant: [{
			ApplicantId: '3',
			PostulationDate: new Date()
		}],
		Img: 'si',
		Requeriments: [{
			description: 'descripcion de los requerimientos 3'
		}],
		vacants: 15
	},
	{
		Title: 'Oferta 4',
		Description: 'descripcion de la oferta 4',
		Creation_Date: new Date(),
		Event_Date: new Date(),
		Payment: 150000,
		OrganizerId: '4',
		Event_Ubication: {
			city: 'Cali',
			Street: '15',
			career: '23b',
			SiteNumber: '#15-48',
			Town: 'Colon'
		},
		Applicant: [{
			ApplicantId: '4',
			PostulationDate: new Date()
		}],
		Img: 'si',
		Requeriments: [{
			description: 'descripcion de los requerimientos 4'
		}],
		vacants: 15
	},
	{
		Title: 'Oferta 5',
		Description: 'descripcion de la oferta 5',
		Creation_Date: new Date(),
		Event_Date: new Date(),
		Payment: 150000,
		OrganizerId: '5',
		Event_Ubication: {
			city: 'Cali',
			Street: '15',
			career: '23b',
			SiteNumber: '#15-48',
			Town: 'Colon'
		},
		Applicant: [{
			ApplicantId: '5',
			PostulationDate: new Date()
		}],
		Img: 'si',
		Requeriments: [{
			description: 'descripcion de los requerimientos 5'
		}],
		vacants: 15
	},
	{
		Title: 'Oferta 6',
		Description: 'descripcion de la oferta 6',
		Creation_Date: new Date(),
		Event_Date: new Date(),
		Payment: 150000,
		OrganizerId: '6',
		Event_Ubication: {
			city: 'Cali',
			Street: '15',
			career: '23b',
			SiteNumber: '#15-48',
			Town: 'Colon'
		},
		Applicant: [{
			ApplicantId: '6',
			PostulationDate: new Date()
		}],
		Img: 'si',
		Requeriments: [{
			description: 'descripcion de los requerimientos 6'
		}],
		vacants: 15
	},
	{
		Title: 'Oferta 7',
		Description: 'descripcion de la oferta 7',
		Creation_Date: new Date(),
		Event_Date: new Date(),
		Payment: 150000,
		OrganizerId: '7',
		Event_Ubication: {
			city: 'Cali',
			Street: '15',
			career: '23b',
			SiteNumber: '#15-48',
			Town: 'Colon'
		},
		Applicant: [{
			ApplicantId: '7',
			PostulationDate: new Date()
		}],
		Img: 'si',
		Requeriments: [{
			description: 'descripcion de los requerimientos 7'
		}],
		vacants: 15
	},
]

const Offers = () => {
	const [modal, setOpen] = useState(false);
	const [oferta, setOferta] = useState<OffersT | undefined>()
	const [offers,setOffers] = useState(offersTemp);

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
			setOffers(offersTemp);
		}
		else{
			setOffers(offersTemp.filter(value => value.Title.includes(e.current.value)));
		}
	}

	return (
		<>
			<section className="h-full overflow-y-hidden">
				<div className="pt-8 pl-6 fixed h-1/6 flex flex-row gap-4 border-b-[1px] z-10 bg-slate-50 border-solid border-slate-500">
					<IndexLink />
					<label htmlFor="" className="w-[85vw] flex items-center gap-2 h-12 bg-slate-100 text-slate-50 placeholder:text-slate-300 rounded-3xl px-4 shadow-xl">
						<input ref={searchInput} type="text" onChange={()=>{searchOffer(searchInput)}} placeholder="Buscar" className="bg-transparent w-full outline-none text-slate-900" />
						<button>
							<BsSearch onClick={()=>{searchOffer(searchInput)}} className="text-slate-400" />
						</button>
					</label>
					<p className="text-slate-600"><span className="text-slate-800 font-bold">{offers.length}</span> Ofertas para Musicos</p>
				</div>
				<div className="flex flex-col top-[16.666667%] absolute w-2/5 overflow-y-scroll gap-2 p-2">
					{
						offers.map((offer, i)=> {
							return <SingleOffer showModal={showModal} offer={offer} key={i} Key={i.toString()} />
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