import { BsArrowRight } from "react-icons/bs"
import '../../assets/styles/summary.css'

//right container of summary box including date, route, airport, time and soon
const SummaryRight = ({summary}) => {
    return (
      <div className="row summary-container">
        <div className="col-9 summary-left-cont">
          <div style={{display:"flex"}}>
             <div className="summary-date">
              {summary.startDay}, {summary.startDate}
             </div>
             <div className="summary-route">
              {summary.fromCity} <BsArrowRight/>  {summary.toCity}
             </div>
          </div>
          <div className="lower row">
              <div className="col-4">
                 <div className="airport">
                   {summary.fromAirport}
                 </div>
                 <div className="aircode">
                  {summary.fromCode}
                 </div>
                 <div className="timed">
                  {summary.departureTime}
                 </div>
              </div>
              <div className="col-2 duration">
                <div className="total-time">
                  {summary.totalTime}
                </div>
              </div>
              <div className="col-4">
              <div className="airport">
                  {summary.toAirport}
                 </div>
                 <div className="aircode">
                  {summary.toCode}
                 </div>
                 <div className="timed">
                  {summary.landingTime}
                 </div>
              </div>
          </div>
        </div>
        <div className="sum-right col-3 ">
        <div className="summary-right-cont">
           <img src="https://app.eightydays.me/static/media/aeroplane-1.a2c8dcab.svg"
            alt="icon" className="airplane-icon"/>
           <div className="airname">{summary.airName}</div>
           <div className="air-code">{summary.airCode}</div>
        </div>
        </div>
      </div>
    )
}

export default SummaryRight