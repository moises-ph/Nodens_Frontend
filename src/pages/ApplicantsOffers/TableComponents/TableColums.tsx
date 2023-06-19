

import { ColumnDef } from "@tanstack/react-table";
import { OfferTableT } from "../../../types";

export const TableColums: ColumnDef<OfferTableT>[] = [
  {
    accessorKey: "Title",
    header: "Titulo"
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
      return row.getValue('isAvailable') ? 'Oferta Disponible' : 'Oferta no Disponible'
    }
  },
] 
