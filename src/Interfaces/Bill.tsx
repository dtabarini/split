import "./Item"
xport default interface Bill {
  Id: string;
  Items: Item[];
  ClaimedItems: Item[];
  Tax: number;
  Tip: number;
  PaymentProviderName: string;
  PaymentInformation: string;
}
