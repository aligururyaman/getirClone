import React from 'react'

const CardY = ({ cardy: {id, title, image, titleMain}}) => {
  return (
    <div className='m-2 bg-white rounded-lg border 
    border-gray-50'>
        <div className='flex flex-col gap-y-2 items-center text-center group  pt-16 
        pb-10'>
            <img src={image} alt={title} className='items-center'/>
            <span className='text-primary-brand-color font-semibold text-xl'>{titleMain}</span>
            <p className='text-gray-500 text-lg'>{title}</p>
        </div>
    </div>
  )
}

export default CardY