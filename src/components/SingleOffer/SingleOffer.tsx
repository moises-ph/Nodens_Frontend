import React from 'react'
import { BsPersonSquare } from 'react-icons/bs'

function SingleOffer(props : any) {
  const {Creation_Date} = props.offer;
  const creation_date = new Date(Creation_Date)
  const creation_date_string = 
    `${creation_date.getDate()+1 < 10 ?  '0'+Number(creation_date.getDate()+1) : creation_date.getDate()+1} -
    ${creation_date.getMonth()+1 < 10 ? '0'+Number(creation_date.getMonth()+1): creation_date.getMonth()+1} -
    ${creation_date.getFullYear()}`

  return (
    <div onClick={()=> props.isHomePage ? props.redirect() : props.showModal(props.offer)} key={parseInt(props.Key)} className={`group w-full min-h-fit flex flex-col pr-0 pt-4 border-b border-b-solid border-slate-300 gap-1 transition-colors rounded-b-none hover:cursor-pointer ${props.isHomePage ? "backdrop-blur-md shadow-md" : null}`}>
      <div className="flex gap-2">
        <BsPersonSquare className="h-8 w-8 text-sky-500" />
        <h3 className="text-xl font-semibold group-hover:underline text-blue-700">{props.offer.Title}</h3>
      </div>
        <p><span className="text-slate-500">Ubicacion: </span>{props.offer.Event_Ubication.City}, {props.offer.Event_Ubication.Town}</p>
        <p>Pago: {props.offer.Payment}</p>
        <p className="text-sm">Publicado el {creation_date_string}</p>
        <p>{props.offer.vacants} vacantes disponibles</p>
    </div>
  )
}

export default SingleOffer
