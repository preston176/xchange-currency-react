import { Autocomplete, Grid, TextField } from '@mui/material'
import React from 'react'

function SelectCountry() {
  return (
    <Grid item xs={12}>
        
        <Autocomplete
        value="option1"
       options={["option1", "option2"]}
       renderInput={(params) => <TextField {...params} label="from"/>}
      />
    </Grid>
  )
}

export default SelectCountry