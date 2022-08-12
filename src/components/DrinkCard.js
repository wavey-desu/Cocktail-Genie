import React from 'react'
import './DrinkCard.css'

export default function DrinkCard({name, img, id, handleOpen, handleId}) {
  return (
    <div className='card' onClick={() => {handleOpen(); handleId(id)}}>
        <img src={img} alt={name} />
        <h2 className='cardTitle'>{name}</h2>
    </div>
  )
}
