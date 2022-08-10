
import React, {useState, useEffect} from 'react'
// styles | components //
import './App.css';
import {useFetch} from './components/useFetch'
import DrinkCard from './components/DrinkCard'
import DrinkModal from './components/DrinkModal'



function App() {
const [url, setUrl] = useState('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=bourbon')
const {data, isPending, error} = useFetch(url);
const [drinks, setDrinks] = useState([]);
const [open, setOpen] = useState(false);

const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);

useEffect(() => {
  if (data !== null) {
    setDrinks(prevDrinks => {return data.drinks})
  }
}, [data])


  return (
    <div className="App">
      <DrinkModal open = {open} handleClose = {handleClose}/>
      <header className="header">

      </header>
      <div className='appContainer'>
        <div className='searchBar'>

        </div>

        <div className='resultsPage'>
          {drinks && drinks.map(drink => (
            <DrinkCard 
              key = {drink.idDrink}
              id = {drink.idDrink}
              name = {drink.strDrink}
              img = {drink.strDrinkThumb}
              handleOpen = {handleOpen}
             />

          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
