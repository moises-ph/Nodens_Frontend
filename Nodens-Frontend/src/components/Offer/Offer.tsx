import React from 'react'
import { OffersT } from '../../types'

const Offer = ({oferta}: {oferta: OffersT | undefined}) => {
  return (
    <>
      <h1 className='text-slate-800 text-2xl font-bold text-center'>{oferta!.Title}</h1>
      <p className='text-slate-800'>{oferta?.Description}</p>
      <div>
        {
          oferta!.Requeriments.map((req, i) => {
            return <p className='text-slate-800' key={i}>{req.description}</p>
          })
        }
      </div>
      <p className='text-slate-800'>Ubicación: {oferta?.Event_Ubication.city}, {oferta?.Event_Ubication.Town}</p>
      <p className='text-slate-800'>Pago: {oferta?.Payment}</p>
      <p className='text-slate-800'>Publicado el: {oferta?.Creation_Date.toDateString()}</p>
      <p className='text-slate-800'>{oferta?.vacants} vacantes disponibles</p>
    </>
  )
}

export default Offer