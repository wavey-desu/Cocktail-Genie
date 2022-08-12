import React, {useState} from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function AlcoholFilter({setAlcFilter}) {
  const [value,setValue] = useState('')

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <FormControl>
    <FormLabel id="alcohol-filter">Choose one</FormLabel>
    <RadioGroup
      row
      aria-labelledby="alcohol-filter"
      name="alcohol-filter-radio"
      value={value}
      onClick={(e) => setAlcFilter(e.target.value)}
      onChange={handleChange}
    >
      <FormControlLabel value= '' control={<Radio />} label="Both" />
      <FormControlLabel value="Alcoholic" control={<Radio />} label="Alcoholic" />
      <FormControlLabel value="Non alcoholic" control={<Radio />} label="Non-Alcoholic" />

    </RadioGroup>
  </FormControl>
  )
}
