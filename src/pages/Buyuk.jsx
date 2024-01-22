import React from 'react'
import Header from '../components/Header'
import Categories from '../components/Categories'
import MobileApp from '../components/MobileApp'
import Footer from '../components/Footer'

const Buyuk = () => {
  return (
    <div>
        <Header />

        {/* Buraya özel herosection yapılacak */}

        <Categories />
        <div className='container mx-auto mb-8'>
        <MobileApp />
        </div>
        {/* buraya büyük e özel cardlar yapılacak */}

        <Footer />
    </div>
  )
}

export default Buyuk