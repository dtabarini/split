import Item from "./Item";

export default interface Bill 
{
    Id: string,
    Items: Item[],
    ClaimedItems: Item[],
    Tax: number,
    Tip: number,
    PaymentProviderName: string,
    PaymentInformation: string, 
}