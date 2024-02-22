import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import { Label } from '@radix-ui/react-label'
import { usePages } from '@/state/page'
import { DataTable } from './Components/data-table'
import { columns } from './Components/columns'
import { isEnvBrowser } from "@/utils/misc";
import {useBack} from '@/state/back'
import { InvoicesProps } from '@/types/invoices'
import { useUserData } from '@/state/user'
import { useSetModalContainer } from '@/state/modals'
import ModalsProvider from '@/components/ModalsProvider'
import { XIcon } from 'lucide-react'


const PersonalInvoices = () => {
    const [pages, setPages] = usePages()
    const [back, setBack] = useBack()
    const setContainer = useSetModalContainer()
    const data:InvoicesProps[] = useUserData()
      // Handle pressing escape/backspace
    useEffect(() => {
      // Only attach listener when we are visible
      if (!back) return;
      const keyHandler = (e: any) => {
        if (["Escape"].includes(e.code)) {
          if (!isEnvBrowser()) setPages('dashboard');
          else setBack(!back);
        }
      };

      window.addEventListener("keydown", keyHandler);

      return () => window.removeEventListener("keydown", keyHandler);
    }, [back]);
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
      className="w-[50%] h-fit bg-card rounded-xl flex flex-col"
    >
            <button onClick={() => {
            setPages('dashboard')
      }} className="w-fit bg-none absolute self-end pr-1 pt-1"><XIcon/></button>
      <Label className="w-full flex items-center justify-center text-2xl p-2">
        Personal Invoices
      </Label>
      <div ref={setContainer} className="w-full h-full p-3 flex flex-col ">
        <ModalsProvider>
          <DataTable columns={columns} data={data} />
        </ModalsProvider>
      </div>
    </motion.div>
  )
}

export default PersonalInvoices