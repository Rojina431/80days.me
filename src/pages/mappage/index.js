import { Fragment } from 'react'
import HeaderMap from "../../component/header4"
import LeftWhole from './leftpart'
import RightBottomContainer from './rightcont'
import '../../assets/styles/map.css'
import MapComponent from './map'

const MapPage = () => {
    return (
       <Fragment>
         <div className="map-whole">
            <MapComponent/>
            <HeaderMap/>
            <div>
            <LeftWhole/>
            <RightBottomContainer/>
            </div>
         </div>
       </Fragment>
    )
}

export default MapPage