import { Link } from "react-router-dom"
import { MusiciansPhoto } from "../../images/musicos-PhotoRoom"
import { Testimonios } from "../../components"

const tags: string[] = [
	"Música",
	"Melodía",
	"Ritmo",
	"Instrumento",
	"Cantante",
	"Banda",
	"Concierto",
	"Nota",
	"Armonía",
	"Escala",
	"Acordes",
	"Composición",
	"Género",
	"Letra",
	"Partitura",
	"Interpretación",
	"Sonido",
	"Melancolía",
	"Improvisación",
	"Ritmo cardíaco"
]
function Home() {

  return (
    <>  
      <main className="flex flex-col w-full  min-h-[100vh] pt-8" >        
        <section className="flex flex-col items-center w-full gap-4 pb-4 px-4 mt-10 z-10">          
          <div className="flex flex-col md:flex-row justify-start md:px-[5%] md:items-center gap-8 md:justify-center md:place-self-start md:w-[95%] w-full">
						<h2 className="text-slate-800 text-left text-4xl font-normal md:text-7xl md:w-[40%] w-full">Encuentra tu ritmo laboral con Nodens: Tu puerta al exito musical</h2>
            <div className="flex flex-col items-center md:w-[40vw] bg-transparent">
              <MusiciansPhoto />
            </div>
          </div> 
          
        </section>

				<div className="flex flex-col gap-4 w-full z-10 py-2 bg-zinc-100 md:flex-row md:justify-center">
					<h3 className="text-slate-900 text-4xl font-semibold pl-2 md:text-7xl md:w-[25%] md:h-full md:place-self-center md:font-semibold">Empieza el sueño ideal para ti:</h3>		
					<div className=" grid gap-2 grid-cols-2 px-2 md:w-[40%] md:grid-cols-3 md:py-4">
						{
							tags.map((tag, i) => {
								return <Link to='/login' key={i} className={`rounded-full border w-full h-10 border-zinc-700 flex justify-center items-center text-zinc-700 transition-colors duration-100 hover:bg-zinc-300 ${tag.split(' ').length > 1 ? 'col-span-2' : ''}`}>
									{tag}
								</Link>
							})
						}
					</div>
				</div>

				<div className="bg-blue-100 py-4 px-2 flex flex-col gap-4 md:gap-20 md:flex-row md:justify-center md:h-[40vh] md:items-center">
					<h3 className="text-4xl text-blue-800 font-semibold md:w-[30%] md:text-7xl md:place-self-center">Publica ofertas y encuentra tu musico ideal</h3>
					<Link to='/login' className="rounded-full border-2 w-full h-10 border-blue-800 flex justify-center items-center text-blue-800 font-semibold transition-colors duration-300 hover:bg-blue-300 md:w-[25%] md:h-[20%]">Publicar Oferta</Link>
				</div>

				<div className="h-[79vh] w-full bg-rose-100 ">
						<Testimonios autoSlide={false} autoSlideInterval={3000}/>
				</div>
        
      </main> 
    </>
  )
}

export default Home
