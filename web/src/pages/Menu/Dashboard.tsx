import React from 'react'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import Menu from './Components/Menu'

type Props = {}

const Dashboard = (props: Props) => {
  return (
    <div className='w-[30%] h-[20%] bg-card rounded-xl overflow-auto flex flex-col'>
        <Label className='w-full flex items-center justify-center text-2xl p-2'>Billing Menu</Label>
        <div className='w-full h-full p-3 flex flex-col'>
            <Separator className='bg-muted-foreground'/>
            <Menu/>
        </div>
    </div>
  )
}

export default Dashboard