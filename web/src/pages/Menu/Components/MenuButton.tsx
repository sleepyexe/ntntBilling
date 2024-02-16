import React from 'react'
import {LucideIcon} from "lucide-react"
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { useVisibility } from '@/providers/VisibilityProvider'
import { setPages } from '@/state/page'
type Props = {
    icon: LucideIcon,
    label: React.ReactNode,
    menu: string, 
}

const MenuButton = (props: Props) => {
    const {visible, setVisible} = useVisibility();
    const setPage = setPages()
  return (
    <Button onClick={() => {
        setVisible(false);
        setPage(props.menu);
    }} className='flex flex-col w-[10vh] h-[10vh] gap-2'>
        <props.icon size="5vb"/>
        <Label className='font-bold'>
            {props.label}
        </Label>
    </Button>
  )
}

export default MenuButton