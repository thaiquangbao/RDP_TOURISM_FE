/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react';
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import './Navbar.scss'
const Navbar = () => {
    const [active, setActive] = useState('navBar');
    const showNav = () => {
        setActive('navBar activeNavbar');
    }
    const closeNav = () => {
        setActive('navBar')
    }
    return(
       <section className='navBarSection'>
            <header className='header flex'>
                <div className='logoDiv'>
                    <a href='#' className='logo flex' >
                        <div className='logoTitle'>
                            <h2>
                                <img alt='Công ty dịch vụ và lữ hành Rồng Đất Phan' className='icon' src='https://res.cloudinary.com/dk41ftplg/image/upload/v1704604655/RDP_TOURISM/ntmnpbmaymnucb5e4zkn.png'></img>
                                RONGDATPHAN

                                
                            </h2>
                            
                            <h5 className='childH6'>T   R   A  V  E  L</h5>
                        </div>
                        
                    </a>
                </div>
                <div className='toggleNavbar' onClick={showNav}>
                        <TbGridDots className='icon' />
                </div>
                <div className={active}>
                    <ul className="navLists flex">
                        <li className='navItem '>
                            <a href='#' className='navLink'>
                                HOME
                            </a>
                            
                        </li>
                        <li className='navItem '>
                            <a href='#' className='navLink'>
                                    TOUR
                            </a>
                        </li>
                        <li className='navItem '>
                            <a href='#' className='navLink'>
                                SERVICE
                            </a>
                        </li>
                        <li className='navItem '>
                            <a href='#' className='navLink'>
                                CONTACT
                            </a>
                        </li>
                        <button className='btn'>
                            <a href='#'>
                                BOOK NOW
                            </a>
                        </button>
                    </ul>   
                    <div className='closeNavbar' onClick={closeNav}>
                        <AiFillCloseCircle className='icon'/>
                    </div>
                    
                </div>
            </header>
       </section>
    )
}
export default Navbar