import { OffersT } from '../../types'

const Offer = ({oferta}: {oferta: OffersT | undefined}) => {
  return (
    <>
      <h1 className='text-slate-800 text-2xl font-bold text-center'>{oferta!.Title}</h1>
      <div>
        <p className='text-black pl-2 text-xl pt-4'>Descripción de la oferta</p>
      </div>
      <p className='text-slate-800 text-center pt-1'>{oferta?.Description}.</p>   
     
      <p className='text-slate-800 text-center pt-2'>Ubicación de la oferta: {oferta?.Event_Ubication.city}, {oferta?.Event_Ubication.Town}</p>
      <p className='text-slate-800 text-center pt-2'>Pago: {oferta?.Payment}</p>
      <p className='text-slate-800 text-center'>Publicado el: {oferta?.Creation_Date.toDateString()}</p>
      <p className='text-slate-800 text-center'>{oferta?.vacants} vacantes disponibles</p>

      <div>
        
           <div>
        {
          oferta!.Requeriments.map((req, i) => {
            return <p className='text-slate-800 text-center' key={i}>{req.description}</p>
          })
        }
      </div>
      {oferta?.Applicant.map((Apliccants, key2)=>(
            <>
              <div key={key2}>
              <p>{Apliccants.PostulationDate.toDateString()}</p>
              </div>
            </>
          ))}
      </div>
    </>
  )
}

export default Offer