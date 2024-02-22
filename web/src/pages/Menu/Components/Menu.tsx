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
        <div className='w-full h-full flex justify-center items-center gap-3 p-2'>
            <MenuButton menu='personal' icon={UserIcon} label={<>Personal <br></br> Invoices</>}/>
            <MenuButton menu='payref' icon={ScrollTextIcon} label={<>Pay<br></br> Reference</>}/>
            <MenuButton menu='inspect' icon={SearchIcon} label={<>Inspect<br></br> Citizen</>}/>
            <MenuButton menu='test' icon={HotelIcon} label={<>Society<br></br> Invoices</>}/>
        </div>
    </>
  )
}

export default Menu