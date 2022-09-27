import { useState } from 'react'
import {TbWorld} from 'react-icons/tb'
import { IoIosArrowDown } from 'react-icons/io'
import '../../assets/styles/common.css'
import '../../assets/styles/navbar.css'

const HeaderLoginSignup = (props) => {


    return (
      <div className="navbar">
         <div className="left-logo no-underline">
          <a href="#" className="each-links">
            <div className='nav-brand'>
            <div>
          <img src="https://app.eightydays.me/static/media/logo-path.468963eb.svg" alt="logo"/> 
          </div>
          <span className='fonts-20 fontw-500 letterspace-47 black-text nav-text'>80days.me</span>
          
          </div>
          </a>
          
         </div>
         <div className="right-links">
           <div className='global-logo lineh-78'>
            <TbWorld size={20} className='fontw-300'/>{'  '}<IoIosArrowDown size={15} className='fontw-600'/>
           </div>
           <div className='no-underline fonts-14 fontw-500 lineh-78 black-text each-links each-links-text'>
             <a className='each-links-text black-text' href="#">How It Works</a>
           </div>
           <div className='no-underline fonts-14 fontw-500 lineh-78 black-text each-links each-links-text'>
             <a className='each-links-text black-text' href="#">About Us</a>
           </div>
         </div>
      </div>
    )
}

export default HeaderLoginSignup