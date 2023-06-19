import { ColumnDef } from "@tanstack/react-table";
import { UbicationTable } from "../../types/ubitacion";

export const UbicationTableColumns : ColumnDef<UbicationTable>[] = [
    {
        accessorKey : "City",
        header : "Ciudad"
    },
    {
        accessorKey : "Town",
        header : "Barrio"
    },
    {
        accessorKey : "Street",
        header : "Calle"
    },
    {
        accessorKey : "Career",
        header : "Carrera"
    },
    {
        accessorKey : "SiteNumber",
        header : "Numero"
    }
]
