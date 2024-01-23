import React from 'react'

const Products = ({ products: {id, title, image, alt, price}}) => {
  return (
    
    <div>{id}
        <div>
        <img src={image} alt="" />
        </div>
    </div>
  )
}

export default Products