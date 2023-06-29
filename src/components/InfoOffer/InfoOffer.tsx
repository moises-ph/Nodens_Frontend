import { FaClipboardList } from "react-icons/fa";
import { MdOutlineAttachMoney } from "react-icons/md";
import { OffersT, OrganizerT } from '../../types'
import { DataTable } from "../../pages/OrganizerOffers/TableComponent";
import { UbicationTableColumns } from "../UbicationTable/UbicationTable";
import { BsCheckAll, BsFillBookmarkFill } from "react-icons/bs";
import { VscError } from "react-icons/vsc";
import { useEffect } from "react";
import {HiOutlineArrowTopRightOnSquare} from "react-icons/hi2";
import { Link } from "react-router-dom";

const InfoOffer = ({offer, handlePostulation, handleSaveOffer,isLoading, isMusician, organizer}:{offer: OffersT, handlePostulation : (id : string) => void,handleSaveOffer : (id : string) => void ,isLoading : boolean, isMusician : boolean, organizer : OrganizerT}) => {  
  useEffect(() =>{
    console.log(offer);
    console.log(organizer);
  })

  return (
    <div className="bg-white w-full overflow-y-auto max-h-[86vh] pl-3 pb-3 rounded-xl rounded-tl-none rounded-bl-none">
      <div className="flex justify-between h-auto p-4 rounded-b-2xl rounded-tr-2xl">
        <div>
          <h1 className="text-4xl font-semibold text-slate-900">
            {offer.Title}
          </h1>
          <p className="font-thin">
            {offer.Event_Ubication.City} - {offer.Event_Ubication.Town}
          </p>
        </div>
        <div
          className={`${offer.isAvailable ? "bg-green-500" : "bg-red-500"}
          flex-col justify-center hover:scale-105 transition-all after:bg-white 
          after:content-['_'] after:h-[1px] after:w-full after:scale-x-0 
          after:origin-left after:transition after:transform after:duration-150 
          after:ease-linear hover:after:scale-x-100 w-fit h-fit px-1 py-[2px] rounded flex items-center`}
        >
          {offer.isAvailable ? (
            <>
              <div className="flex items-center">
                <BsCheckAll className="text-white" />
                <span className="text-white">Disponible</span>
              </div>
            </>
          ) : (
            <>
              <VscError className="text-white" />
              <span className="text-white">No Disponible</span>
            </>
          )}
        </div>
      </div>
      <div className="flex flex-col h-fit px-2 gap-2">
        <div className="flex justify-center flex-wrap gap-3 w-fit max-w-full">
          {offer.tags.map((tag, i) => {
            return (
              <span
                key={i}
                className="border-[1px] font-thin border-slate-300 flex justify-center items-center rounded-xl w-fit p-1"
              >
                {tag}
              </span>
            );
          })}
        </div>
        <div className="flex items-end w-fit gap-1 ">
          <span className="font-medium">Pago: </span>
          <div className="flex flex-col justify-center w-fit font-semibold text-lg px-2 py-1 bg-green-500 text-white rounded">
            <span className="flex items-center">
              {offer.Payment}
              <MdOutlineAttachMoney />
            </span>
          </div>
        </div>
        <div className="gap-1 w-fit h-fit flex items-center">
          {offer.isAvailable && isMusician ? (
            <>
              <button
                disabled={isLoading}
                onClick={() => handlePostulation(offer._id!)}
                className="bg-orange-400 disabled:bg-white disabled:text-orange-400 transition hover:shadow-lg hover:scale-105 gap-1 flex font-semibold items-center rounded-3xl text-white p-[10px]"
              >
                Postularme <HiOutlineArrowTopRightOnSquare />{" "}
              </button>
            </>
          ) : (
            <></>
          )}
          <button
            disabled={isLoading}
            onClick={() => handleSaveOffer(offer._id!)}
            className="bg-white border transition hover:shadow-lg hover:scale-105 disabled:bg-orange-300  disabled:text-white border-orange-400 font-semibold text-orange-400 flex items-center rounded-3xl p-[10px]"
          >
            Guardar
          </button>
        </div>
        <h3 className="text-xl font-semibold">Acerca de la Oferta</h3>
        <p className="font-thin">{offer.Description}</p>
        <div className="flex items-center gap-1 text-base">
          <FaClipboardList />
          <h4 className="font-semibold">Requerimientos</h4>
        </div>
        <ul className="list-disc pl-8">
          {offer.Requeriments.map((req, i) => {
            return (
              <li key={i} className="font-light">
                {req.Description}
              </li>
            );
          })}
        </ul>
        <p className="text-slate-500 text-sm">
          Creacion el {new Date(offer.Creation_Date).toLocaleDateString()}
        </p>
        <div className="text-xl">
          <span className="font-semibold">Vacantes disponibles: </span>
          <span>{offer.Vacants}</span>
        </div>
        <div className="text-xl ">
          <span className="font-semibold">Fecha del Evento: </span>
          <span>{new Date(offer.Event_Date).toLocaleDateString()}</span>
        </div>
        <h4 className="text-xl font-semibold">Ubicacion:</h4>
        <DataTable
          data={new Array(offer.Event_Ubication)}
          columns={UbicationTableColumns}
          isLoading={false}
        />
      </div>
      <Link to={`/organizers/${organizer._id?.$oid}`}>
        <div className="mt-2 flex max-w-[calc(100%-10px)] h-32 justify-between px-4 py-2 rounded-2xl border-solid border-[1px] border-black/30">
          <div className="flex items-center gap-2">
            <img src={organizer.url_foto_perfil} className="object-contain h-28 w-28" />
            <div className="flex-col flex">
              <span>{organizer.Name} {organizer.Lastname}</span>
              <span className="font-thin text-sm">{organizer.genero}</span>
              <span className="italic font-thin text-sm">{organizer.ciudad}, {organizer.pais}</span>
            </div>
          </div>
          {organizer.nombre_empresa.length > 0 && organizer.descripcion_empresa.length > 0 ? 
          <div className="w-1/2 h-full flex flex-col items-start font-thin text-sm">
            <span>{organizer.nombre_empresa}</span>
            <p>{organizer.descripcion_empresa}</p>
          </div> 
          : 
          <div className="w-1/2 h-full flex flex-col items-center justify-center text-center font-thin text-sm">
            <span>El organizador no tiene empresa</span>
          </div>}
        </div>
      </Link>
    </div>
  );
}

export default InfoOffer
