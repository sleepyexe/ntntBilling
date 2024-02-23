import React from "react";
import { UserIcon, ScrollTextIcon, SearchIcon, HotelIcon, Building2Icon } from "lucide-react";
import MenuButton from "./MenuButton";
import { useConfigData } from "@/state/config";
type Props = {};

const Menu = (props: Props) => {
  const config = useConfigData();
  return (
    <>
      <div className="w-full h-full flex justify-center items-center gap-3 p-2">
        <MenuButton
          menu="personal"
          icon={UserIcon}
          label={
            <>
              Personal <br></br> Invoices
            </>
          }
        />
        <MenuButton
          menu="payref"
          icon={ScrollTextIcon}
          label={
            <>
              Pay<br></br> Reference
            </>
          }
        />
        {config.inspect && (
          <MenuButton
            menu="inspect"
            icon={SearchIcon}
            label={
              <>
                Inspect<br></br> Citizen
              </>
            }
          />
        )}
        {config.city && (
          <MenuButton
            menu="test"
            icon={Building2Icon}
            label={
              <>
                City<br></br> Invoices
              </>
            }
          />
        )}
        {config.society && (
          <MenuButton
            menu="society"
            icon={HotelIcon}
            label={
              <>
                Society<br></br> Invoices
              </>
            }
          />
        )}
      </div>
    </>
  );
};

export default Menu;
