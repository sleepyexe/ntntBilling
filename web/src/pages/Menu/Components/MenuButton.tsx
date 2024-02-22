import React from 'react'
import {LucideIcon} from "lucide-react"
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { usePages } from '@/state/page'
import { useBack } from '@/state/back'
type Props = {
    icon: LucideIcon,
    label: React.ReactNode,
    menu: string, 
}

const MenuButton = (props: Props) => {
    const [pages, setPages] = usePages()
    const [back, setBack] = useBack()
    return (
    <Button onClick={() => {
        setBack(true);
        setPages(props.menu);
    }} className='flex flex-col w-[10vh] h-[10vh] gap-2'>
        <props.icon size="5vb"/>
        <Label className='font-bold'>
            {props.label}
        </Label>
    </Button>
  )
}

export default MenuButton