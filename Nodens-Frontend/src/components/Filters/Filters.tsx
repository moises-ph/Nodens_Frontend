import { OffersT } from "../../types"

type FiltersT = {
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
  setOffers: React.Dispatch<React.SetStateAction<OffersT[]>>
}

const Filters = ({isOpen, setIsOpen, setOffers}: FiltersT) => {
  const closeFilters = () => {
    setIsOpen(false);
  }
  if(!isOpen) return <></>
  return (
    <div className="absolute z-[100000] bg-red-500 h-60 w-60">
      <button onClick={()=> closeFilters()}>cerrar</button>
    </div>
  )
}

export default Filters