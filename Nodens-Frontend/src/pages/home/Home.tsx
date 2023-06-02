import { Link } from "react-router-dom"
import { OffersT } from "../../types";
import { useState } from "react";
import { Logo } from "../../components"
import { SingleOffer } from "../../components";
import hands from "../../assets/Captura desde 2023-05-30 15-58-21.png"


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


function Home() {

	interface FormHome{
		instrument : string,
		ubication : string
	}

	const [oferta, setOferta] = useState<OffersT | undefined>()
	const [offers,setOffers] = useState<OffersT[]>([]);

	const handleSubmit = (e:any)=>{
		e.preventDefault();
		const form : FormData = new FormData(e.target);
		const data = Object.fromEntries(form);
		setOffers(offersTemp.filter(value =>data.ubication.toString().length > 0 ? value.Event_Ubication.City.includes(data.ubication.toString()) : true && data.instrument.toString().length > 0 ? value.Requeriments.filter(req => req.Description.includes(data.instrument.toString())) : true));
	}

  return (
    <>  
      <main className="flex flex-col w-full  min-h-[100vh] pt-8" >
        <div className="fixed h-full w-full blur-[2px]">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className="absolute z-0 mt-[-10%] ml-4" viewBox="0 0 500 500" width="30%" id="blobSvg"><defs><linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style={{stopColor: "rgb(225,93,18)"}}></stop><stop offset="100%" style={{stopColor: "rgb(235,217,200)"}}></stop></linearGradient></defs><path id="blob" fill="url(#gradient)"><animate attributeName="d" dur="10000ms" repeatCount="indefinite" values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"></animate></path></svg>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className="absolute z-0 mt-[80%] ml-[-20%]" viewBox="0 0 500 500" width="30%" id="blobSvg"><defs><linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style={{stopColor: "rgb(225,93,18)"}}></stop><stop offset="100%" style={{stopColor: "rgb(235,217,200)"}}></stop></linearGradient></defs><path id="blob" fill="url(#gradient)"><animate attributeName="d" dur="10000ms" repeatCount="indefinite" values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"></animate></path></svg>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className="absolute z-0 mt-[100%] ml-[80%]" viewBox="0 0 500 500" width="60%" id="blobSvg"><defs><linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style={{stopColor: "rgb(225,93,18)"}}></stop><stop offset="100%" style={{stopColor: "rgb(235,217,200)"}}></stop></linearGradient></defs><path id="blob" fill="url(#gradient)"><animate attributeName="d" dur="10000ms" repeatCount="indefinite" values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"></animate></path></svg>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className="absolute z-0 mt-32 ml-[70%]" viewBox="0 0 500 500" width="30%" id="blobSvg"><defs><linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style={{stopColor: "rgb(225,93,18)"}}></stop><stop offset="100%" style={{stopColor: "rgb(235,217,200)"}}></stop></linearGradient></defs><path id="blob" fill="url(#gradient)"><animate attributeName="d" dur="10000ms" repeatCount="indefinite" values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"></animate></path></svg>        
        </div>        
        <section className="flex flex-col items-center w-full gap-4 pb-4 px-4 mt-10 z-10">          
          <div className="flex flex-col md:flex-row justify-start md:px-[5%] md:items-center gap-4 md:place-self-start md:w-[95%] w-full">
            <div className="flex flex-col items-center md:w-[40vw] bg-transparent">
              <Logo dimensions="h-[25vh] w-[38w] md:h-[30vh] w-[28vw] "/>
              <h1 className="text-2xl font-semibold text-slate-100">NODENS</h1>
            </div>
            <p className="text-slate-100 text-center text-xl">Encuentra tu ritmo laboral con Nodens: Tu puerta al exito musical</p>
          </div> 
          <p className="text-xl text-slate-200">Encuentra tu oportunidad aquí!</p>
          <form onSubmit={handleSubmit} className="flex flex-col items-center w-full gap-5">
            <div className="flex md:flex-row flex-col justify-center items-center w-full gap-5">
              <input name="instrument" className="bg-slate-200 rounded-md w-10/12 md:w-1/3 h-9 p-3 border-solid border-2 border-slate-500" placeholder="Qué interpretas?" />
              <input name="ubication" className="bg-slate-200 rounded-md w-10/12 md:w-1/3 h-9 p-3 border-solid border-2 border-slate-500" placeholder="Dónde?" />
            </div>
            <button type="submit" className="bg-[#E15D12]  py-2 w-10/12 md:w-[68%] rounded-lg text-slate-200 font-semibold hover:bg-[#a10bd8] transition">Buscar Trabajos</button>
          </form>
        </section>
        <div className="flex flex-col self-center top-[16.666667%] md:w-5/6 w-full gap-2 p-2 z-10">
			    {
				    offers.length > 0 ? 
				    offers.map((offer, i)=> {
    					return <Link to="/login"><SingleOffer showModal={null} redirect={()=>{}} offer={offer} key={i} Key={i.toString()} isHomePage={true} /></Link>
		  		  }) 
			    	: 
				    <>
					    <div className="text-center self-center"><p className="text-base text-slate-300">Realiza una Búsqueda para que encuentres tus oportunidades</p></div>
    				</>
		    	}
    		</div>

        <section className="z-10">
          <div className="h-[60vh] md:h-[50vh] md:place-self-center md:px-[8%]  w-full bg-transparent p-2 flex gap-[6%] items-center">
            <img src={hands} className="w-[49%] h-[45vh] object-cover shadow-2xl rounded-md"/>
            <div className="flex flex-col gap-4 w-[45%]">
              <h3 className="text-2xl text-slate-100">Quienes Somos?</h3>
              <p className="text-slate-100">
                Nodens es una plataforma que ayuda a musicos emergentes a encontrar empleo,
                al mismo tiempo que ayuda a personas que requieran servicios musicales a 
                encontrar sus musicos ideales.
              </p>
            </div>
          </div>
        </section>
      </main> 
    </>
  )
}

export default Home
