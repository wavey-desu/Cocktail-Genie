import React, {useState} from 'react'
import TextField from '@mui/material/TextField';

export default function SearchFilter({handleSearch}) {
    const [value, setValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if (value !== '') {
            handleSearch(value)
        }
    }

  return (
    <form onSubmit={handleSubmit}>
        <TextField id="searchBar" label="Search | e.g. Mojito" variant="outlined"
         onChange={(e) => setValue(e.target.value.replace(' ','_'))} />
        <button>search</button>
    </form>
  )
}
