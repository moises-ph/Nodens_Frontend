import React from 'react'
import { BsPersonSquare } from 'react-icons/bs'

function SingleOffer(props : any) {
  const {Creation_Date} = props.offer;
  const creation_date = new Date(Creation_Date)
  const creation_date_string = 
    `${creation_date.getDate()+1 < 10 ?  '0'+Number(creation_date.getDate()+1) : creation_date.getDate()+1} -
    ${creation_date.getMonth()+1 < 10 ? '0'+Number(creation_date.getMonth()+1): creation_date.getMonth()+1} -
    ${creation_date.getFullYear()}`


  const classDiv = `w-full min-h-full flex flex-col p-4 border-2 border-solid border-slate-300 gap-1 rounded-lg transition-colors hover:bg-slate-100 hover:cursor-pointer ${props.isHomePage ? "backdrop-blur-md shadow-md" : null}`

  return (
    <div onClick={()=> props.isHomePage ? props.redirect() : props.showModal(props.offer)} key={parseInt(props.Key)} className={classDiv}>
      <div className="flex gap-2">
        <BsPersonSquare className="h-8 w-8 text-sky-500" />
        <h3 className="text-xl font-semibold">{props.offer.Title}</h3>
      </div>
        <p><span className="text-slate-500">Ubicacion: </span>{props.offer.Event_Ubication.City}, {props.offer.Event_Ubication.Town}</p>
        <p>Pago: {props.offer.Payment}</p>
        <p className="text-sm">Publicado el {creation_date_string}</p>
        <p>{props.offer.vacants} vacantes disponibles</p>
    </div>
  )
}

export default SingleOffer
