export type OfferTableT = {
  Title: string;
  Creation_Date: Date;
  Event_Date: Date;
  Payment: number;
  ApplicantsNumber: number;
  Vacants: number;
  isAvailable: boolean;
  offerId: {
    id: string;
    setLoading?: (state: boolean) => void;
  };
};