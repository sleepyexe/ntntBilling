import { ColumnDef } from "@tanstack/react-table";
import { InvoicesProps } from "@/types/invoices";
import {
  ArrowUpDown,
  MoreHorizontal,
  CheckIcon,
  XCircleIcon,
} from "lucide-react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
  } from "@/components/ui/dialog"
  import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button";
import { fetchNui } from "@/utils/fetchNui";
export const columns: ColumnDef<InvoicesProps>[] = [
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
          <CheckIcon color="cyan" />
        ) : (
          <XCircleIcon color="red" />
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
  {
    accessorKey: "society_label",
    header: "Society",
  },
  {
    id: "actions",
    cell: ({ row }) => {
		const data = row.original
    const handleSubmit = async () => {
      await fetchNui('payinvoices', data).then(
        (retData: any) => {
          console.log(JSON.stringify(retData))
        }
      ).catch((err: any) => {
        console.log(JSON.stringify(err))
      })
    } 
    const formatted = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(data.amount);
      return (
		<Dialog>
		<DialogTrigger asChild>
		  <Button variant="outline" disabled={data.status === 'paid' ? true : false}>{data.status === 'paid' ? 'Paid' : 'View'}</Button>
		</DialogTrigger>
		<DialogContent className="sm:max-w-[425px] dark	">
		  <DialogHeader>
			<DialogTitle>Invoice</DialogTitle>
			<DialogDescription>
			  Invoice Details.
			</DialogDescription>
		  </DialogHeader>
		  <div className="grid gap-4 py-4">
			<div className="grid grid-cols-4 items-center gap-4">
			  <Label htmlFor="name" className="text-right">
				Reference Id
			  </Label>
			  <Input id="name" disabled value={data.ref} className="col-span-3" />
			</div>
			<div className="grid grid-cols-4 items-center gap-4">
			  <Label htmlFor="name" className="text-right">
				Amount
			  </Label>
			  <Input id="name" disabled value={formatted} className="col-span-3" />
			</div>
			<div className="grid grid-cols-4 items-center gap-4">
			  <Label htmlFor="username" className="text-right">
				Author
			  </Label>
			  <Input id="username" disabled  value={data.author_name} className="col-span-3" />
			</div>
			<div className="grid grid-cols-4 items-center gap-4">
			  <Label htmlFor="username" className="text-right">
          Note
			  </Label>
			  <Input id="username" disabled  value={data.note || ''} className="col-span-3" />
			</div>
		  </div>
		  <DialogFooter>
			<Button onClick={()=> handleSubmit()} type="submit">Pay</Button>
		  </DialogFooter>
		</DialogContent>
	  </Dialog>
	  )
    },
  },
];
