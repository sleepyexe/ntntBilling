import React from "react";
import { InvoicesProps } from "@/types/invoices";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Clipboard } from "lucide-react";
import { DialogFooter } from "@/components/ui/dialog";
import { useSetUser } from "@/state/user";
import { fetchNui } from "@/utils/fetchNui";
import { useModal } from "@/components/ModalsProvider";
import { Textarea } from "@/components/ui/textarea";

type Props = {
  data: InvoicesProps;
};

const InvoiceInfo = (props: Props) => {
  const data = props.data;
  const setData = useSetUser();
  const modal = useModal();

  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(data?.amount);
  const handleSubmit = async () => {
    await fetchNui("payinvoices", data)
      .then((retData: any) => {
        {retData !== false || null &&
          setData(retData);
        }
      })
      .catch((err: any) => {
        console.log(JSON.stringify(err));
      });
    modal.close();
  };
  return (
    <>
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
          <Input
            id="username"
            disabled
            value={data.author_name}
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right">
            Note
          </Label>
          <Textarea
            id="username"
            disabled
            className="col-span-3"
            value={data.note}
          />
        </div>
      </div>
      <DialogFooter>
        <Button
          onClick={() => {
            fetchNui("setclipboard", data.ref);
          }}
          className="gap-2"
        >
          <Clipboard /> Copy Reference Id
        </Button>
        <Button
          disabled={data.status === "paid" ? true : false}
          onClick={() => handleSubmit()}
          type="submit"
        >
          Pay
        </Button>
      </DialogFooter>
    </>
  );
};

export default InvoiceInfo;
