/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect} from 'react'
import beach from '../../videos/beach.mp4'
import { FiSend } from "react-icons/fi";
import './Footer.scss';
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import Aos from 'aos';
import 'aos/dist/aos.css'
const Footer = () => {
  useEffect(() =>{
    Aos.init({duration: 1500})
  },[])
  return (
    <section className='footer'>
      <div className='videoDiv'>
        <video src={beach} loop autoPlay muted type='video/mp4'></video>
      </div>
      <div className='secContent container'>
        <div className='contactDiv flex'>
          <div className='text' data-aos="fade-up">
            <small>CONTACT</small>
            <h2>DU LỊCH CÙNG CHÚNG TÔI </h2>
          </div>
          <div className='inputDiv flex'>
            <input data-aos="fade-up" type='text' placeholder='Nhập địa chỉ Email'/>
            <button data-aos="fade-up" className='btn flex' type='submit'>
              SEND<FiSend className='icon' />
            </button>
          </div>
        </div>
        <div className='footerCard flex'>
          <div className='footerIntro flex'> 
            <div className='logoDiv'>
              <a href='#' className='logo flex'>
              <img alt='Công ty dịch vụ và lữ hành Rồng Đất Phan' className='icon' src='https://res.cloudinary.com/dk41ftplg/image/upload/v1704604655/RDP_TOURISM/ntmnpbmaymnucb5e4zkn.png'></img>
              RONGDATPHAN TRAVEL
              </a>
            </div>
            <div className='footerParagraph' data-aos="fade-up">
              Với hơn 10 năm hoạt động và phát triển không ngừng, Rồng Đất Phan tự hào là một trong những đơn vị lữ hành hàng đầu, xây dựng uy tín và chất lượng không ngừng được thị trường và khách hàng công nhận. Chúng tôi đã và đang trở thành điểm đến lựa chọn của đông đảo du khách.
              Rồng Đất Phan không chỉ là một cái tên quen thuộc mà còn là biểu tượng của sự tin tưởng và tận tâm trong việc cung cấp các dịch vụ lữ hành xuất sắc. Khách hàng của chúng tôi không chỉ đơn thuần là những người du lịch mà còn là những người hài lòng với trải nghiệm đặc biệt mà chúng tôi mang đến.
              Chúng tôi hướng đến việc đẩy mạnh phát triển du lịch trong nước, mang đến những trải nghiệm tuyệt vời và hấp dẫn cho khách hàng.
            </div>
            <div className='footerSocials flex' data-aos="fade-up">
              <FaFacebookF className='icon'/>
              <RiInstagramFill className='icon'/>
              <FaYoutube className='icon'/>
            </div>
          </div>
          <div className='footerLinks grid'>
            <div className='linkGroup' data-aos="fade-up" data-aos-duration="3000">
              <span className='groupTitle'>
                DỊCH VỤ
              </span>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Tour trong nước
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Tour nước ngoài
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Đặt phòng khách sạn
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Dịch vụ du lịch
              </li>
            </div>
            <div className='linkGroup' data-aos="fade-up" data-aos-duration="4000">
              <span className='groupTitle'>
                CHĂM SÓC KHÁCH HÀNG
              </span>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Bảo hiểm du lịch
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Ý kiến khách hàng
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Phiếu góp ý kiến
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Thanh toán
              </li>
            </div>
          </div>  
          <div className='footerDiv flex'>
            
            <small>COPYRIGHT © 2024 RỒNG ĐẤT PHAN TRAVEL. All right revered. Designed by RDP</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer