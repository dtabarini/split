import Item from "./Item";
export default interface Bill {
  Id: string;
  Items: Item[];
  Tax: number;
  Tip: number;
  Total: number;
  PaymentProviderName: string;
  PaymentInformation: string;
}
