import React from 'react'
import './Nav.css'

export default function Nav({setUrlOption}) {
  return (
    <div className='navBar'>
        <button onClick={() => setUrlOption('popular.php')}>Popular</button>
        <button onClick={() => setUrlOption('randomselection.php')}>10 Random</button>
        <button onClick={() => setUrlOption('latest.php')}>Latest Additions</button>
    </div>
  )
}
