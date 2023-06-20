import {
  ColumnDef,
  flexRender,
  getCoreRowModel, getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "../../../components/ui/table";

export function DataTable<TData, TValue>({
  columns,
  data,
  isLoading
}: { columns : ColumnDef<TData, any>[], data : TData[], isLoading : boolean }) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel : getPaginationRowModel()
  }) 

  return (
    <div className="rounded-md border w-[97%]">
      <Table className={`${isLoading ? "flex flex-col" : ""} w-full`}>
        <TableHeader className="sticky">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead className="font-semibold" key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody className={isLoading ? 'p-4 h-20 flex items-center justify-center w-full' : ''}>
          {isLoading ? 
            <div className='self-center w-8 h-8 rounded-[50%] [border-left-style:solid] border-[11.2px] border-double border-[#474bff] animate-spin'></div>
          :
           table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="font-thin">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No tienes ofertas aún.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      {
        table.getPageCount() > 1 ?
          <>
            <button onClick={()=> table.previousPage()}>Página anterior</button>
            <button onClick={()=> table.nextPage()}>Siguiente página</button>
          </>
          : <></>
      }

    </div>
  )
}
