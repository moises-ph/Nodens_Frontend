import { ColumnDef } from "@tanstack/react-table";
import { OfferTableT } from "../../../types";
import { TableColums } from "./TableColums";
import { SavedOfferTableT } from "../../../types/savedoffertable";

export const TableColumnsSaved: ColumnDef<SavedOfferTableT>[] = [
  ...(TableColums as any),
  {
    accessorKey: "aplied",
    header: "Aplicación a la oferta",
    cell: ({ row }) => {
      return row.getValue("aplied")
        ? "Usted aplicó a la oferta"
        : "Usted no ha aplicado a la oferta";
    },
  },
];