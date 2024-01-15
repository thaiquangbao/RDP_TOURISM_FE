/* eslint-disable jsx-a11y/alt-text */
import React, {useEffect} from 'react';
import './Memory.scss';
import image1 from '../../images/thayco2.jpg'
import image2 from '../../images/thayco.jpg'
import image3 from '../../images/langbac.jpg'
import image4 from '../../images/tieuhoc.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css'
const Memory = () => {
  useEffect(() =>{
    Aos.init({duration: 1500})
  },[])  
  return (
    <section className=' container main section '>
      <div className='secTitle' data-aos="fade-right">
        <h3 className='title'> 
          Kỷ niệm cùng với khách hàng
        </h3>
      </div>
      <div className='memories'>
        <div className='one-memories'> 
          <div className="items" data-aos="fade-up" data-aos-duration="1000">
                <img src={image1} />
          </div>
          <div className="items" data-aos="fade-up" data-aos-duration="2000">
                <img src={image2} />
          </div>
        </div>
        <div className="two-memories"> 
          <div className="items" style={{paddingBottom: 5}} data-aos="fade-up" data-aos-duration="1000">
                <img src={image3}/>
          </div>
          <div className="items" style={{paddingTop: 5}} data-aos="fade-up" data-aos-duration="2000">
                <img src={image4}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Memory