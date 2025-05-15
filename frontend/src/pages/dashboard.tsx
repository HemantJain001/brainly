import { Button } from '../components/ui/Buttons'
import { PlusIcon } from '../icons/PlusIcon'
import { ShareIcon } from '../icons/ShareIcon'
import { Card } from '../components/ui/Card'
import { CreateContentModal } from '../components/ui/CreateContentModal'
import { useState } from 'react'
import { Sidebar } from '../components/ui/Sidebar'

export function Dashboard() {
  const [modelOpen, setModelOpen] = useState(false);

  return (
    <>
      <Sidebar />
      <div className='ml-68'>
      <div className='flex gap-4 justify-end mt-4 mr-4'>
      <Button startIcon={<PlusIcon size="md"/>} variant="primary" size="md" text="Add Content" onClick={()=>setModelOpen(true)} />

      <Button variant="secondary" size="md" endIcon={<ShareIcon size="md"/>} text="Share Brain" onClick={() => alert('Button clicked!')} />
      </div>


      <br />
      <div className='flex gap-4'>
        <Card link='https://www.youtube.com/watch?v=fWCxWHsczWg' type="youtube" title='My First Link'></Card>
        <Card link='https://x.com/zeedee93/status/1922584388451119452' type="twitter" title='My First Link'></Card>
      </div>
      </div>
      <CreateContentModal open={modelOpen} onClose={()=>setModelOpen(false)}/>
    </>
  )
}