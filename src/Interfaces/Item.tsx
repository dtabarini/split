export default interface Item {
    name: string,
    price: number,
    quantity: number,
    isClaimed: boolean,
    claimedBy?: string
}