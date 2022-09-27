import { Fragment } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import Dashed from "../../component/dashed"

const HistoryContainer = ({history}) => {
    return (
      <div className="booking-main">
        <div className="row">
           <div className="col-8 booking-desc">
               <div className="dates">{history.fromDate} - {history.toDate}</div>
               <div className="country-dest history">{history.fromCountry} <BsArrowRight/> {history.toCountry}</div>
               <div className='dates'>{history.totalNights} nights</div>
           </div>
           {/* <div className="col-1">
             <Dashed number={10} color="#ededed"/>
           </div> */}
           <div className='col-1 btn-booked' style={{borderLeft:"1px dashed #ededed"}}>
           <div>          
              <button className='open-btn'>Open</button> 
           </div>
           </div>
        </div>
      </div>
    )
}

export default HistoryContainer