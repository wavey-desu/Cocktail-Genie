import React, {useState} from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import './AlcoholFilter.css'

export default function AlcoholFilter({setAlcFilter}) {
  const [value,setValue] = useState('')

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const style = {
    '&.Mui-checked': {
      color: '#76323f !important',
    },
    '& .MuiSvgIcon-root': {
      fontSize: '1.5vw',
    },
    
  }

  return (
    <div className='AlcFilterCont'>
      <h1 className='AlcFilterTitle'>Filter By Alcoholic</h1>
      <FormControl >
        <RadioGroup
          className='AlcFilterRadio'
          row
          aria-labelledby="alcohol-filter"
          name="alcohol-filter-radio"
          value={value}
          onClick={(e) => setAlcFilter(e.target.value)}
          onChange={handleChange}
          
        >
          <FormControlLabel value= '' control={<Radio  sx={style}/>} label="Both" />
          <FormControlLabel value="Alcoholic" control={<Radio sx={style} />} label="Alcoholic" />
          <FormControlLabel value="Non alcoholic" control={<Radio sx={style} />} label="Non-Alcoholic" />

        </RadioGroup>
    </FormControl>

    </div>
  )
}
