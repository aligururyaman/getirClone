import React from 'react'

const Footer = () => {
  return (
    <div className='bg-white h-80'>
      <div className='pt-10 mx-auto container'>
        <div className='grid grid-cols-5'>
          <div className='font-sans'>
            <h6 className='text-primary-brand-color text-3xl pb-4'>Getir'i indir!</h6>
            <nav className=''>
              <a href="#">
                <img className="transition-all transform hover:scale-105 pb-4" src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" alt="appel" />
              </a>
              <a href="#">
                <img className="transition-all transform hover:scale-105 pb-4" src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" alt="plays" />
              </a>
              <a href="#">
                <img className="transition-all transform hover:scale-105" src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" alt="appg" />
              </a>
            </nav>
          </div>
          <div className='font-sans text-gray-600 pl-10'>
            <h6 className='text-primary-brand-color text-xl mb-3 '>Getir'i keşfet</h6>
              <ol>
                <li className='mb-3'><a href="#">Hakkımızda</a></li>
                <li className='mb-3'><a href="#">Karıyer</a></li>
                <li className='mb-3'><a href="#">Teknoloji Kariyerleri</a></li>
                <li className='mb-3'><a href="#">İletişim</a></li>
                <li className='mb-3'><a href="#">Sosyal Sorumluluk Projeleri</a></li>
                <li ><a href="#">Basın Bültenleri</a></li>
              </ol>
          </div>  
          <div className='font-sans text-gray-600 pl-9'>
            <h6 className='text-primary-brand-color text-xl mb-3'>Yardıma mı ihtiyacın var?</h6>
            <ol>
                <li className='mb-3'><a href="#">Sıkça Sorulan Sorular</a></li>
                <li className='mb-3'><a href="#">Kişisel Verilerin Korunması</a></li>
                <li className='mb-3'><a href="#">Gizlilik Politikası</a></li>
                <li className='mb-3'><a href="#">Kullanım Koşulları</a></li>
                <li className='mb-3'><a href="#">Çerez Politikası</a></li>
                <li 
                ><a href="#">İşlem Rehberi</a></li>
              </ol>
          </div>
          <div className='font-sans text-gray-600 pl-10'>
            <h6 className='text-primary-brand-color text-xl mb-3'>İş Ortağımız Ol</h6>
            <ol>
                <li className='mb-3'><a href="#">Bayimiz olun</a></li>
                <li className='mb-3'><a href="#">Deponu Kirala</a></li>
                <li className='mb-3'><a href="#">GetirYemek Restoranı Ol</a></li>
                <li className='mb-3'><a href="#">GetirÇarşı İşletmesi Ol</a></li>
                <li className='mb-3'><a href="#">Zincir Restoranlar</a></li>
                <li 
                ><a href="#">Basın Bültenleri</a></li>
              </ol>
          </div>
          <div className='pl-28 mt-10'>
          <div className='p-4 h-28 w-24 border rounded-lg'>
            <img className='h-20 w-16' src="https://cdn.getir.com/getirweb-images/common/etbis.png" alt="etic" />
          </div>  
          </div> 
        </div>
      </div>
      <article className='bg-white'>
        <div  className='container mx-auto  border-t-2 h-20'>
          <h6 className='text-gray-600 text-sm font-sans p-6'>
          © 2024 Getir | Ali Gurur Yaman
          </h6>
        </div>
      </article>
    </div>
  )
}

export default Footer