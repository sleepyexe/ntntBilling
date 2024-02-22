import React from "react";
import { motion } from "framer-motion";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SearchIcon, XIcon } from "lucide-react";
import { fetchNui } from "@/utils/fetchNui";
import SpinningLoader from "@/components/SpinningLoader";
import { usePages } from "@/state/page";
import { useBack } from "@/state/back";
import { isEnvBrowser } from "@/utils/misc";
type Props = {};

type PlayerProps = {
  unpaid?: number;
  total?: number;
};

const formatNumber = (n: any) => {
    const formatted = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(n);
    return formatted;
};

const InspectCitizen = (props: Props) => {
  const [playerId, setPlayerId] = React.useState(0);
  const [data, setData] = React.useState<PlayerProps>({});
  const [pages, setPages] = usePages();
  const [found, setFound] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [back, setBack] = useBack()
  React.useEffect(() => {
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
  const handleSubmit = async () => {
    setFound(false)
    setLoading(true)
    await fetchNui("searchplayer", { playerId: playerId })
      .then((retData: any) => {
        {
          retData !== false && setData(retData);
          setFound(true);
        }
      })
      .catch((err) => {
        setFound(true);
        setData({
          unpaid: 10,
          total: 10000,
        });
      });
      setLoading(false)
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
        Inspect Citizen
      </Label>
      <div className="w-full p-10">
        <div className="grid w-full items-center gap-2">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="name">
              Player Id
            </Label>
            <div className="flex gap-2 col-span-3">
              <Input
                onChange={(e: any) => {}}
                min={1}
                className="col-span-3"
                type="number"
                placeholder="1"
              />
              <Button onClick={() => handleSubmit()}>
                {
                    loading ? <SpinningLoader/> : <SearchIcon/>
                }
              </Button>
            </div>
          </div>
          {found && (
            <>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Unpaid Invoices
                </Label>
                <Input
                  id="name"
                  disabled
                  value={data?.unpaid || 0}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Total Unpaid
                </Label>
                <Input
                  id="username"
                  disabled
                  value={formatNumber(data?.total) || ''}
                  className="col-span-3"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default InspectCitizen;
