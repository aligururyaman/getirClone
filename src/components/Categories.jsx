import React, { useEffect, useState } from 'react'
import categoryData from '../api/categories.json'
import Category from './ui/Category';

const Categories = () => {

  const[categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(categoryData)
  }, [])


  return (
    <div className='bg-white py-4 '>
      <div className='container mx-auto  h-[309px] w-full'>
        <h3 className='text-m font-sans font-semibold mb-3'>Kategoriler</h3>
        <div className='grid grid-cols-10'>
          {!categories.length && 'Yükleniyor...'}
          {categories && categories.map((category,index) => <Category key={index} category={category}/>)}
        </div>
      </div>
    </div>
  )
}

export default Categories