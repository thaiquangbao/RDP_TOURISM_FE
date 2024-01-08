import React from 'react'
import './Main.scss'
import { IoLocationOutline } from "react-icons/io5";
import { PiClipboardText } from "react-icons/pi";
const Main = () => {
  const data =[
      {
        id: 1,
        imgSrc: 'https://pos.nvncdn.com/86c7ad-50310/art/artCT/20230420_0moA6KAt.png',
        desTitle: "Cầu vàng",
        location: "Đà Nẵng",
        grade: "Culture Relax",
        fees: "3.000.000 VND",
        description: "Từ năm 2010, chúng tôi mở rộng và khắp Việt Nam với hơn 10 địa điểm như SunWorld Bà Bà Hills, VinWonders Nha Trang, SunWorld Fansipan Legend, VinWonders Phú Quốc, SunWorld Hạ Long Park, SunWorld Hòn Thơm Phú Quốc, VinWonders Nam Hội An, SunWorld Núi Bà Đen Tây Ninh, Xẻo Quýt Relic Đồng Tháp, Sài Gòn Skydec, Tắm Bùn Trăm Trứng Nha Trang, MerPerle Hòn Tằm, Cầu Kính Rồng Mây..."
      },
      {
        id: 2,
        imgSrc: 'https://pos.nvncdn.com/86c7ad-50310/art/artCT/20230420_0moA6KAt.png',
        desTitle: "Cầu vàng",
        location: "Đà Nẵng",
        grade: "Culture Relax",
        fees: "3.000.000 VND",
        description: "Từ năm 2010, chúng tôi mở rộng và khắp Việt Nam với hơn 10 địa điểm như SunWorld Bà Bà Hills, VinWonders Nha Trang, SunWorld Fansipan Legend, VinWonders Phú Quốc, SunWorld Hạ Long Park, SunWorld Hòn Thơm Phú Quốc, VinWonders Nam Hội An, SunWorld Núi Bà Đen Tây Ninh, Xẻo Quýt Relic Đồng Tháp, Sài Gòn Skydec, Tắm Bùn Trăm Trứng Nha Trang, MerPerle Hòn Tằm, Cầu Kính Rồng Mây..."
      }
  ]
  return (
    <section className='main container section'>
      <div className='secTitle'>
        <h3 className='title'> 
          Most visited destinations
        </h3>
        </div>
      <div className='secContent grid'>
          {data.map(({id,imgSrc,desTitle,location,grade,fees,description}) =>{
            return (
              <div key={id} className='singleDestination'>
                  <div className='imageDiv'>
                    <img src={imgSrc} alt={description} />
                  </div>
                  <div className='cardInfo'> 
                    <h4 className='desTitle'>{desTitle}</h4>
                    <span className='continent flex'>
                      <IoLocationOutline className='icon' />
                      <span className='name'>
                        {location}
                      </span>
                    </span>
                    <div className='fees flex'>
                      <div className='grade'>
                          <span>{grade}<small>+1</small></span>
                      </div>
                      <div className='price'>
                        <h4>{fees}</h4>
                      </div>
                    </div>
                    <div className='desc'>
                        <p>{description}</p>
                    </div>
                    <button className='btn flex'>Detail<PiClipboardText className='icon'/></button>
                  </div>
                  
              </div>
              
            )
          })
          }
      
      </div>
    </section>
    
  )
}

export default Main