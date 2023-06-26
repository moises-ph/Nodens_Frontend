import { useState, useEffect } from "react"
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"
import luisa from '../../images/luisa.jpg'
import marcos from '../../images/marcos.jpeg'
import sofia from '../../images/sofia.jpg'
import juan from '../../images/juan.avif'

type SlideT = {
  person: string,
  instrument: string,
  testimonium: string,
  img: string
}

const slides: SlideT[] = [
  {
    testimonium: "Gracias a Nodens, encontré audiciones para orquestas y conjuntos musicales. Obtener la oportunidad de tocar como violinista en una orquesta reconocida ha sido un hito en mi carrera y me ha permitido crecer profesionalmente",
    person: "Luisa",
    instrument: " violinista",
    img: luisa
  },
  {
    testimonium: "Utilizar Nodens me ha brindado la posibilidad de conectarme con otros músicos y formar parte de bandas y grupos musicales. Gracias a ello, he tenido la oportunidad de participar en giras y tocar en festivales importantes",
    person: "Marcos",
    instrument: "bajista",
    img: marcos
  },
  {
    testimonium: "Nodens me ha ayudado a encontrar colaboraciones con otros músicos, como en presentaciones en vivo. Gracias a estas oportunidades, mi habilidad como guitarrista ha sido reconocida y he podido expandir mi red de contactos en la industria musical",
    person: "Sofía",
    instrument: "guitarrista",
    img: sofia
  },
  {
    testimonium: "Descubrir Nodens fue clave para mi carrera como percusionista. A través de ella, he conseguido participar en sesiones de grabación para artistas reconocidos y he sido contratado para tocar en eventos y espectáculos de gran envergadura",
    person: "Juan Carlos",
    instrument: "percusionista",
    img: juan
  },
]

const 
Testimonios = ({ autoSlide = false, autoSlideInterval = 3000 }: { autoSlide: boolean, autoSlideInterval: number}) => {
  const [curr, setCurr] = useState(0)

  const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
  const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [])

  return (
    <div className="overflow-hidden relative h-full text-slate-800">
      <h2 className="text-4xl font-semibold text-center pt-4">Testimonios:</h2>
      <div className="flex transition-transform ease-out duration-500 w-[400vw]" style={{ transform: `translateX(-${curr * 100}vw)` }}>
        {slides.map((test, i)=> {
          return <div key={i} className="w-[100vw] flex flex-col-reverse items-center pt-4 px-2 md:flex-row md:items-center md:justify-center md:gap-12">
            <div className="px-2 md:w-2/5 flex flex-col md:gap-4">
              <h4 className="text-2xl font-semibold md:text-4xl">{test.person}</h4>
              <span className="text-sm text-slate-600 md:text-base">~ {test.instrument}</span>
              <p className="font-mono text-justify md:w-2/3 md:text-xl">"{test.testimonium}"</p>
            </div>
            <img src={test.img} alt="" className="rounded-full object-cover w-4/5 aspect-square md:w-1/4"/>
          </div>
        })}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button onClick={prev} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white" >
          <AiOutlineLeft size={40} />
        </button>

        <button onClick={next} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white" >
          <AiOutlineRight size={40} />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${curr === i ? "p-2" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonios