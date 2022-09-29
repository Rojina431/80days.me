import { useState } from 'react'
import { TbWorld } from 'react-icons/tb'
import { IoIosArrowDown } from 'react-icons/io'
import '../../assets/styles/common.css'
import '../../assets/styles/navbar.css'
import { Link } from 'react-router-dom'
import LeftLogComp from '../leftlogo'

const HeaderHome = (props) => {

  const [isLogged, setIsLogged] = useState(false)

  return (
    <div className="navbar">
      <div className="left-logo no-underline">
       <LeftLogComp/>

      </div>
      <div className="right-links">
        <div className='global-logo lineh-78'>
          <TbWorld size={20} className='fontw-300' />{'  '}<IoIosArrowDown size={15} className='fontw-600' />
        </div>
        <div className='no-underline each-links lineh-78'>
          <a href="#" className=' fonts-14 fontw-500 lineh-34 black-text each-links-text'>Reviews</a>
        </div>
        <div className='fonts-14 fontw-500 lineh-78 black-text each-links each-links-text'
          data-bs-toggle="modal" data-bs-target="#bookingsModal"
          onClick={() => props.handleBookingsModal(true)}>
          <span className='each-links-text'>My Bookings</span>
        </div>
        
        <div style={{cursor:"pointer"}} className='fonts-14 fontw-500 lineh-78 black-text each-links each-links-text'>
        {!isLogged ? <Link to="/login/" style={{textDecoration:"none"}}><span className='each-links-text black-text'>Log In</span></Link>
         : <span className='each-links-text'>Log Out</span>}  
        </div>
        {isLogged && <div className='circle each-links lineh-78 fontw-500' style={{backgroundColor:"rgb(128, 76, 180)"}}>
          <span>N</span>
        </div>}
      </div>
    </div>
  )
}

export default HeaderHome