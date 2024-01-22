import React, { useEffect, useState } from 'react'
import cardData from '../api/cards.json'
import Card from './ui/Card';

const Cards = () => {

  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(cardData)
  }, [])


  return (
    <div className=''>
        <div className='mx-auto mt-10 w-auto grid grid-cols-3 h-90 mb-10'>
            
              {cards && cards.map((card,index) => <Card key={index} card={card}/>)}
            
        </div>
    </div>
  )
}

export default Cards