import React from "react";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Menu from "./Components/Menu";
import { isEnvBrowser } from "@/utils/misc";
import { fetchNui } from "@/utils/fetchNui";
import { useVisibility } from "@/providers/VisibilityProvider";
import { motion } from "framer-motion";
import { XIcon } from "lucide-react";
type Props = {};

const Dashboard = (props: Props) => {
  const { visible, setVisible } = useVisibility();
  // Handle pressing escape/backspace
  React.useEffect(() => {
    // Only attach listener when we are visible
    if (!visible) return;

    const keyHandler = (e: KeyboardEvent) => {
      if (["Backspace", "Escape"].includes(e.code)) {
        if (!isEnvBrowser()) fetchNui("hideFrame");
        else setVisible(!visible);
      }
    };

    window.addEventListener("keydown", keyHandler);

    return () => window.removeEventListener("keydown", keyHandler);
  }, [visible]);

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
      className="w-min-[30%] h-[20%] bg-card rounded-xl overflow-auto flex flex-col"
    >
      <button onClick={() => {
        if (!isEnvBrowser()) fetchNui("hideFrame");
        else setVisible(!visible);
      }} className="w-fit bg-none absolute self-end pr-1 pt-1"><XIcon/></button>
      <Label className="w-full flex items-center justify-center text-2xl p-2">
        Billing Menu
      </Label>
      <div className="w-full h-full p-3 flex flex-col">
        <Separator className="bg-muted-foreground" />
        <Menu />
      </div>
    </motion.div>
  );
};

export default Dashboard;
