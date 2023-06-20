import { Link } from "react-router-dom"
import { MusiciansPhoto } from "../../images/musicos-PhotoRoom"
import quienes_placeholder from "../../images/quienes_placeholder.png"
import { Logo, NavRes, Testimonios } from "../../components"
import { Nav } from "react-bootstrap"
import { HiMenu } from "react-icons/hi"
import { useState } from "react"

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
  const [showNav, setShowNav] = useState<boolean>(false);
  return (
    <>  
    <NavRes />
        <header className="fixed w-full flex justify-between items-center text-slate-100 py-4 px-4 bg-slate-900 shadow-lg z-50 md:hidden">
          <Link to='/' className='cursor-pointer'><h1 className="text-2xl flex items-center"><Logo dimensions='h-7 w-7'/> Nodens</h1></Link>
          <button onClick={()=>setShowNav(true)}><HiMenu /></button>
        </header>
        <Nav inView={showNav} setShowNav={setShowNav} />
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
					<h3 className="text-4xl text-blue-800 font-semibold md:w-[40%] md:text-7xl md:place-self-center">Publica ofertas y encuentra tu musico ideal</h3>
					<Link to='/login' className="rounded-full border-2 w-full h-10 border-blue-800 flex justify-center items-center text-blue-800 font-semibold transition-colors duration-300 hover:bg-blue-300 md:w-[25%] md:h-[20%]">Publicar Oferta</Link>
				</div>

				<div className="h-[79vh] w-full bg-rose-100 ">
						<Testimonios autoSlide={false} autoSlideInterval={3000}/>
				</div>

                <div className="flex flex-col gap-4 py-4 bg-zinc-100 h-fit w-full">
                    <h2 className="text-center text-4xl font-medium md:text-5xl">A quien esta dirigido Nodens?</h2>
                    <p className="text-center font-light text-xl">Tanto si eres un musico como alguien que disfruta de ver musica en vivo </p>
                    <div className="flex flex-col items-center gap-4">
                        <h3 className="text-xl text-red-800 font-medium">Musicos</h3>
                        <Link to='/registro' className="rounded-full border w-4/5 md:w-2/5 h-10 border-blue-700 flex justify-center items-center text-blue-700 transition-colors duration-100 hover:bg-blue-300 ">Encuentra tus primeras oportunidades</Link>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <h3 className="text-xl text-red-800 font-medium">Organizadores</h3>
                        <Link to='/registro' className="rounded-full border w-4/5 md:w-2/5 h-10 border-blue-700 flex justify-center p-4 items-center text-blue-700 text-center transition-colors duration-100 hover:bg-blue-300 ">Encuentra tu acompañamiento musical ideal</Link>

                    </div>
                </div>

                <div className="flex h-fit w-full bg-red-100">
                    <div className="flex flex-col py-4 px-2 gap-4 md:w-2/4 md:justify-center md:items-center md:px-16">
                        <h2 className="text-4xl font-medium text-center">Quienes Somos?</h2>
                        <p className="text-xl font-light text-justify">
                            Nodens es una plataforma que ayuda a musicos emergentes a encontrar empleo,
                            al mismo tiempo que ayuda a personas que requieran servicios musicales a 
                            encontrar sus musicos ideales. 
                        </p>
                    </div>
                    <img src={quienes_placeholder} className="hidden md:block h-full w-2/4 object-cover"/>
                </div>
        
      </main> 
    </>
  )
}

export default Home
