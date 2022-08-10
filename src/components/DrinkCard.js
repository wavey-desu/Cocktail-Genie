import React from 'react'
import './DrinkCard.css'

export default function DrinkCard({name, img, id, handleOpen}) {
  return (
    <div className='card' onClick={() => handleOpen()}>
        <img src={img} alt={name} />
        <h2 className='cardTitle'>{name}</h2>
    </div>
  )
}
