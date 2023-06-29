import { useState } from 'react'
import { Button } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app'>
      <Button>click</Button>
      </div>
       
    </>
  )
}

export default App
