import React from 'react'
import './Nav.css'

export default function Nav({setUrlOption, setResultsTitle}) {
  return (
    <div className='navBar'>
        <button onClick={() => {setUrlOption('popular.php'); setResultsTitle(prevTitle => {return 'Popular Drinks'});}}>Popular</button>
        <button onClick={() => {setUrlOption('randomselection.php'); setResultsTitle(prevTitle => {return '10 Random Drinks'});}}>Random</button>
        <button onClick={() => {setUrlOption('latest.php'); setResultsTitle(prevTitle => {return 'Latest Additions'});}}>Latest</button>
    </div>
  )
}
