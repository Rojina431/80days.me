import { Fragment } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import Dashed from "../../component/dashed"

const SavedContainer = ({saved}) => {
    return (
      <div className="booking-main">
        <div className="row">
           <div className="col-8 booking-desc">
           <div className="country-dest">{saved.fromCountry} <BsArrowRight/> {saved.toCountry}</div>
               <div className="dates saved">{saved.fromDate} - {saved.toDate} / {saved.totalNights} nights</div>
               <div className="routes">{
                saved.routes.map((route, i) => {
                    return (
                        <Fragment key={i}>
                            {i !== 0 && <span> - </span>}
                          <span>{route}</span>
                          
                        </Fragment>
                    )
                })
               }</div>
           </div>
           <div className="col-1 btn-booked" style={{borderLeft:"1px dashed #ededed"}}>
              <div className='price'>{saved.price}</div>
              <button className='open-btn'>Open</button>
           </div>
        </div>
      </div>
    )
}

export default SavedContainer