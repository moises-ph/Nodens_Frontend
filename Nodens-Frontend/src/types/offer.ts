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
	Requeriments: {description: string}[],
	vacants: number
}
