import React from 'react'

const MobileApp = () => {
  return (
      <div className="bg-primary-brand-color flex mt-8 justify-between items-center bg-hero-pattern rounded-lg text-white">
        <section className='flex flex-col gap-y-3 p-10'>
          <h3 className='text-4xl font-bold tracking-tight'>Getir'i indir!</h3>
          <p className='font-semibold text-xl w-[360px]'>İstediğiniz ürünleri dakikalar içinde kapınıza getirelim.</p>
          <nav className='mt-10 flex gap-x-2'>
            <a href="#">
              <img className="transition-all transform hover:scale-105" src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" alt="appel" />
            </a>
            <a href="#">
              <img className="transition-all transform hover:scale-105" src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" alt="plays" />
            </a>
            <a href="#">
              <img className="transition-all transform hover:scale-105" src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" alt="appg" />
            </a>
          </nav>
        </section>
        <picture className="pt-6">
                <img src="https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png" />
            </picture>
      </div>

  )
}

export default MobileApp