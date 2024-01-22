import React from 'react'

const Footer = () => {
  return (
    <div className='bg-white h-[306px] pb-5'>
      <div className='pt-[40px] pl-[24px] mx-auto'>
        <div className='grid grid-cols-4'>
          <div className=''>
            <h6 className='text-primary-brand-color text-3xl pb-[16px]'>Getiri indir!</h6>
            <nav className=''>
              <a href="#">
                <img className="transition-all transform hover:scale-105 pb-[16px]" src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" alt="appel" />
              </a>
              <a href="#">
                <img className="transition-all transform hover:scale-105 pb-[16px]" src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" alt="plays" />
              </a>
              <a href="#">
                <img className="transition-all transform hover:scale-105" src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" alt="appg" />
              </a>
            </nav>
          </div>
          <div>
            <h6 className='text-primary-brand-color text-2xl mb-[16px]'>Getir'i keşfet</h6>
              <ol className='text-lg text-gray-700'>
                <li className='pb-[16px]'>Hakkımızda</li>
                <li className='pb-[16px]'>Kariyer</li>
                <li className='pb-[16px]'>Teknoloji Kariyerleri</li>
                <li className='pb-[16px]'>İletişim</li>
                <li className='pb-[16px]'>Sosyal Sorumluluk Projeleri</li>
                <li className='pb-[16px]'>Basın Bültenleri</li>
              </ol>
          </div>  
          <div>
            <h6 className='text-primary-brand-color text-3xl pb-[16px]'>Yardıma mı ihtiyacın var?</h6>
          </div>
          <div>
            <h6 className='text-primary-brand-color text-3xl pb-[16px]'>İş Ortağımız Ol</h6>
          </div>   
        </div>
      </div>
    </div>
  )
}

export default Footer