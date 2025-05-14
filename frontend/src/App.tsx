import './App.css'
import { Button } from './components/ui/Buttons'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'

function App() {

  return (
    <>
      <Button startIcon={<PlusIcon size="sm"/>} variant="secondary" size="sm" text="Click Me" onClick={() => alert('Button clicked!')} />

      <Button variant="primary" size="md" endIcon={<ShareIcon size="md"/>} text="Click Me" onClick={() => alert('Button clicked!')} />
    </>
  )
}

export default App
