import React, {useState} from 'react'
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
// import styled from "styled-components";
import './SearchFilter.css'

export default function SearchFilter({handleSearch}) {
    const [value, setValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if (value !== '') {
            handleSearch(value)
        }
    }

    

  return (
    <form className='nameSearchForm' onSubmit={handleSubmit}>
        <h3 className='searchLabel'>Search by Name</h3>
        <div className='nameSearchCont'>
        
            <TextField className='nameSearchIn' id="searchBar" label="e.g. Mojito" variant="outlined"
            onChange={(e) => setValue(e.target.value.replace(' ','_'))} 
            sx={{ width: '100%' }} 
            inputProps={{style: {fontSize: '1vw'}}}
            InputLabelProps={{style: {fontSize: '1vw'}}}
            />
            <IconButton type="submit" aria-label="search" sx={{ width: '3vw', height: '3vw' }} >
                <SearchIcon className='searchIcon' sx={{ width: '100%' }}/>
            </IconButton>
        </div>
    </form>
  )
}
