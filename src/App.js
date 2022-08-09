import { useState, useEffect } from 'react'

// styles | components //
import './App.css';
import {useFetch} from './components/useFetch'

function App() {
const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=beer'
const {data, isPending, error} = useFetch(url)
const {drinks,setDrinks} = useState([])

console.log(data);
  return (
    <div className="App">
      <header className="header">

      </header>
      <div className='appContainer'>
        <div className='searchBar'>

        </div>

        <div className='resultsPage'>

        </div>
      </div>
    </div>
  );
}

export default App;
