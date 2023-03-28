import { OffersT } from '../../types'


const Offer = ({oferta}: {oferta: OffersT | undefined}) => {
  return (
    <>
      <h1 className='text-slate-800 text-2xl font-bold text-center'>{oferta!.Title}</h1>
      <p className='text-slate-800 text-start pl-2 pt-1'><p className='text-black text-xl pt-2 pb-1'>Descripción de la oferta</p> {oferta?.Description}.</p>   
     
      <p className='text-slate-800 text-start pl-2 pt-3'><p className='text-black text-md'>Pago</p> {oferta?.Payment}</p>
      <p className='text-slate-800 text-start pl-2 pt-3'><p className='text-black text-md'>Publicado el</p> {oferta?.Creation_Date.toDateString()}</p>
      <p className='text-slate-800 text-start pl-2 pt-3'><p className='text-black text-md'>Ubicación de la oferta</p>{oferta?.Event_Ubication.city}, {oferta?.Event_Ubication.Town}</p>
      <p className='text-black text-start pl-2 pt-1 pb-1 text-lg'>{oferta?.vacants} vacantes disponibles</p>

      <div>
        
           <div>
        {
          oferta!.Requeriments.map((req, i) => {
            return <p className='text-slate-800 text-start pl-2' key={i}><p className='text-black text-xl pt-1 pb-1'>Requerimentos</p> {req.description}</p>
          })
        }
          {oferta?.Applicant.map((Apliccants, key2)=>(
            <>
          
              <div key={key2} className="pl-2 pt-2">
              <p className=''>{Apliccants.PostulationDate.toDateString()}</p>
              </div>
            </>
          ))}
      </div>
    
      </div>
     </>
  )
}

export default Offer