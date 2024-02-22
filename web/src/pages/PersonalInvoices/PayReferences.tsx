import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SearchIcon, XIcon, BanknoteIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { usePages } from "@/state/page";
import SpinningLoader from "@/components/SpinningLoader";
import { fetchNui } from "@/utils/fetchNui";
import { useBack } from "@/state/back";
import { isEnvBrowser } from "@/utils/misc";
import { InvoicesProps } from "@/types/invoices";
import { Textarea } from "@/components/ui/textarea";
type Props = {};

type ReturnProps = {
  ref?: string;
  amount?: number;
  society_label?: string;
  society?: string;
  author?: string;
  note?: string;
  status?: "paid" | "unpaid";
  author_name?: string;
};

const formatNumber = (n: any) => {
  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(n);
  return formatted;
};

const PayReferences = (props: Props) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<ReturnProps>({});
  const [ref, setRef] = useState<string>("");
  const [found, setFound] = useState(false);
  const [pages, setPages] = usePages();
  const [back, setBack] = useBack();
  // Handle pressing escape/backspace
  useEffect(() => {
    // Only attach listener when we are visible
    if (!back) return;
    const keyHandler = (e: any) => {
      if (["Escape"].includes(e.code)) {
        if (!isEnvBrowser()) setPages("dashboard");
        else setBack(!back);
      }
    };

    window.addEventListener("keydown", keyHandler);

    return () => window.removeEventListener("keydown", keyHandler);
  }, [back]);
  const handlePay = async () => {
    await fetchNui("payreference", data).then((retdata: any) => {
      {retdata.status && 
        setData(retdata)
      }
    }).catch((err: any) => {
      setData({
        ref: "SSSDASD",
        amount: 1000,
        society: "Test",
        society_label: "EMS",
        author: "Sleepy Rae",
        author_name: "Sleepy Rae",
        status: "paid",
        note: "Anjay Mabar",
      })
    })
  }
  const handleSubmit = async () => {
    setLoading(true);
    setFound(false);
    await fetchNui("searchreference", { ref: ref })
      .then((retData: any) => {
        console.log(JSON.stringify(retData));
        {retData.amount && 
          setFound(true);
          setData(retData)
        }
      })
      .catch((err: any) => {
        setFound(true)
        setData({
          ref: "SSSDASD",
          amount: 1000,
          society: "Test",
          society_label: "EMS",
          author: "Sleepy Rae",
          author_name: "Sleepy Rae",
          status: "unpaid",
          note: "Anjay Mabar",
        });
      });
    setLoading(false);
  };
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      className="w-fit h-fit bg-card rounded-xl flex flex-col"
    >
      <button onClick={() => {
            setPages('dashboard')
      }} className="w-fit bg-none absolute self-end pr-1 pt-1"><XIcon/></button>
      <Label className="w-full flex items-center justify-center text-2xl p-2">
        Pay References
      </Label>
      <div className="w-full p-10">
        <div className="grid w-full items-center gap-2">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="name">
              Reference Id
            </Label>
            <div className="flex gap-2 col-span-3">
              <Input
                onChange={(e: any) => {
                  setRef(e.target.value);
                }}
                className="col-span-3"
                type="string"
                placeholder="ABC12345"
              />
              <Button onClick={() => handleSubmit()}><SearchIcon/></Button>
            </div>
          </div>
          {found && (
            <>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Amount
                </Label>
                <Input
                  id="name"
                  disabled
                  value={formatNumber(data?.amount) || 0}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Author
                </Label>
                <Input
                  id="username"
                  disabled
                  value={data?.author_name || ''}
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
                  value={data?.note || ''}
                />
              </div>
            </>
          )}
          {found && (
            <Button
              onClick={() => 
                handlePay()
              }
              disabled={data.status === 'paid' ? true : false}
              className="flex justify-center items-center gap-1 text-sm"
            >
              {loading ? (
                <>
                  <SpinningLoader />
                  Loading
                </>
              ) : (
                <>
                {data.status === 'paid' ? (
                  <>
                                  <>
                  <BanknoteIcon size={20} />
                  Paid
                </>
                  </>
                ): (
                <>
                  <BanknoteIcon size={20} />
                  Pay
                </>
                )}
                </>

              )}
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default PayReferences;
