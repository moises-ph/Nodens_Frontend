import { BsChevronLeft } from "react-icons/bs";
import { OffersT } from "../../types";

const Offer = ({ oferta, closeModal}: { oferta: OffersT | undefined; closeModal: any;}) => {
  const { Creation_Date } = oferta!;
  const creation_date = new Date(Creation_Date);
  return (
    <>
      <button onClick={closeModal}>
        <BsChevronLeft />
      </button>

      <h1 className="text-slate-800 text-2xl font-bold text-center">
        {oferta!.Title}
      </h1>
      <div className="text-slate-800 text-start pl-2 pt-1">
        <p className="text-black text-xl pt-2 pb-1">Descripción de la oferta</p>{" "}
        {oferta?.Description}.
      </div>

      <div className="text-slate-800 text-start pl-2 pt-3">
        <p className="text-black text-md">Pago</p> {oferta?.Payment}
      </div>
      <div className="text-slate-800 text-start pl-2 pt-3">
        <p className="text-black text-md">Publicado el</p>{" "}
        {creation_date.toDateString()}
      </div>
      <div className="text-slate-800 text-start pl-2 pt-3">
        <p className="text-black text-md">Ubicación de la oferta</p>
        {oferta?.Event_Ubication.City}, {oferta?.Event_Ubication.Town}
      </div>
      <p className="text-black text-start pl-2 pt-1 pb-1 text-lg">
        {oferta?.Vacants} vacantes disponibles
      </p>

      <div>
        <div className="pl-2">
          <h4 className="text-xl text-slate-900">Requerimientos:</h4>
          {oferta!.Requeriments.map((req, i) => {
            return (
              <p className="text-slate-700 text-start" key={i}>
                {req.Description}
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Offer;
