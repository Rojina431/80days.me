import { Fragment } from 'react'
import { MdOutlineLocationOn } from 'react-icons/md'
import { BookedAdventureDetails, Colors } from '../../assets/constants/adventuredetails'
import PaymentFormHeader from './formheader'
import SummaryRight from './summaryright'

const TripSummary = () => {
    return (
        <Fragment>
          <PaymentFormHeader class="head-outer-first" sno="1" 
          formHead="Trip Summary" leftText="5 Cities"/>
          <div className='body-container'>
          {BookedAdventureDetails.map((adv, i) => {
            
            if(i > 0){
                var date = BookedAdventureDetails[i-1].startDate.split(" ")
            }
             return (
             <div className='row' key={i}>
             <div className='col-1' style={{position:"relative"}}>
             <div className='path-curve' style={{color:Colors[i]}}>
             </div>
             <div className='circle-pay' style={{backgroundColor:Colors[i], position:"absolute", zIndex:"2"}}>
             <span>{i === 0 ? 
             <MdOutlineLocationOn size={25}/> : 
             <Fragment>
             <span>{date[1]}</span>
             <div className='fonts-10 fontw-400'>{date[0]}</div>
             </Fragment>
             }</span>
             </div> 
             </div>
             <div className='col-4'>
               <div className='from-city'>{adv.fromCity}</div>
               <div className='stay'>
                {i === 0 ? "Start" : BookedAdventureDetails[i-1].stay} / {i === 0 ? adv.startDate : `${BookedAdventureDetails[i-1].startDate} - ${BookedAdventureDetails[i-1].endDate}`}
            </div>
             </div>
             <div className='col-7' style={{paddingTop:"30px"}}>
               <SummaryRight summary={adv}/>
             </div>
          </div>
             )
          })}
          <div className='row'>
             <div className='col-1'>
             <div className='circle-pay' style={{backgroundColor:Colors[0], zIndex:2}}>
             <span>
             <MdOutlineLocationOn size={25}/>
           </span>
             </div> 
             </div>
             <div className='col-4'>
               <div className='from-city'>{BookedAdventureDetails[0].fromCity}</div>
               <div className='stay'>
                 {`Fininsh / ${BookedAdventureDetails[BookedAdventureDetails.length -1].endDate}`}
            </div>
             </div>
          </div>
          </div>
        </Fragment>
    )
}

export default TripSummary