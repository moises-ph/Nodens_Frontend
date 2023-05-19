import { AnimatePresence } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { BsSearch } from "react-icons/bs"
import { IndexLink, Loading, Modal, SingleOffer } from "../../components"
import { OffersT } from "../../types"
import { renewToken } from "../../services"
import { clientHttp } from "../../services/client"

const offersTemp: OffersT[] = [
	{
		Title: 'Titulo mas largo para ver que onda',
		Description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus voluptatem exercitationem recusandae accusantium praesentium quisquam commodi explicabo quas possimus nam expedita inventore vel, tempora deserunt impedit numquam provident dolore totam!',
		Creation_Date: new Date(),
		Event_Date: new Date(),
		Payment: 150000,
		OrganizerId: '1',
		Event_Ubication: {
			City: 'Cali',
			Street: '15',
			Career: '23b',
			SiteNumber: '#15-48',
			Town: 'Colon'
		},
		Applicant: [{
			ApplicantId: '1',
			PostulationDate: new Date()
		}],
		Img: 'si',
		Requeriments: [{
			Description: 'descripcion de los requerimientos 1'
		},
		{
			Description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus voluptatem exercitationem recusandae accusantium praesentium quisquam commodi explicabo quas possimus nam expedita inventore vel, tempora deserunt impedit numquam provident dolore totam!'
		},
		{
			Description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus voluptatem exercitationem recusandae accusantium praesentium quisquam commodi explicabo quas possimus nam expedita inventore vel, tempora deserunt impedit numquam provident dolore totam!'
		},
		{
			Description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus voluptatem exercitationem recusandae accusantium praesentium quisquam commodi explicabo quas possimus nam expedita inventore vel, tempora deserunt impedit numquam provident dolore totam!'
		}
	],
		Vacants: 15,
		isAvailable : true,
		tags : []
	},
	{
		Title: 'Músico con experiencia',
		Description: "Importante grupo musical requiere para su equipo un Músico con conocimientos avanzados en percusión ",
		Creation_Date: new Date(),
		Event_Date: new Date(),
		Payment: 150000,
		OrganizerId: '2',
		Event_Ubication: {
			City: 'Cali',
			Street: '15',
			Career: '23b',
			SiteNumber: '#15-48',
			Town: 'Colon'
		},
		Applicant: [{
			ApplicantId: '2',
			PostulationDate: new Date()
		}],
		Img: 'si',
		Requeriments: [{
			Description: 'Saber tocar varios instrumentos de percusión'
		}],
		Vacants: 15,
		isAvailable : true,
		tags : []
	},
	{
		Title: 'Oferta 3',
		Description: 'descripcion de la oferta 3',
		Creation_Date: new Date(),
		Event_Date: new Date(),
		Payment: 150000,
		OrganizerId: '3',
		Event_Ubication: {
			City: 'Cali',
			Street: '15',
			Career: '23b',
			SiteNumber: '#15-48',
			Town: 'Colon'
		},
		Applicant: [{
			ApplicantId: '3',
			PostulationDate: new Date()
		}],
		Img: 'si',
		Requeriments: [{
			Description: 'descripcion de los requerimientos 3'
		}],
		Vacants: 15,
		isAvailable : true,
		tags : []
	},
	{
		Title: 'Oferta 4',
		Description: 'descripcion de la oferta 4',
		Creation_Date: new Date(),
		Event_Date: new Date(),
		Payment: 150000,
		OrganizerId: '4',
		Event_Ubication: {
			City: 'Cali',
			Street: '15',
			Career: '23b',
			SiteNumber: '#15-48',
			Town: 'Colon'
		},
		Applicant: [{
			ApplicantId: '4',
			PostulationDate: new Date()
		}],
		Img: 'si',
		Requeriments: [{
			Description: 'descripcion de los requerimientos 4'
		}],
		Vacants: 15,
		isAvailable : true,
		tags : []
	},
	{
		Title: 'Oferta 5',
		Description: 'descripcion de la oferta 5',
		Creation_Date: new Date(),
		Event_Date: new Date(),
		Payment: 150000,
		OrganizerId: '5',
		Event_Ubication: {
			City: 'Cali',
			Street: '15',
			Career: '23b',
			SiteNumber: '#15-48',
			Town: 'Colon'
		},
		Applicant: [{
			ApplicantId: '5',
			PostulationDate: new Date()
		}],
		Img: 'si',
		Requeriments: [{
			Description: 'descripcion de los requerimientos 5'
		}],
		Vacants: 15,
		isAvailable : true,
		tags : []
	},
	{
		Title: 'Oferta 6',
		Description: 'descripcion de la oferta 6',
		Creation_Date: new Date(),
		Event_Date: new Date(),
		Payment: 150000,
		OrganizerId: '6',
		Event_Ubication: {
			City: 'Cali',
			Street: '15',
			Career: '23b',
			SiteNumber: '#15-48',
			Town: 'Colon'
		},
		Applicant: [{
			ApplicantId: '6',
			PostulationDate: new Date()
		}],
		Img: 'si',
		Requeriments: [{
			Description: 'descripcion de los requerimientos 6'
		}],
		Vacants: 15,
		isAvailable : true,
		tags : []
	},
	{
		Title: 'Oferta 7',
		Description: 'descripcion de la oferta 7',
		Creation_Date: new Date(),
		Event_Date: new Date(),
		Payment: 150000,
		OrganizerId: '7',
		Event_Ubication: {
			City: 'Cali',
			Street: '15',
			Career: '23b',
			SiteNumber: '#15-48',
			Town: 'Colon'
		},
		Applicant: [{
			ApplicantId: '7',
			PostulationDate: new Date()
		}],
		Img: 'si',
		Requeriments: [{
			Description: 'descripcion de los requerimientos 7'
		}],
		Vacants: 15,
		isAvailable : true,
		tags : []
	},
]


const Offers = () => {
	const [modal, setOpen] = useState(false);
	const [oferta, setOferta] = useState<OffersT | undefined>()
	const [offers,setOffers] = useState(offersTemp);

	useEffect(()=> {
		renewToken();
		clientHttp.get('/offers/offers')
		  .then(res=>console.log(res))
			.catch(err=>console.log(err))
	})

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
				<div className="flex flex-col top-[18%] md:top-[16.666667%] pt-3 absolute w-full md:w-2/5 overflow-y-scroll gap-2 p-2">
					{
						offers.map((offer, i)=> {
							return offer.isAvailable ? <SingleOffer showModal={showModal} redirect={null} offer={offer} key={i} Key={i.toString()} isHomePage={false} /> : null
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