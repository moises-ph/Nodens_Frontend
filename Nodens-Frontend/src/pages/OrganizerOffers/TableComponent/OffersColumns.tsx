import { ColumnDef } from "@tanstack/react-table";
import { OfferTableT } from "../../../types";

export const offersColumns : ColumnDef<OfferTableT>[] = [
    {
      accessorKey : "Title",
      header : "Titulo"
    },
    {
      accessorKey : "Creation_Date",
      header : "Fecha de Creación"
    },
    {
      accessorKey : "Event_Date",
      header : "Fecha del Evento"
    },
    {
      accessorKey : "ApplicantsNumber",
      header : "Numero de Aplicantes"
    },
    {
      accessorKey : "Payment",
      header : "Pago"
    },
    {
      accessorKey : "Vacants",
      header : "Vacantes"
    },
    {
      accessorKey : "isAvailable",
      header : "Disponibilidad"
    }
  ]