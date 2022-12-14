export default interface Item {
  id: string;
  name: string;
  price: number;
  quantity: number;
  claimedBy: Set<string>;
}
