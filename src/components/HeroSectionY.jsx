import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactFlagsSelect from "react-flags-select";

const HeroSectionY = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
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
    <div className="relative h-[600px] before:bg-gradient-to-r ">
        <Slider {...settings}>
        <div>
            <video className="w-full h-[600px] object-cover" src="https://cdn.getiryemek.com/banner/3_pide.mp4" />
        </div>
       
        </Slider>
        <div className="container flex justify-end items-center absolute top-0 left-1/2 
        -translate-x-1/2 h-full z-20">
          
          <div className="w-auto h-auto rounded-lg bg-gray-50 p-8">
            <h1 className="text-primary-brand-color font-semibold text-center mb-4 text-lg">
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
                  <label className="flex-1 ml-3 h-13 group relative block">
                    <input required className="h-14 px-4 w-60 rounded-md border-2 border-gray-300 
                    hover:border-primary-brand-color group-hover:border-primary-brand-color 
                    outline-none peer text-m pt-2" />
                    <span className="absolute top-0 left-0 h-full px-4 flex items-center text-lg 
                    text-gray-500 peer-focus:h-6 transition-all peer-focus:text-primary-brand-color 
                    peer-focus:text-xs 
                    peer-valid:h-6 peer-valid:text-primary-brand-color peer-valid:text-xs">Telefon Numarası</span>
                  </label>
              </form>
              <button className="bg-brand-yellow h-12 flex items-center justify-center rounded-md 
              text-xl font-semibold text-primary-brand-color hover:bg-primary-brand-color 
              hover:text-brand-yellow ">
                Telefon numarası ile devam et
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default HeroSectionY