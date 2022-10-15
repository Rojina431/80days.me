import { useState, useEffect } from 'react'
import { IoIosAirplane } from 'react-icons/io'
import { FcCheckmark } from 'react-icons/fc'
import { CountryNames } from '../../assets/constants/places'
import flag from '../../assets/images/flag.svg'


//popup to be appeared when each route is clicked
const CitypopupComponent = (props) => {

    const [selected, setSelected] = useState(props.route)

    useEffect(() => {
      setSelected(props.route)
    }, [])

    return (
        <div className="bookings modal" id="cityModal" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">

                    <div className="modal-body">
                        <div className="row">
                            <div className="col-2 traveller-icon ms-3 mt-3">
                                <img src={flag} alt="flag" height="40px" width="40px"/>
                            </div>
                            <div className="col-8 mt-2" style={{marginLeft:"10px"}}>
                                <div className='fonts-24 fontw-700'>{props.route}</div>
                                <div className='fonts-12 fontw-400 pt-n2'>Lorem Ipsum is simply dummy text of the printing.</div>
                            </div>
                        </div>
                        <div className='route-content'>
                          <div className='route-head'>Replace the city</div>
                          <div className='route-body'>
                           {CountryNames.map((contry, i) => {
                            return (
                            <div className='list' key={i} onClick={() => setSelected(contry)}>
                                {selected === contry ? <div style={{width:"10%"}}><FcCheckmark/></div> : <div style={{width:"10%"}}></div>}
                                <div className='second-list'>
                                        <div className='list-name'>{selected !== contry && <IoIosAirplane className='plane'/>} <div className='mx-1'>{contry.value}</div> {selected !== contry && <IoIosAirplane className='plane'/>}</div>
                                        <div style={{color:`${selected === props.route ? "#4cd964" : 
                                        selected === contry ? "#f6a623" : "#fe2851" }`}}>8841 ₽</div>
                                </div>
                            </div>
                            )
                           })}
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CitypopupComponent