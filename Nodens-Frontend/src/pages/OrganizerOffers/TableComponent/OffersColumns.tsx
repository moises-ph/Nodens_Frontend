import {ColumnDef} from "@tanstack/react-table";
import {OfferTableT} from "../../../types";
import OrgOffersToggleMenu from "../../../components/OrganizerOffersToggleMenu/OrgOffersToggleMenu";


export const offersColumns : ColumnDef<OfferTableT>[] = [
    {
      accessorKey : "offerId",
      header : "Acciones",
      cell : ({row}) => {
        const id : string = row.getValue('offerId');
        return <OrgOffersToggleMenu id={id} isAvailable={row.getValue('isAvailable')} />
      }
    },
    {
      accessorKey : "Title",
      header : "Titulo"
    },
    {
      accessorKey : "Creation_Date",
      header : "Fecha de Creación",
      cell : ({row}) => {
        const creationDate : Date = new Date(row.getValue('Creation_Date'));
        return creationDate.toLocaleDateString("es-ES", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
      }
    },
    {
      accessorKey : "Event_Date",
      header : "Fecha del Evento",
      cell : ({row}) => {
        const creationDate : Date = new Date(row.getValue('Event_Date'));
        return creationDate.toLocaleDateString("es-ES", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
      }
    },
    {
      accessorKey : "ApplicantsNumber",
      header : "Numero de Aplicantes",
      cell : ({row}) => {
        return <div className="w-full text-center"><span>{row.getValue('ApplicantsNumber')}</span></div>
      }
    },
    {
      accessorKey : "Payment",
      header : "Pago",
      cell : ({row}) => {
        const amount = parseFloat(row.getValue('Payment'));
        return new Intl.NumberFormat('es-ES',{style : 'currency', currency :'COP'}).format(amount);
      }
    },
    {
      accessorKey : "Vacants",
      header : "Vacantes",
      cell : ({row}) => {
        return <div className="w-full text-center"><span>{row.getValue('Vacants')}</span></div>
      }
    },
    {
      accessorKey : "isAvailable",
      header : "Disponibilidad",
      cell : ({row}) => {
        return row.getValue('isAvailable') ? 'Oferta Disponible' : 'Oferta no Disponible'
      }
    }
  ]
