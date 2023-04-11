import React from 'react'
import { BsPersonSquare } from 'react-icons/bs'

function SingleOffer(props : any) {
  return (
      <div onClick={()=> props.isHomePage ? props.redirect() : props.showModal(props.offer)} key={parseInt(props.Key)} className="w-full h-44 flex flex-col p-4 border-2 border-solid border-slate-300 gap-1 rounded-lg hover:bg-slate-100 hover:cursor-pointer">
          <div className="flex gap-2">
              <BsPersonSquare className="h-8 w-8 text-sky-500" />
              <h3 className="text-xl font-semibold">{props.offer.Title}</h3>
          </div>
          <p><span className="text-slate-500">Ubicacion: </span>{props.offer.Event_Ubication.city}, {props.offer.Event_Ubication.Town}</p>
          <p>Pago: {props.offer.Payment}</p>
          <p className="text-sm">Publicado el {props.offer.Creation_Date.toDateString()}</p>
          <p>{props.offer.vacants} vacantes disponibles</p>
      </div>
  )
}

export default SingleOffer