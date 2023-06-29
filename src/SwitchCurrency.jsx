import React from 'react'
import { Grid, Button } from '@mui/material'
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';

function SwitchCurrency() {
  return (
    <Grid item xs={12} md="auto">
        <Button sx={{borderRadius: 1,
        height: "100%"}}>
        <CompareArrowsIcon sx={{fontSize: 30}}/>
        </Button>
    </Grid>
  )
}

export default SwitchCurrency