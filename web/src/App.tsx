import React from 'react'
import Dashboard from './pages/Menu/Dashboard'
import { debugData } from './utils/debugData'
import { useVisibility } from './providers/VisibilityProvider'
debugData([
    {
        action: 'setVisible',
        data: true
    }
])

type Props = {}

const App = (props: Props) => {
    const {visible, setVisible} = useVisibility();
  return (
    <div className='w-screen dark h-screen justify-center items-center flex'>
        {visible && (
            <Dashboard/>
        )}
    </div>
  )
}

export default App