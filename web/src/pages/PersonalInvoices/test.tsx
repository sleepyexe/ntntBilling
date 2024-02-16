import React from 'react'
import {motion} from 'framer-motion'
import { Label } from '@radix-ui/react-label'
import { usePages } from '@/state/page'


type Props = {}

const TestMenu = (props: Props) => {

    const [pages, setPages] = usePages()
    const keyHandler = (e: KeyboardEvent) => {
        if (["Backspace", "Escape"].includes(e.code)) {
            setPages('dashboard')
        }
      };
  
    window.addEventListener("keydown", keyHandler);

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
      className="w-[30%] h-[20%] bg-card rounded-xl overflow-auto flex flex-col"
    >
      <Label className="w-full flex items-center justify-center text-2xl p-2">
        Personal Invoices
      </Label>
    </motion.div>
  )
}

export default TestMenu