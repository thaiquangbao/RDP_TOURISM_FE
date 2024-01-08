/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import beach from '../../videos/beach.mp4'
import { FiSend } from "react-icons/fi";
import './Footer.scss';
import { FaFacebookF } from "react-icons/fa";
import { MdTravelExplore } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <section className='footer'>
      <div className='videoDiv'>
        <video src={beach} loop autoPlay muted type='video/mp4'></video>
      </div>
      <div className='secContent container'>
        <div className='contactDiv flex'>
          <div className='text'>
            <small>CONTACT</small>
            <h2>DU LỊCH CÙNG CHÚNG TÔI </h2>
          </div>
          <div className='inputDiv flex'>
            <input type='text' placeholder='Nhập địa chỉ Email'/>
            <button className='btn flex' type='submit'>
              SEND<FiSend className='icon' />
            </button>
          </div>
        </div>
        <div className='footerCard flex'>
          <div className='footerIntro flex'> 
            <div className='logoDiv'>
              <a href='#' className='logo flex'>
              <MdTravelExplore className='icon' />
              Travel
              </a>
            </div>
            <div className='footerParagraph'>
              Với hơn 10 năm hoạt động và phát triển không ngừng, Rồng Đất Phan tự hào là một trong những đơn vị lữ hành hàng đầu, xây dựng uy tín và chất lượng không ngừng được thị trường và khách hàng công nhận. Chúng tôi đã và đang trở thành điểm đến lựa chọn của đông đảo du khách.
              Rồng Đất Phan không chỉ là một cái tên quen thuộc mà còn là biểu tượng của sự tin tưởng và tận tâm trong việc cung cấp các dịch vụ lữ hành xuất sắc. Khách hàng của chúng tôi không chỉ đơn thuần là những người du lịch mà còn là những người hài lòng với trải nghiệm đặc biệt mà chúng tôi mang đến.
              Chúng tôi hướng đến việc đẩy mạnh phát triển du lịch trong nước, mang đến những trải nghiệm tuyệt vời và hấp dẫn cho khách hàng.
            </div>
            <div className='footerSocials'>
              <FaFacebookF className='icon'/>
              <RiInstagramFill className='icon'/>
              <FaYoutube className='icon'/>
            </div>
          </div>
          <div className='footerLinks grid'>
            <div className='linkGroup'>
              <span className='groupTitle'>
                Địa chỉ của chúng tôi
              </span>
            </div>
          </div>  
        </div>
      </div>
    </section>
  )
}

export default Footer