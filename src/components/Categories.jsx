import React, { useEffect, useState } from 'react'
import categoryData from '../api/categories.json'
import Category from './ui/Category';

const Categories = () => {

  const[categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(categoryData)
  }, [])


  return (
    <div className='bg-white py-4 flex flex-wrap'>
      <div className='container mx-auto  h-80 w-full '>
        <h3 className='text-m font-sans font-semibold mb-3'>Kategoriler</h3>
        <div className='flex flex-wrap'>
          {!categories.length && 'Yükleniyor...'}
          {categories && categories.map((category,index) => <Category key={index} category={category}/>)}
        </div>
      </div>
    </div>
  )
}

export default Categories