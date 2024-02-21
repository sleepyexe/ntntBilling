import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import { Label } from '@radix-ui/react-label'
import { usePages } from '@/state/page'
import { DataTable } from './Components/data-table'
import { columns } from './Components/columns'
import { Undo2Icon } from 'lucide-react'
import { isEnvBrowser } from "@/utils/misc";
import {useBack} from '@/state/back'
import { InvoicesProps } from '@/types/invoices'
import { Button } from '@/components/ui/button'
const data:InvoicesProps[]  = [{
  "ref": "ABC1234",
  "amount": 570,
  "society": "police",
  "society_label": "LSPD",
  "author": "sid91238asdjhasd",
  "author_name": "Aloin Chandlar",
  "status": "paid",
  "note": "Speeding"
}, {
  "ref": "ABC1234",
  "amount": 14370,
  "society": "ambulance",
  "society_label": "EMS",
  "author": "sid91238asdjhasd",
  "author_name": "Tarah MacCafferky",
  "status": "paid",
  "note": "Treatment"
}, {
  "ref": "ABC1234",
  "amount": 2853,
  "society": "police",
  "society_label": "EMS",
  "author": "sid91238asdjhasd",
  "author_name": "Worden Sheeres",
  "status": "unpaid",
  "note": "Speeding"
}, {
  "ref": "ABC1234",
  "amount": 10448,
  "society": "police",
  "society_label": "LSPD",
  "author": "sid91238asdjhasd",
  "author_name": "Willie Farryann",
  "status": "unpaid",
  "note": "Speeding"
}, {
  "ref": "ABC1234",
  "amount": 15065,
  "society": "police",
  "society_label": "EMS",
  "author": "sid91238asdjhasd",
  "author_name": "June Fleote",
  "status": "paid",
  "note": "Speeding"
}, {
  "ref": "ABC1234",
  "amount": 8585,
  "society": "police",
  "society_label": "LSPD",
  "author": "sid91238asdjhasd",
  "author_name": "Lorenzo Caton",
  "status": "unpaid",
  "note": "Treatment"
}, {
  "ref": "ABC1234",
  "amount": 11392,
  "society": "police",
  "society_label": "EMS",
  "author": "sid91238asdjhasd",
  "author_name": "Tucky Niesel",
  "status": "paid",
  "note": "Speeding"
}, {
  "ref": "ABC1234",
  "amount": 19684,
  "society": "ambulance",
  "society_label": "EMS",
  "author": "sid91238asdjhasd",
  "author_name": "Tamar Pacey",
  "status": "paid",
  "note": "Speeding"
}, {
  "ref": "ABC1234",
  "amount": 8435,
  "society": "ambulance",
  "society_label": "LSPD",
  "author": "sid91238asdjhasd",
  "author_name": "Harmony Hucks",
  "status": "unpaid",
  "note": "Treatment"
}, {
  "ref": "ABC1234",
  "amount": 19456,
  "society": "ambulance",
  "society_label": "EMS",
  "author": "sid91238asdjhasd",
  "author_name": "Raoul Gingel",
  "status": "unpaid",
  "note": "Speeding"
}, {
  "ref": "ABC1234",
  "amount": 2373,
  "society": "ambulance",
  "society_label": "LSPD",
  "author": "sid91238asdjhasd",
  "author_name": "Stu Kelshaw",
  "status": "paid",
  "note": "Treatment"
}, {
  "ref": "ABC1234",
  "amount": 10250,
  "society": "ambulance",
  "society_label": "EMS",
  "author": "sid91238asdjhasd",
  "author_name": "Raynard McGonigal",
  "status": "unpaid",
  "note": "Treatment"
}, {
  "ref": "ABC1234",
  "amount": 19099,
  "society": "police",
  "society_label": "EMS",
  "author": "sid91238asdjhasd",
  "author_name": "Adey Tichner",
  "status": "unpaid",
  "note": "Treatment"
}, {
  "ref": "ABC1234",
  "amount": 6982,
  "society": "police",
  "society_label": "EMS",
  "author": "sid91238asdjhasd",
  "author_name": "Hobard Kester",
  "status": "unpaid",
  "note": "Treatment"
}, {
  "ref": "ABC1234",
  "amount": 13145,
  "society": "police",
  "society_label": "LSPD",
  "author": "sid91238asdjhasd",
  "author_name": "Welch Eustanch",
  "status": "paid",
  "note": "Speeding"
}]

const PersonalInvoices = () => {
    const [pages, setPages] = usePages()
      // Handle pressing escape/backspace
    // useEffect(() => {
    //   // Only attach listener when we are visible
    //   if (!back) return;

    //   const keyHandler = (e: any) => {
    //     if (["Backspace", "Escape"].includes(e.code)) {
    //       if (isEnvBrowser()) setPages('dashboard');
    //       else setBack(!back);
    //     }
    //   };

    //   window.addEventListener("keydown", keyHandler);

    //   return () => window.removeEventListener("keydown", keyHandler);
    // }, [back]);

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
      <Button onClick={()=> setPages('dashboard')} className='gap-1 w-[10%] self-end mr-3'><Undo2Icon/>Back</Button>
      <div className="w-full h-full p-3 flex flex-col ">
        <DataTable columns={columns} data={data} />
      </div>
    </motion.div>
  )
}

export default PersonalInvoices