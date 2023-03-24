import { AnimatePresence } from "framer-motion"
import { useState } from "react"
import { BsSearch, BsPersonSquare } from "react-icons/bs"
import { Modal } from "../../components"
import { OffersT } from "../../types"

const offers: OffersT[] = [
	{
		Title: 'Titulo mas largo para ver que onda',
		Description: 'descripcion de la oferta 1',
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
		}],
		vacants: 15
	},
	{
		Title: 'Oferta 2',
		Description: 'descripcion de la oferta 2',
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
			description: 'descripcion de los requerimientos 2'
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

	const showModal = (oferta: OffersT) => {
		modal ? setOpen(false) : setOpen(true);
		setOferta(oferta)
	}

	return (
		<>
			<section className="h-full overflow-y-hidden">
				<div className="pt-8 pl-6  h-32 flex flex-col gap-4 border-b-[1px] border-solid border-slate-500">
					<label htmlFor="" className="w-[85vw] flex items-center gap-2 h-12 bg-slate-100 text-slate-50 placeholder:text-slate-300 rounded-3xl px-4 shadow-xl">
						<input type="text" placeholder="Buscar" className="bg-transparent w-full outline-none text-slate-900" />
						<button>
							<BsSearch className="text-slate-400" />
						</button>
					</label>
					<p className="text-slate-600"><span className="text-slate-800 font-bold">{offers.length}</span> Ofertas para Musicos</p>
				</div>
				<div className="flex flex-col w-full h-screen overflow-y-scroll">
					{
						offers.map((offer, i)=> {
							return <div onClick={()=>showModal(offer)} key={i} className="w-full h-44 flex flex-col p-4 border-b-[1px] border-solid border-slate-300 gap-1">
								<div className="flex gap-2">
									<BsPersonSquare className="h-8 w-8 text-sky-500"/>
									<h3 className="text-xl font-semibold">{offer.Title}</h3>
								</div>
								<p><span className="text-slate-500">Ubicacion: </span>{offer.Event_Ubication.city}, {offer.Event_Ubication.Town}</p>
								<p>Pago: {offer.Payment}</p>
								<p className="text-sm">Publicado el {offer.Creation_Date.toDateString()}</p>
								<p>{offer.vacants} vacantes disponibles</p>
							</div>
						})
					}
				</div>
				<AnimatePresence>
					{modal && <Modal open={modal} oferta={oferta}/>}
				</AnimatePresence>
			</section>
		</>
	)
}

export default Offers