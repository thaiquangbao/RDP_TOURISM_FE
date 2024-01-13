import React, {useEffect} from 'react'
import './Main.scss'
import { IoLocationOutline } from "react-icons/io5";
import { PiClipboardText } from "react-icons/pi";
import Aos from 'aos';
import 'aos/dist/aos.css'
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
      },
      {
        id: 3,
        imgSrc: 'https://pos.nvncdn.com/86c7ad-50310/art/artCT/20230420_0moA6KAt.png',
        desTitle: "Cầu vàng",
        location: "Đà Nẵng",
        grade: "Culture Relax",
        fees: "3.000.000 VND",
        description: "Từ năm 2010, chúng tôi mở rộng và khắp Việt Nam với hơn 10 địa điểm như SunWorld Bà Bà Hills, VinWonders Nha Trang, SunWorld Fansipan Legend, VinWonders Phú Quốc, SunWorld Hạ Long Park, SunWorld Hòn Thơm Phú Quốc, VinWonders Nam Hội An, SunWorld Núi Bà Đen Tây Ninh, Xẻo Quýt Relic Đồng Tháp, Sài Gòn Skydec, Tắm Bùn Trăm Trứng Nha Trang, MerPerle Hòn Tằm, Cầu Kính Rồng Mây..."
      }
  ]
  useEffect(() =>{
    Aos.init({duration: 1500})
  },[])
  return (
    <section className='main container section'>
      <div className='secTitle' data-aos="fade-right">
        <h3 className='title'> 
          Most visited destinations
        </h3>
      </div>
      <div className='secContent grid'>
          {data.map(({id,imgSrc,desTitle,location,grade,fees,description}) =>{
            return (
              <div key={id} className='singleDestination' data-aos="fade-up">
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
      <div className='secTitle' style={{marginTop: 100}} data-aos="fade-right">
        <h3 className='title'> 
          Những địa điểm nên đến tháng 1
        </h3>
      </div>
      <div className='secContent grid'>
          {data.map(({id,imgSrc,desTitle,location,grade,fees,description}) =>{
            return (
              <div key={id} className='singleDestination' data-aos="fade-up">
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
      <div className='memory'>
        <div className='secTitle' style={{marginTop: 100}} data-aos="fade-right">
          <h3 className='title'> 
            Kỷ niệm của chúng tôi cùng với khách hàng
          </h3>
        </div>
      </div>
    </section>
    
  )
}

export default Main