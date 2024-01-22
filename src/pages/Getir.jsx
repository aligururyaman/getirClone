import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import Categories from '../components/Categories'
import MobileApp from '../components/MobileApp'
import Cards from '../components/Cards'
import Footer from '../components/Footer'


const Getir = () => {
  return (
    <>
    
      <Header />
      <HeroSection />
      <Categories />
      <div className='container mx-auto'>
      <MobileApp />
      <Cards />
      </div>
      <Footer />
    </>
  )
}

export default Getir