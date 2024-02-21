import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import { Button } from "@/components/ui/button"
import { SearchIcon, Undo2Icon, BanknoteIcon } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { usePages } from '@/state/page'
import SpinningLoader from '@/components/SpinningLoader'
import { fetchNui } from '@/utils/fetchNui'
type Props = {}

type playerData = {
    amount?: number,
    society?: string,
    society_label?: string,

}

const PayReferences = (props: Props) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<playerData>({});
    const [ref, setRef] = useState<string>('');
    const [pages, setPages] = usePages()

    const handleSubmit = async () => {
        setLoading(true)
        await fetchNui('payreferences', {ref: ref}).then((retData: any) => {
            console.log(JSON.stringify(retData))
        }).catch((err: any) => {
            setData({
                amount: 0,
                society: 'Test',
                society_label: 'EMS'
            })
            console.log(JSON.stringify(err))
        })
        setLoading(false)
    }
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
          className="w-[20%] h-fit bg-card rounded-xl flex flex-col"
        >
          <Label className="w-full flex items-center justify-center text-2xl p-2">
            Pay References
          </Label>
          <Button onClick={()=> setPages('dashboard')} className='gap-1 w-[20%] self-end mr-3'><Undo2Icon size={20}/>Back</Button>
          <div className='w-full p-10'>
            <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Reference Id</Label>
                <Input onChange={(e: any) => {
                    setRef(e.target.value)
                }} type='string' placeholder="ABC12345" />
                </div>
                {
                    data.amount && (
                        <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="name">Reference Id</Label>
                        <Input disabled type='string' value={data.amount} />
                        </div>
                    )
                }
            <Button onClick={() => {
            setData({
                amount: 10
            })
        }} className='flex justify-center items-center gap-1 text-sm'>{loading ? (
            <>
            <SpinningLoader/>
            Loading
            </>
            ) : (
                <>
                {
                    data.amount ? (
                        <>
                        <BanknoteIcon size={20}/>
                        Pay
                        </>
                    ) : (
                        <>
                        <SearchIcon size={20}/>
                        Search
                        </>
                    )
                }
                </>
            )}</Button>
            </div>
          </div>
        </motion.div>
      )
}

export default PayReferences