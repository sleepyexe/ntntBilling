
export type InvoicesProps = {
    ref: string,
    amount: number,
    society: string,
    society_label: string,
    author: string,
    author_name: string,
    status: "paid" | "unpaid",
    note: string,
}