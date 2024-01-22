import React from 'react'

const Card = ({ card: {id, title, image, titleMain}}) => {
  return (
    <div className='m-2 bg-white rounded-lg border 
    border-gray-50'>
        <a href="#" className='flex flex-col gap-y-2 items-center text-center group  pt-[60px] pb-[40px]'>
            <img src={image} alt={title} className='items-center'/>
            <span className='text-primary-brand-color font-semibold text-2xl'>{titleMain}</span>
            <p className='text-gray-500 text-lg'>{title}</p>
        </a>
    </div>
  )
}

export default Card