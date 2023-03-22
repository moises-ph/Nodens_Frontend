import { BsSearch } from "react-icons/bs"

export type OffersT = {
	Title: string,
	Description: string,
	Creation_Date: Date,
	Event_Date: Date,
	Payment: number,
	OrganizerId: string,
	Event_Ubication: {
		city: string,
		Street: string,
		career: string,
		SiteNumber: string,
		Town: string
	},
	Applicant: [{
		ApplicantId: string,
		PostulationDate: Date
	}],
	Img: string,
	Requeriments: [{
		description: string
	}],
	vacants: number
}

const offers: OffersT[] = [
	{
		Title: 'Oferta 1',
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
	return (
		<>
			<section>
				<div className="pt-8 pl-6 shadow-xl h-40">
					<label htmlFor="" className="w-[85vw] flex items-center gap-2 h-12 bg-slate-100 text-slate-50 placeholder:text-slate-300 rounded-3xl px-4 shadow-xl">
						<input type="text" placeholder="Buscar" className="bg-transparent w-full outline-none text-slate-900" />
						<button>
							<BsSearch className="text-slate-400" />
						</button>
					</label>
					{/* <p>{offers.length} Posts</p> */}
				</div>
			</section>
		</>
	)
}

export default Offers