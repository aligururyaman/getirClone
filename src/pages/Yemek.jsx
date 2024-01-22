import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CardsY from '../components/CardsY'
import HeroSectionY from '../components/HeroSectionY'

const Yemek = () => {
  return (
    <div>
        <Header />
        <HeroSectionY />
        <div className='container mx-auto mb-8'>
        <CardsY />
        </div>
        {/* restoran sahibi bölümü buraya gelecek */}

        <Footer />
        
    </div>
  )
}

export default Yemek