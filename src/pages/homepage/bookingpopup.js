import { Fragment } from 'react'
import { AdventureDetails } from '../../assets/constants/adventuredetails'
import '../../assets/styles/bookings.css'
import HistoryContainer from './historycontainer'
import SavedContainer from './savedcontainer'


//modal to view when my bookings is clicked
const BookingPopup = () => {

    const BookedDate = ({date}) => {
        return (
            <div className='booked-date'>{date}</div>
        )
    }

    return (
        <div className="bookings modal" id="bookingsModal" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">

                    <div className="modal-body">
                        <div className="row">
                            <div className="col-2 traveller-icon ms-3 mt-3">
                                <div>T</div>
                            </div>
                            <div className="col-8 mt-2">
                                <div className='fonts-24 fontw-700'>Traveller</div>
                                <div className='fonts-12 fontw-400 pt-n2'>Traveller</div>
                            </div>
                            <ul className="nav nav-tabs nav-fill mt-4 mb-0">
                                <li className="nav-item">
                                    <a className="nav-link active fontw-500" data-bs-toggle="tab" data-bs-target="#history" aria-current="page">HISTORY</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="tab" data-bs-target="#saved">SAVED</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="tab" data-bs-target="#bookings">BOOKINGS</a>
                                </li>
                            </ul>
                        </div>
                        <div className='content tab-content'>
                         <div className='tab-pane' id="history">
                          {AdventureDetails.map((adv, index) => {
                            return (
                                <Fragment key={index}>
                                   {
                                index === 0 ? 
                                   <BookedDate date={adv.bookedDate}/> :
                                AdventureDetails[index].bookedDate !== AdventureDetails[index -1].bookedDate ?
                                <BookedDate date={adv.bookedDate}/> : <div></div>
                                }
                                 <HistoryContainer history={adv}/>
                                </Fragment>
                            )
                          })}
                         </div>
                         <div id="saved" className='tab-pane'>
                         {AdventureDetails.map((adv, index) => {
                            return (
                                <Fragment key={index}>
                                   {
                                index === 0 ? 
                                   <BookedDate date={adv.bookedDate}/> :
                                AdventureDetails[index].bookedDate !== AdventureDetails[index -1].bookedDate ?
                                <BookedDate date={adv.bookedDate}/> : <div></div>
                                }
                                 <SavedContainer saved={adv}/>
                                </Fragment>
                            )
                          })}
                         </div>
                         <div id="bookings" className='tab-pane'>
                             book
                         </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookingPopup