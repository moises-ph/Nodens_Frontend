export type OfferFilter = {
    minPayment : number | null,
    maxPayment : number | null,
    instrument : string | null,
    creationDate : Date | null,
    eventDate : Date | null
}