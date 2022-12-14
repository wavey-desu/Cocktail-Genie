import React, {useState, useEffect} from 'react'
import {useFetch} from './useFetch'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import './IngredientFilter.css'


export default function IngredientFilter({handleIngredientsOption}) {
  const {data, isPending, error} = useFetch('https://www.thecocktaildb.com/api/json/v2/'+ process.env.REACT_APP_KEY + '/list.php?i=list');
  const [options, setOptions] = useState([]);
  const [value1, setValue1] = useState('')
  const [value2, setValue2] = useState('')
  const [value3, setValue3] = useState('')
  const [changeValue1, setChangeValue1] = useState('')
  const [changeValue2, setChangeValue2] = useState('')
  const [changeValue3, setChangeValue3] = useState('')

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

    if(value1 && value1 !== ''){
      inputs = value1
    }
    if(value2 && value2 !== '' && value2 !== value1){
      inputs = inputs + ',' + value2
    }
    if(value3 && value3 !== '' && value3 !== value1 && value3 !== value2){
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
          inputValue={changeValue1}
          onInputChange={(event, newValue) => setChangeValue1(newValue)}
          // sx = {{}}
          id="ingredient-filter"
          options={options}
          sx={{ width: '100%' }}
          renderInput={(params) => <TextField {...params} label="Ingredient" 
          inputProps={{ ...params.inputProps, style: { fontSize: "2.25vh" } }}
          InputLabelProps={{ ...params.inputProps, style: { fontSize: "2.25vh" } }}
 
          />}
          

        />    
          <Autocomplete
          disablePortal
          value={value2}
          onChange={(event, newValue) => setValue2(newValue)}
          inputValue={changeValue2}
          onInputChange={(event, newValue) => setChangeValue2(newValue)}
          id="ingredient-filter"
          options={options}
          sx={{ width: '100%' }}
          renderInput={(params) => <TextField {...params} label="Ingredient" 
          inputProps={{ ...params.inputProps, style: { fontSize: "2.25vh" } }}
          InputLabelProps={{ ...params.inputProps, style: { fontSize: "2.25vh" } }}

          />}


        /> 
          <Autocomplete
          disablePortal
          value={value3}
          onChange={(event, newValue) => setValue3(newValue)}
          inputValue={changeValue3}
          onInputChange={(event, newValue) => setChangeValue3(newValue)}
          id="ingredient-filter"
          options={options}
          sx={{ width: '100%' }}
          renderInput={(params) => <TextField {...params} label="Ingredient" 
          inputProps={{ ...params.inputProps, style: { fontSize: "2.25vh" } }}
          InputLabelProps={{ ...params.inputProps, style: { fontSize: "2.25vh" } }}
          />}

        /> 
        <button className='ingredientsSubmit'>Submit</button>
      </div>

    </form>
)
}
