// Transaction from expenses API
export type Transaction = {
    id: number,
    date: string,
    amount: number,
    merchant: string,
    category: string
}