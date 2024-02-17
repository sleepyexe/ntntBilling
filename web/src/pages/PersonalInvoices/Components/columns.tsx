import { ColumnDef } from "@tanstack/react-table"
import { InvoicesProps } from "@/types/invoices"

export const columns: ColumnDef<InvoicesProps>[] = [
    {
        accessorKey: "ref",
        header: "Reference Id",
    },
    {
        accessorKey: "amount",
        header: "Amount",
    },

    {
        accessorKey: "author_name",
        header: "Author Name",
    },
    {
        accessorKey: "society_label",
        header: "Society",
    },
    {
        accessorKey: "status",
        header: "Status",
    },
]