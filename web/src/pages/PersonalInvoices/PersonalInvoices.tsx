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


const PersonalInvoices = () => {
    const [pages, setPages] = usePages()
    const [back, setBack] = useBack()
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
      <Label className="w-full flex items-center justify-center text-2xl p-2">
        Personal Invoices
      </Label>
      <div className="w-full h-full p-3 flex flex-col ">
        <DataTable columns={columns} data={data} />
      </div>
    </motion.div>
  )
}

export default PersonalInvoices