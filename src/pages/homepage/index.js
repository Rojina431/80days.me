import {Fragment, useState} from 'react'
import { HiUser } from 'react-icons/hi'
import HeaderHome from '../../component/header1'
import '../../assets/styles/home.css'
import HomePageForm from './form'
import BookingPopup from './bookingpopup'
import { Navigate } from 'react-router-dom'
import { addDays} from 'date-fns'

// Home page with selecting cities

const HomePage = () => {

   const [userVal, setUserVal] = useState("1")
   const [open, setOpen] = useState(false)
   const [height, setHeight] = useState("300px")
   const [bookingsOpen, setBookingsOpen] = useState(false)
   const [redirect, setRedirect] = useState(false)
   const [from, setFrom] = useState({value:"Abu Dhabi (AUH)", label:"Abu Dhabi (AUH)"})
   const [to, setTo] = useState({value:"Abu Dhabi (AUH)", label:"Abu Dhabi (AUH)"})
   const [around, setAround] = useState({value:"Eurotrip With Covid Vaccine Passport", label:"Eurotrip With Covid Vaccine Passport"})
   const [include, setInclude] = useState([])
   const [exclude, setExclude] = useState([])
   const [state, setState] = useState([
       {
         startDate: new Date(),
         endDate: (addDays(new Date(), 7)),
         key: 'selection'
       }
     ])


     //toggle booking in navbar
   const handleBookingsModal = (value) => {
      setBookingsOpen(value)
   }

   //toggle to map page on clicking button design adventure

   const redirectToMap = () => {
       setRedirect(true)
   }

//change no of passengers

   const handleChange = (value) => {
      setUserVal(value)
      handleOpen(false)
    };

   //toggle selection of no of psngr
    const handleOpen = (value) => {
      setOpen(value)
    }

    //handle hegight of center cities selecting form

    const handleHeight = (value) => {
      setHeight(value)
    }

    //take value of from field 

    const handleFrom = (value) => {
      setFrom(value)
  }

  //take value of to field

  const handleTo = (value) => {
      setTo(value)
  }

  //take value of around field

  const handleAround = (value) => {
      setAround(value)
  }

  //take value of include field

  const handleInclude = (value) => {
     setInclude(value)
  }

  //take value of excliude field

  const handleExclude = (value) => {
      setExclude(value)
  }

  //take value of date field

  const handleDatePicker = (value) => {
   setState(value)
}

if(redirect) {

var stateToTransfer = {
   from:from,
   to:to,
   around:around,
   include:include,
   exclude:exclude,
   date:state
}
  return <Navigate to="/map"  state={stateToTransfer}/>
} else {
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
               <div style={{marginLeft:"4px", cursor:"pointer"}}>
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
                  <HomePageForm handleHeight={handleHeight}
                  from={from} handleFrom={handleFrom}
                  to={to} handleTo={handleTo}
                  include={include} handleInclude={handleInclude}
                  exclude={exclude} handleExclude={handleExclude}
                  around={around} handleAround={handleAround}
                  state={state} handleDate={handleDatePicker}
                  />
                  <div className='bottom-btn'>
                  <button onClick={() => redirectToMap()} className='btn-green blue-back'>Design Adventure</button>
                  </div>
                  </div>
              
            </div>
            <BookingPopup open={bookingsOpen}/>
         </div>
      </Fragment>
    )
}
}

export default HomePage