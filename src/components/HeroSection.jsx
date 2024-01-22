import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactFlagsSelect from "react-flags-select";

const HeroSection = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear"
  
  };

  const [selected, setSelected] = useState("TR");

  const phones = {
    US: '+1',
    DE: '+050',
    TR: '+90',
    IT: '+7',
    IN: '+15'
  }


  return (
    <div className="relative h-[500px] before:bg-gradient-to-r  before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
        <Slider {...settings}>
          <div>
            <img className="w-full h-[500px] object-cover" src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg"/>
          </div>
          <div>
            <img className="w-full h-[500px] object-cover" src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-1.jpg"/>
          </div>
          <div>
            <img className="w-full h-[500px] object-cover" src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-2.jpg"/>
          </div>
        </Slider>
        <div className="container flex justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 h-full z-20">
          <div>
          <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"/>
          <h1 className="text-white text-xl mt-10 font-semibold">
            Dakikalar içinde kapında
          </h1>
          </div>
          <div className="w-[400px] h-[200px] rounded-lg bg-gray-50 p-8">
            <h1 className="text-primary-brand-color font-semibold text-center mb-4 text-xl">
              Giriş yap veya kayıt ol
            </h1>
            <div className="grid gap-y-3">
              <form className="flex">
                  <ReactFlagsSelect
                    countries={Object.keys(phones)}
                    selected={selected}
                    className="flag-select"
                    customLabels={phones}
                    onSelect={(code) => setSelected(code)}
                  />
                  <label className="flex-1 ml-3 h-[42px] group relative block">
                    <input required className="h-14 px-4 w-[244px] rounded-md border-2 border-gray-300 
                    hover:border-primary-brand-color group-hover:border-primary-brand-color outline-none peer text-m pt-2" />
                    <span className="absolute top-0 left-0 h-full px-4 flex items-center text-[15px] 
                    text-gray-500 peer-focus:h-6 transition-all peer-focus:text-primary-brand-color peer-focus:text-xs 
                    peer-valid:h-6 peer-valid:text-primary-brand-color peer-valid:text-xs">Telefon Numarası</span>
                  </label>
              </form>
              <button className="bg-brand-yellow h-[48px] flex items-center justify-center rounded-md text-xl font-semibold text-primary-brand-color hover:bg-primary-brand-color hover:text-brand-yellow ">
                Telefon numarası ile devam et
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default HeroSection