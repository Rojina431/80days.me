import { Fragment } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import '../../assets/styles/map.css'

const LeftContainer = ({summary, color}) => {
    return (
        <Fragment>
            <div className='map-container'>
                <div className='map-left' style={{zIndex:4}}>
           <img src="https://app.eightydays.me/static/media/aeroplane-1.a2c8dcab.svg"
            alt="icon" className="airplane-icon"/>
           <div className="airname" style={{marginTop:"-3px"}}>{summary.airName}</div>
           <div className='fonts-12 fontw-700' style={{color:color, textTransform:"uppercase"}}>{summary.startDate}</div>
           <div className='fonts-10 mb-3'>{summary.startDay}</div>
        </div>
                <div className='map-right' style={{zIndex:4}}>
                    <div className="summary-left-cont">
                        <div style={{ display: "flex" }}>
                            <div className="summary-route">
                                {summary.fromCity} <BsArrowRight />  {summary.toCity}
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
                                <div className='non-stop'>Non-stop</div>
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
                </div>
            </div>
        </Fragment>
    )
}

export default LeftContainer