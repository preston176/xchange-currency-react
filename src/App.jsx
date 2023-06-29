import { useState } from 'react'
import { Button, Container, Typography } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Container maxWidth='md' sx={{ background: '#fdfdfd'}}>
      <Typography variant='h5' sx={{ marginTop: '2rem'}}>Stay Ahead With Accurate Conversions</Typography>
      </Container>
       
    </>
  )
}

export default App
