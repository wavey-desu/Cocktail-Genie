import React, {useState, useEffect} from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {useFetch} from './useFetch'
import './DrinkModal.css'


export default function DrinkModal({open,  handleClose, drinkId}) {
    const {data, isPending, error} = useFetch(drinkId);
    const [drink, setDrink] = useState([]);
    const [ingredients, setIngredients] = useState([])


    useEffect(() => {
        if (data !== null) {
          setDrink(prevDrink => {return {...data.drinks[0]}})
        }
    }, [data])
    
    useEffect(() => { //useEffect on selected drink to get ingredients bc JSON format is trash
        const ing = []
        const measures = []
        const ings = {}

        for (const prop in drink) {
            if (prop.startsWith('strIngredient')){
                if (drink[prop]) {
                    ing.push(drink[prop])
                }
            } else if (prop.startsWith('strMeasure')){
                if (drink[prop]) {
                    measures.push(drink[prop])
                }
            }
        }

        for(let i=0; i<ing.length; i++){
            if (measures[i]){
                ings[i] = {
                    name: ing[i],
                    measure: measures[i]
                }
            } else {
                ings[i] = {
                    name: ing[i],
                    measure: 'To Taste'
                }
            }
        }
        setIngredients({...ings})
    }, [drink])
    // console.log(ingredients);
    
    
  return (
    <div>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="Drink recipe"
        aria-describedby="Drink Recipe"
      >
        <Box className='modalBox'>
        <div className='modalContents'>
            <div className='modalSection modalInfo'>
                <img className='modalImg' src={drink.strDrinkThumb} alt="Drink" />
                <h3>{drink.strInstructions}</h3>
            </div>
            <div className="modalSection modalIngredients">
            <h1 className='modalTitle'>{drink.strDrink}</h1>
                <table>
                    <tr>
                        <th>Ingredient</th>
                        <th>Quantity</th>
                    </tr>
                {ingredients && Object.keys(ingredients).map((ingredient, index) => ( //iterate trough objects of ingredient object
                    <tr>
                    <td key={index}>{ingredients[ingredient].name}</td>
                    <td key={index}>{ingredients[ingredient].measure}</td>
                    </tr>
                    
                ))}
                </table>
            </div>
        </div>
        </Box>
      </Modal>
    </div>
  )
}
