import { useState } from 'react'
import { Button, Container, Grid, Typography } from '@mui/material'
import InputAmount from './components/InputAmount'
import SelectCountry from './components/SelectCountry'
import SwitchCurrency from './SwitchCurrency'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Container maxWidth='md' sx={{ background: '#fdfdfd'}}>
      <Typography variant='h5' sx={{ marginBottom: '2rem'}}>Stay Ahead With Accurate Conversions</Typography>
      <Grid container spacing={2}>
        <InputAmount />
        <SelectCountry />
        <SwitchCurrency />
        <SelectCountry />
      </Grid>
      </Container>
       
    </>
  )
}

export default App
