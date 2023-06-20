export type OffersT = {
	IdAuth?: any,
	Title: string,
	_id?: string,
	Description: string,
	Creation_Date: Date,
	Event_Date: Date,
	Payment: number,
	OrganizerId: string,
	Event_Ubication: {
		City: string,
		Street: string,
		Career: string,
		SiteNumber: string,
		Town: string
	},
	Applicants: [{
		ApplicantId: string,
		PostulationDate: Date
	}],
	Img: string,
	Requeriments: {Description: string}[],
	Vacants: number,
	isAvailable : boolean,
	tags: string[],
	saves : string[]
}
