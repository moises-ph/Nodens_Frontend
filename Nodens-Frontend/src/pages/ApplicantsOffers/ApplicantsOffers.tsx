import { DataTable } from "../OrganizerOffers/TableComponent"
import { TableColums } from "./TableComponents"
import { renewToken } from "../../services" 
import { clientHttp } from "../../services/client"
import { OfferTableT, OffersT } from "../../types"
import { useEffect, useState } from "react"

const ApplicantsOffers = () => {
  return (
    <>
      <main>
        {/*<DataTable columns={TableColums}/>*/}
        <h1>Ofertas a las que haz aplicado</h1>
      </main>
    </>
  )
}

export default ApplicantsOffers
