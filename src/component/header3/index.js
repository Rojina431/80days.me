import { useEffect } from 'react'
import { TbWorld } from 'react-icons/tb'
import { IoIosArrowDown } from 'react-icons/io'
import '../../assets/styles/common.css'
import '../../assets/styles/navbar.css'

const HeaderPayment = (props) => {

  useEffect(()=> {
    var elem = document.querySelector('.navbar-fixed')
    window.onscroll = () => {
      if(window.scrollY > 50) {
        elem.classList.add('navbar-fixed-active')
      } else {
        elem.classList.remove('navbar-fixed-active')
      }
    }
  },[window.scrollY])

  return (
    <div className="navbar navbar-fixed">
      <div className="left-logo left-logo-fixed no-underline">
        <a href="#" className=" each-links">
          <div className='nav-brand'>
            <div>
              <img src="https://app.eightydays.me/static/media/logo-path.468963eb.svg" alt="logo" />
            </div>
            <span className='fonts-20 fontw-500 letterspace-47 black-text nav-text'>80days.me</span>

          </div>
        </a>

      </div>
      <div className="right-links right-links-fixed">
        <div className='global-logo lineh-78'>
          <TbWorld size={20} className='fontw-300' />{'  '}<IoIosArrowDown size={15} className='fontw-600' />
        </div>
        <div className='no-underline each-links lineh-78'>
          <a href="#" className=' fonts-14 fontw-500 lineh-34 black-text each-links-text'>New Search</a>
        </div>
        <div className='fonts-14 fontw-500 lineh-78 black-text each-links each-links-text'>
          <span className='each-links-text'>Log In</span>
        </div>
      </div>
    </div>
  )
}

export default HeaderPayment