import React from 'react'
import { LucideIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { UserIcon, ScrollTextIcon, SendIcon, SearchIcon, HotelIcon } from 'lucide-react'
import { Label } from '@/components/ui/label'
import MenuButton from './MenuButton'

type Props = {}

const Menu = (props: Props) => {
  return (
    <>
        <div className='w-full h-full flex justify-center items-center gap-3'>
        <MenuButton menu='test' icon={UserIcon} label={<>Personal <br></br> Invoices</>}/>
        {/* <Button onClick={() => {
            setmenu('test')
        }} className='flex flex-col w-[10vh] h-[10vh] gap-2'>
            <UserIcon size="5vh"/>
            <Label className='font-bold'>
                Personal<br></br> Invoices
            </Label>
        </Button>
        <Button variant="default" className='flex flex-col w-[10vh] h-[10vh] gap-2'>
            <ScrollTextIcon size="5vh"/>
            <Label className='font-bold'>
                Pay<br></br> Reference
            </Label>
        </Button>
        <Button className='flex flex-col w-[10vh] h-[10vh] gap-2'>
            <SendIcon size="5vh"/>
            <Label className='font-bold'>
                Create<br></br> Invoice
            </Label>
        </Button>
        <Button className='flex flex-col w-[10vh] h-[10vh] gap-2'>
            <SearchIcon size="5vh"/>
            <Label className='font-bold'>
                Inspect<br></br> Citizen
            </Label>
        </Button>
        <Button className='flex flex-col w-[10vh] h-[10vh] gap-2'>
            <HotelIcon size="5vh"/>
            <Label className='font-bold'>
                Society<br></br> Invoices
            </Label>
        </Button> */}
        </div>
    </>
  )
}

export default Menu