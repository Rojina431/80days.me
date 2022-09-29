import {Fragment, useState} from 'react'
import { HiUser } from 'react-icons/hi'
import HeaderHome from '../../component/header1'
import '../../assets/styles/home.css'
import HomePageForm from './form'
import BookingPopup from './bookingpopup'
import { Link } from 'react-router-dom'

const HomePage = () => {

   const [userVal, setUserVal] = useState("1")
   const [open, setOpen] = useState(false)
   const [height, setHeight] = useState("300px")
   const [bookingsOpen, setBookingsOpen] = useState(false)

   const handleBookingsModal = (value) => {
      setBookingsOpen(value)
   }

   const handleChange = (value) => {
      console.log(`selected ${value}`);
      setUserVal(value)
      handleOpen(false)
    };

    const handleOpen = (value) => {
      setOpen(value)
    }

    const handleHeight = (value) => {
      setHeight(value)
    }

    return (
      <Fragment>
         <div className='home'>
            <HeaderHome handleBookingsModal={handleBookingsModal}/>
            <div className='main-center'>
               <div>
               <div className='home-title  fonts-16 fontw-600 lineh-25'>
                Booking Eurotrips made easy
                </div>
               <div className='home-title fonts-16 fontw-600 lineh-25'>
                  Multi-city travel around Europe
               </div>
               </div>
               <div className='user-select'>
                 <HiUser size={18}/>
               <div style={{marginLeft:"4px"}}>
                  <div onClick={() => handleOpen(!open)} className="fontw-500 fonts-18">{userVal}</div>
               </div>
               </div>
               <br/>
                  <div style={{position:"relative", height:height}}>
                  {open && <div className='drop-select fonts-16 fontw-300'>
                     <div onClick={() => handleChange(1)}>1 passenger</div>
                     <div onClick={() => handleChange(2)}>2 passengers</div>
                     <div onClick={() => handleChange(3)}>3 passenger</div>
                     <div onClick={() => handleChange(4)}>4 passengers</div>
                  </div>}
                  <HomePageForm handleHeight={handleHeight}/>
                  <div className='bottom-btn'>
                  <Link to="/map/">
                  <button className='btn-green'>Design Adventure</button>
                  </Link>
                  </div>
                  </div>
              
            </div>
            <BookingPopup open={bookingsOpen}/>
         </div>
      </Fragment>
    )
}

export default HomePage