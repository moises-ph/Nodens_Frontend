import { DataTable } from "../OrganizerOffers/TableComponent"
import { TableColums } from "./TableComponents"
import { renewToken } from "../../services" 
import { clientHttp } from "../../services/client"
import { OfferTableT, OffersT } from "../../types"
import { useEffect, useState } from "react"
import { Loading } from "../../components"

const ApplicantsOffers = () => {
  const [offers, setOffers] = useState<OfferTableT[]>();
  
  const getOffers = async () => {
    await renewToken();
    clientHttp().get("/offers/offers/musician")
      .then(res =>  {
        console.log(res.data);
        setOffers(res.data);
      })
      .catch(err => console.log(err))
  }

  useEffect(()=> {
    getOffers();
  }, [])
  if (!offers) return <Loading />
  return (
    <>
      <main className="pt-8 px-6">
        <DataTable data={offers} columns={TableColums} isLoading={false}/>
      </main>
    </>
  )
}

export default ApplicantsOffers
