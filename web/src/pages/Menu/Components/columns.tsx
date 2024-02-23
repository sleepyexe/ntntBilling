import { ColumnDef } from "@tanstack/react-table";
import { SocietyProps } from "@/types/society";
import { ArrowUpDown, Clipboard, CheckIcon, XCircleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
export const columns: ColumnDef<SocietyProps>[] = [
    {
        accessorKey: 'ref',
        header: 'Reference Id'
    },
    {
        accessorKey: "status",
        header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
              Status
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          );
        },
        cell: ({ row }) => {
          const status = row.getValue("status");
          const icon =
            status === "paid" ? (
              <div className="flex gap-2">
                <CheckIcon color="cyan" />
                Paid
              </div>
            ) : (
              <div className="flex gap-2">
                <XCircleIcon color="red" />
                Unpaid
              </div>
            );
          return <div className="w-fit">{icon}</div>;
        },
    },
    {
        accessorKey: "amount",
        header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
              Amount
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          );
        },
        cell: ({ row }) => {
          const amount = parseFloat(row.getValue("amount"));
          const formatted = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(amount);
    
          return formatted;
        },
      },
      {
        accessorKey: "author_name",
        header: "Author",
      },
]