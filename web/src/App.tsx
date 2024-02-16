import React from "react";
import Dashboard from "./pages/Menu/Dashboard";
import { debugData } from "./utils/debugData";
import { AnimatePresence } from 'framer-motion'

import { usePages } from "./state/page";
import TestMenu from "./pages/PersonalInvoices/test";
import { useNuiEvent } from "./hooks/useNuiEvent";
debugData([
  {
    action: "setVisible",
    data: true,
  },
]);

type Props = {};


const App = (props: Props) => {
  const [pages, setPages] = usePages()

  useNuiEvent('setVisible', (data: any) => {
    setPages('dashboard')
  })
  return (
    <div className="w-screen dark h-screen justify-center items-center flex">
        <AnimatePresence mode="wait">
            {pages === 'dashboard' && <Dashboard />}
            {pages === 'test' && (
                <TestMenu></TestMenu>
            )}
        </AnimatePresence>
    </div>
  );
};

export default App;