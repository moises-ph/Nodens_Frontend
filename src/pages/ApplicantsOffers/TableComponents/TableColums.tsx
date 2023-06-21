import { ColumnDef } from "@tanstack/react-table";
import { OfferTableT } from "../../../types";
import { Link } from "react-router-dom";
import { MdDoneOutline } from "react-icons/md";
import { AiOutlineCloseCircle } from "react-icons/ai";

export const TableColums: ColumnDef<OfferTableT>[] = [
  {
    accessorKey: "Title",
    header: "Titulo",
    cell : ({row}) => {
      return <Link to={`/offers/${row.original.offerId}`}><span className="text-blue-500 hover:underline">{row.getValue('Title')}</span></Link>
    }
  },
  {
    accessorKey: "Creation_Date",
    header: "Fecha de Creación",
    cell: ({row}) => {
      const date: Date = new Date(row.getValue('Creation_Date'))
      return date.toLocaleDateString("es-Es", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
    }
  },
  {
    accessorKey: "Event_Date",
    header: "Fecha del evento",
    cell: ({row}) => {
      const date: Date = new Date(row.getValue('Event_Date'))
      return date.toLocaleDateString("es-Es", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
    }
  },
  {
    accessorKey: "Payment",
    header: "Pago",
    cell : ({row}) => {
      const num = parseFloat(row.getValue('Payment'));
      return new Intl.NumberFormat('es-ES',{style : 'currency', currency :'COP'}).format(num);
    }
  },
  {
    accessorKey: "Vacants",
    header: "Vacantes",
    cell : ({row}) => {
      return <div className="w-full text-center"><span>{row.getValue('Vacants')}</span></div>
    }
  },
  {
    accessorKey: "isAvailable",
    header: "Disponibilidad",
    cell : ({row}) => {
      return row.getValue('isAvailable') ? <div className="flex items-center gap-1"><MdDoneOutline className="text-white p-[2.5px] flex items-center justify-center rounded-2xl bg-green-500" /> Disponible</div> : <div className="flex items-center gap-1"><AiOutlineCloseCircle className="text-red-500 rounded-2xl bg-white" /> No Disponible</div>
    }
  },
] 
