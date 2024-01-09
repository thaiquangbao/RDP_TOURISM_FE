/* eslint-disable jsx-a11y/heading-has-content */
import React, { useEffect} from 'react'
import video from '../../videos/landscape.mp4'
import { GrLocation } from "react-icons/gr";
import './Header.scss'
import { HiFilter } from "react-icons/hi";
import Aos from 'aos';
import 'aos/dist/aos.css'
const Header = () => {
  
  useEffect(() =>{
      Aos.init({duration: 1500})
  },[])
  return (
    <section className='heading'>
      <div className="overplay"></div>
        <video className='videoHeader' src={video}  muted autoPlay loop type='video/mp4'></video>
        <div className='headerContent container'>
            <div className='textDiv'>
              <span className='smallText' data-aos="fade-up">
                    CÁC GÓI DỊCH VỤ CỦA CHÚNG TÔI
              </span>
              <h1 className='headerTitle' data-aos="fade-up">
                  LỰA CHỌN KỲ NGHĨ CỦA BẠN
              </h1>
            </div>
            <div className='cardDiv grid' data-aos="fade-up">
              <div className='destinationInput'>
                <label htmlFor='city' >Search your destination:</label>
              
                <div className='input flex'>
                  <input type='text' placeholder='Enter name here...'/>
                  <GrLocation className='icon'/>
                </div>
              </div>
              <div className='dateInput'>
                <label htmlFor='date' >Search your date:</label>
              
              <div className='input flex'>
                <input type='date' />
                <GrLocation className='icon'/>
              </div>
              </div>
              <div className='priceInput'>
                <div className='label_total flex'>
                  <label htmlFor="price">Max price : </label>
                  <label className='total'> 10.000.000 VND</label>

                 </div> 
                
                <div className='input flex'>
                  <input type='range' max="10000" min="500"/>
                </div>
                
              </div> 
              <div className='searchOptions flex'>
                <HiFilter className='icon'/>
                <span>More filter</span>
              </div>
            </div>
            
        </div>

      
    </section>
  )
}

export default Header