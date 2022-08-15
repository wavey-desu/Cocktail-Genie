import React, {useState, useEffect} from 'react'
import {useFetch} from './useFetch'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import './IngredientFilter.css'


export default function IngredientFilter({handleIngredientsOption}) {
  const {data, isPending, error} = useFetch('https://www.thecocktaildb.com/api/json/v2/9973533/list.php?i=list');
  const [options, setOptions] = useState([]);
  const [value1, setValue1] = useState('')
  const [value2, setValue2] = useState('')
  const [value3, setValue3] = useState('')

  useEffect(() => {
    const ings = []
    if (data && !isPending && !error) {
      for(const prop in data.drinks){
        ings.push(data.drinks[prop].strIngredient1);
      }
    }
    setOptions(...[ings])
  }, [data,isPending,error])
  // console.log(options);
  
  const handleValue = (e) => {
    e.preventDefault()
    let inputs = ''

    if(value1 !== ''){
      inputs = value1
    }
    if(value2 !== '' && value2 !== value1){
      inputs = inputs + ',' + value2
    }
    if(value3 !== '' && value3 !== value1 && value3 !== value2){
      inputs = inputs + ',' + value3
    }
    if (inputs !== ''){
      handleIngredientsOption(inputs)
    }
    // console.log(v);
  }


  return (
    <form className='ingredientsForm' onSubmit={handleValue}>
      <h1 className='ingredientsLabel'>Search By Ingredients</h1>

      <div className='ingredientsInputs'>
          <Autocomplete
          disablePortal
          value={value1}
          onChange={(event, newValue) => setValue1(newValue)}
          inputValue={value1}
          onInputChange={(event, newValue) => setValue1(newValue)}
          // sx = {{}}
          id="ingredient-filter"
          options={options}
          sx={{ width: '100%' }}
          renderInput={(params) => <TextField {...params} label="Ingredient" 
          inputProps={{ ...params.inputProps, style: { fontSize: "1vw" } }}
          InputLabelProps={{ ...params.inputProps, style: { fontSize: "1vw" } }}
 
          />}
          

        />    
          <Autocomplete
          disablePortal
          value={value2}
          onChange={(event, newValue) => setValue2(newValue.replace(' ','_'))}
          inputValue={value2}
          onInputChange={(event, newValue) => setValue2(newValue.replace(' ','_'))}
          id="ingredient-filter"
          options={options}
          sx={{ width: '100%' }}
          renderInput={(params) => <TextField {...params} label="Ingredient" 
          inputProps={{ ...params.inputProps, style: { fontSize: "1vw" } }}
          InputLabelProps={{ ...params.inputProps, style: { fontSize: "1vw" } }}

          />}


        /> 
          <Autocomplete
          disablePortal
          value={value3}
          onChange={(event, newValue) => setValue3(newValue.replace(' ','_'))}
          inputValue={value3}
          onInputChange={(event, newValue) => setValue3(newValue.replace(' ','_'))}
          id="ingredient-filter"
          options={options}
          sx={{ width: '100%' }}
          renderInput={(params) => <TextField {...params} label="Ingredient" 
          inputProps={{ ...params.inputProps, style: { fontSize: "1vw" } }}
          InputLabelProps={{ ...params.inputProps, style: { fontSize: "1vw" } }}
          />}

        /> 
        <button className='ingredientsSubmit'>Submit</button>
      </div>

    </form>
)
}
