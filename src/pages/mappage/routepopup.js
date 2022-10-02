import { useState, useEffect, Fragment } from 'react'
import { IoIosAirplane, IoMdAirplane } from 'react-icons/io'
import { FcCheckmark } from 'react-icons/fc'
import { CountryNames } from '../../assets/constants/places'

const RoutepopupComponent = (props) => {

    const [selected, setSelected] = useState(props.route)

    useEffect(() => {
      setSelected(props.route)
    }, [])

    const ListRoutes = () => {
        return (
             <Fragment>
                {CountryNames.map((contry, i) => {
                            return (
                            <div className='list' key={i} onClick={() => setSelected(contry)}>
                                {props.route !== contry ? <div style={{width:"10%", marginRight:"10px"}}><FcCheckmark/></div> : <div style={{width:"10%"}}></div>}
                                <div className='second-list' style={{textAlign:"left"}}>
                                        <div style={{width:"70%"}}>
                                            
                                            <div className='fontw-500 fonts-13'>
                                                <span style={{marginRight:"5px"}}>07:50 - 10:35</span>
                                                <IoIosAirplane className='plane' size={20}/>
                                            </div> 
                                            <div className='fonts-10' style={{color:"#757575"}}>STN-MXP Ryanair</div>
                                        </div>
                                        <div style={{color:"#fe2851"}}>8841 ₽</div>
                                </div>
                            </div>
                            )
                           })}
             </Fragment>
        )
    }

    return (
        <div className="modal" id="routeModal" tabIndex="-1">
            <div className="route modal-dialog modal-dialog-centered">
                <div className="modal-content">

                    <div className="modal-body">
                        <div className="row">
                            <div className="col-2 ms-3 mt-3">
                                <IoMdAirplane  size={55}/>
                            </div>
                            <div className="col-8 mt-2">
                            <div className='fonts-24 fontw-700'>Traveller</div>
                                <div className='fonts-12 fontw-400 pt-n2'style={{color:"#757575"}}>You have chosen a trip by Ryanair,
October 31, 07:50 - 10:35</div>
                            </div>
                        </div>
                        <ul className="date nav nav-tabs nav-fill mt-2 mb-0">
                                <li className="date nav-item">
                                    <a className="nav-link" data-bs-toggle="tab" data-bs-target="#first" aria-current="page">SAT, OCT 29</a>
                                </li>
                                <li className="date nav-item">
                                    <a className="nav-link" data-bs-toggle="tab" data-bs-target="#second">SUN, OCT 30</a>
                                </li>
                                <li className="date nav-item">
                                    <a className="nav-link active fontw-500" data-bs-toggle="tab" data-bs-target="#third">MON, OCT 31</a>
                                </li>
                            </ul>
                        <div>
                          <div className='route-body'>
                          <div className='content tab-content'>
                         <div className='tab-pane' id="first">
                            <ListRoutes/>
                         </div>
                         <div className='tab-pane' id="second">
                             <ListRoutes/>
                         </div>
                         <div className='tab-pane' id="third">
                             <ListRoutes/>
                         </div>
                         </div>
                           
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoutepopupComponent