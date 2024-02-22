import React from "react";
import Dashboard from "./pages/Menu/Dashboard";
import { debugData } from "./utils/debugData";
import { AnimatePresence } from "framer-motion";

import { usePages } from "./state/page";
import PersonalInvoices from "./pages/PersonalInvoices/PersonalInvoices";
import PayReferences from "./pages/PersonalInvoices/PayReferences";
import { useNuiEvent } from "./hooks/useNuiEvent";
import { setConfig } from "./state/config";
import { useUser } from "./state/user";
import InspectCitizen from "./pages/Menu/InspectCitizen";

debugData([
  {
    action: "setVisible",
    data: true
  },
]);

debugData([
  {
    action: 'openBilling',
    data: {
      config: {
        inspect: true,
        society: true,
        city: true,
      },
      invoices: [
        {
          ref: "ABC1234",
          amount: 570,
          society: "police",
          society_label: "LSPD",
          author: "sid91238asdjhasd",
          author_name: "Aloin Chandlar",
          status: "paid",
          note: "Speeding",
        },
        {
          ref: "ABC1234",
          amount: 14370,
          society: "ambulance",
          society_label: "EMS",
          author: "sid91238asdjhasd",
          author_name: "Tarah MacCafferky",
          status: "paid",
          note: "Treatment",
        },
        {
          ref: "ABC1234",
          amount: 2853,
          society: "police",
          society_label: "EMS",
          author: "sid91238asdjhasd",
          author_name: "Worden Sheeres",
          status: "unpaid",
          note: "Speeding",
        },
        {
          ref: "ABC1234",
          amount: 10448,
          society: "police",
          society_label: "LSPD",
          author: "sid91238asdjhasd",
          author_name: "Willie Farryann",
          status: "unpaid",
          note: "Speeding",
        },
        {
          ref: "ABC1234",
          amount: 15065,
          society: "police",
          society_label: "EMS",
          author: "sid91238asdjhasd",
          author_name: "June Fleote",
          status: "paid",
          note: "Speeding",
        },
        {
          ref: "ABC1234",
          amount: 8585,
          society: "police",
          society_label: "LSPD",
          author: "sid91238asdjhasd",
          author_name: "Lorenzo Caton",
          status: "unpaid",
          note: "Treatment",
        },
        {
          ref: "ABC1234",
          amount: 11392,
          society: "police",
          society_label: "EMS",
          author: "sid91238asdjhasd",
          author_name: "Tucky Niesel",
          status: "paid",
          note: "Speeding",
        },
        {
          ref: "ABC1234",
          amount: 19684,
          society: "ambulance",
          society_label: "EMS",
          author: "sid91238asdjhasd",
          author_name: "Tamar Pacey",
          status: "paid",
          note: "Speeding",
        },
        {
          ref: "ABC1234",
          amount: 8435,
          society: "ambulance",
          society_label: "LSPD",
          author: "sid91238asdjhasd",
          author_name: "Harmony Hucks",
          status: "unpaid",
          note: "Treatment",
        },
        {
          ref: "ABC1234",
          amount: 19456,
          society: "ambulance",
          society_label: "EMS",
          author: "sid91238asdjhasd",
          author_name: "Raoul Gingel",
          status: "unpaid",
          note: "Speeding",
        },
        {
          ref: "ABC1234",
          amount: 2373,
          society: "ambulance",
          society_label: "LSPD",
          author: "sid91238asdjhasd",
          author_name: "Stu Kelshaw",
          status: "paid",
          note: "Treatment",
        },
        {
          ref: "ABC1234",
          amount: 10250,
          society: "ambulance",
          society_label: "EMS",
          author: "sid91238asdjhasd",
          author_name: "Raynard McGonigal",
          status: "unpaid",
          note: "Treatment",
        },
        {
          ref: "ABC1234",
          amount: 19099,
          society: "police",
          society_label: "EMS",
          author: "sid91238asdjhasd",
          author_name: "Adey Tichner",
          status: "unpaid",
          note: "Treatment",
        },
        {
          ref: "ABC1234",
          amount: 6982,
          society: "police",
          society_label: "EMS",
          author: "sid91238asdjhasd",
          author_name: "Hobard Kester",
          status: "unpaid",
          note: "Treatment",
        },
        {
          ref: "ABC1234",
          amount: 13145,
          society: "police",
          society_label: "LSPD",
          author: "sid91238asdjhasd",
          author_name: "Welch Eustanch",
          status: "paid",
          note: "Speeding",
        },
      ],
    }
  }
])

type Props = {};

const App = (props: Props) => {
  const [pages, setPages] = usePages();
  const [userData, setUserData] = useUser();
  const setSetting = setConfig()
  useNuiEvent("setVisible", (data: any) => {
    setPages("dashboard");
  });
  useNuiEvent('openBilling', (data: any) => {
    setUserData(data?.invoices);
    setSetting(data?.config)
  })
  return (
    <div className="w-screen dark h-screen justify-center items-center flex">
      <AnimatePresence mode="wait">
        {pages === "dashboard" && <Dashboard />}
        {pages === "personal" && <PersonalInvoices />}
        {pages === "payref" && <PayReferences />}
        {pages === "inspect" && <InspectCitizen />}
      </AnimatePresence>
    </div>
  );
};

export default App;
