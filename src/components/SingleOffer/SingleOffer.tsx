import { BsCheckAll, BsPersonSquare } from 'react-icons/bs'
import { OffersT } from '../../types';
import { VscError } from 'react-icons/vsc';

function SingleOffer({ isHomePage , offer, id, organizerImg} : { isHomePage : boolean, offer: OffersT, id : string, organizerImg:string }) {
  return (
    <div
      className={`${
        id && id === offer._id ? "bg-orange-200" : ""
      } group w-full min-h-fit flex flex-col px-3 pt-4 pb-2 border-b border-b-solid border-slate-300 gap-1 transition-colors rounded-b-none hover:cursor-pointer ${
        isHomePage ? "backdrop-blur-md shadow-md" : null
      }`}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-2">
          {organizerImg.length > 0 ? (
            <img src={organizerImg} className='h-8 w-8 object-contain rounded-full' />
          ) : (
            <BsPersonSquare className="h-8 w-8 text-sky-500" />
          )}
          <h3 className="text-xl font-semibold group-hover:underline text-blue-700">
            {offer.Title}
          </h3>
        </div>
        {offer.isAvailable ? (
          <div className="flex items-center bg-green-600 rounded-lg p-[2px] text-white">
            <BsCheckAll />
            <span>Disponible</span>
          </div>
        ) : (
          <div className="flex items-center bg-red-500 rounded-lg p-[2px] text-white">
            <VscError />
            <span>No Disponible</span>
          </div>
        )}
      </div>
      <p>
        <span className="text-slate-500">Ubicacion: </span>
        {offer.Event_Ubication.City}, {offer.Event_Ubication.Town}
      </p>
      <p>Pago: {offer.Payment}$</p>
      <div className="flex w-full items-center justify-between">
        <p className="text-sm">
          Fecha del evento:{" "}
          <span className="text-base">
            {new Date(offer.Event_Date).toLocaleDateString()}
          </span>
        </p>
        <p className="text-sm">
          Publicado el {new Date(offer.Creation_Date).toLocaleDateString()}
        </p>
      </div>
      <p className="bg-green-500 text-white w-fit p-1 rounded">
        {offer.Vacants} vacantes disponibles
      </p>
    </div>
  );
}

export default SingleOffer
