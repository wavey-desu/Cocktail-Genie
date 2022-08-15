import React, {useState, useEffect} from 'react'
//Styles
import './App.css';
//Components
import {useFetch} from './components/useFetch'
import DrinkCard from './components/DrinkCard'
import DrinkModal from './components/DrinkModal'
import IngredientFilter from './components/IngredientFilter'
import SearchFilter from './components/SearchFilter'
import AlcoholFilter from './components/AlcoholFilter'
import Nav from './components/Nav'


function App() {
 const [urlOption, setUrlOption] = useState('popular.php')
const [url, setUrl] = useState('https://www.thecocktaildb.com/api/json/v2/9973533/' + urlOption)
const {data, isPending, error} = useFetch(url);
const [drinks, setDrinks] = useState([]);
const [rDrinks, setRDrinks] = useState([]);
const [resultsTitle, setResultsTitle] = useState('Popular Drinks')
const [open, setOpen] = useState(false); //modal open/note open state
const [drinkId, setDrinkId] = useState('') // modal 
const [alcFilter, setAlcFilter] = useState('')

const handleOpen = () => setOpen(true);//drink modal open
const handleClose = () => setOpen(false);//drink modal close
const handleId = (id) => setDrinkId( prevDrinkId => {return 'https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=' + id})

const handleSearch = (v) => {
  if (v) {
    setUrlOption(prevOption => {return 'search.php?s=' + v})
    setResultsTitle(prevTitle => {return 'Results for: "' + v.replace('_', ' ') + '"'})
  }
}

const handeIngredientsOption = (v) => {
  if (v){
    setUrlOption(prevOption => {return 'filter.php?i=' + v})
    setResultsTitle(prevTitle => {return 'Drinks that include: ' + v.replace('_', ' ').replace(',', ', ')})
  }
}
console.log(url);

useEffect(() => {
  setUrl(prevUrl => {return 'https://www.thecocktaildb.com/api/json/v2/9973533/' + urlOption})
  if (data) {
    setDrinks(prevDrinks => {return data.drinks})
  }
}, [data,url,urlOption])

useEffect(() => { //set filtered drinks
  if (drinks === 'None Found' || !drinks) {
    setRDrinks([])
  } else{
    if (alcFilter !== '' && drinks ){
      setRDrinks( prevDrinks => {return drinks.filter((drink) => {
        return drink.strAlcoholic === alcFilter
      })})
  
    }else if (drinks && drinks){
      setRDrinks( prevDrinks => {return drinks.filter((drink) => {
        return drink.strAlcoholic !== null
      })})
  
    }
  }
},[alcFilter,drinks])
// console.log(rDrinks);



  return (
    <div className="App">
      <h1 className='appTitle'>Cocktail Genie</h1>
      <DrinkModal 
        open = {open} 
        handleClose = {handleClose}
        drinkId = {drinkId}         
        />

      <header className="header">
        <h1 className='resultsTitle'>{resultsTitle}</h1>
      </header>
      <div className='appContainer'>
        <div className='filterPage'>

          <Nav 
            setUrlOption = {setUrlOption}
            setResultsTitle = {setResultsTitle}
          />
        
          <div className='filterCont searchFilter'>
            <SearchFilter 
              handleSearch = {handleSearch}
            />

          </div>
          
          <div className='filterCont ingredientsFilter'>
            <IngredientFilter
              handleIngredientsOption = {handeIngredientsOption}
              />
          </div>

          <div className='filterCont alcoholicFilter'>
            <AlcoholFilter
              setAlcFilter = {setAlcFilter}
             />
          </div>

        </div>

        <div className='resultsPage'>
            {rDrinks && !isPending && !error && rDrinks.length === 0 ? <h1 className='errorMsg'>Oops..try that again...</h1> : rDrinks.map(drink => (
            <DrinkCard 
              key = {drink.idDrink}
              id = {drink.idDrink}
              name = {drink.strDrink}
              img = {drink.strDrinkThumb}
              handleOpen = {handleOpen}
              handleId = {handleId}
             />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
