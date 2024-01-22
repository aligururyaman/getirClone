import React from 'react'

const Category = ({ category: {id, title, image}}) => {
  return (
    <div>
        <a href="#" className='flex flex-col items-center gap-y-2 text-center p-6 hover:bg-purple-100 group'>
            <img src={image} alt={title} className='w-12 h-12 rounded-lg border border-gray-200' />
            <span className='text-sm font-semibold text-gray-500 group-hover:text-brand-color tracking-tight'>{title}</span>
        </a>
    </div>
  )
}

export default Category