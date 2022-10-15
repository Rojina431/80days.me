import { Fragment } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import Dashed from "../../component/dashed"

//history tab of my bookings modal

const HistoryContainer = ({history}) => {
    return (
      <div className="booking-main">
        <div className="row">
           <div className="col-8 booking-desc">
               <div className="dates">{history.fromDate} - {history.toDate}</div>
               <div className="country-dest history">{history.fromCountry} <BsArrowRight/> {history.toCountry}</div>
               <div className='dates'>{history.totalNights} nights</div>
           </div>
           <div className='col-4 btn-booked' style={{borderLeft:"1px dashed #ededed"}}>
              
           <div className='left-history'>
              <button className='open-btn blue-back'>Open</button> 
              </div>   
           </div>
        </div>
      </div>
    )
}

export default HistoryContainer