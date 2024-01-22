import React, { useEffect, useState } from 'react'
import cardDataY from '../api/cardsy.json'
import CardY from './ui/Card';

const CardsY = () => {

  const [cardsY, setCardsY] = useState([]);

  useEffect(() => {
    setCardsY(cardDataY)
  }, [])


  return (
    <div className=''>
        <div className='mx-auto mt-10 w-auto grid grid-cols-3 h-90 mb-10'>
            
              {cardsY && cardsY.map((cardy,index) => <CardY key={index} card={cardy}/>)}
            
        </div>
    </div>
  )
}

export default CardsY