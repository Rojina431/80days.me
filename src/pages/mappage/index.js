import { Fragment, useState, useEffect } from 'react'
import HeaderMap from "../../component/header4"
import LeftWhole from './leftpart'
import RightBottomContainer from './rightcont'
import '../../assets/styles/map.css'
import MapComponent from './map'
import BottomComponent from './bottomcomp'
import useWindowsDimensions from '../../component/windowdimension'

const MapPage = () => {

    const [isMap, setIsMap] = useState(true)
    const {width, height} = useWindowsDimensions()

    useEffect(() => {
       if(width > 728){
         setIsMap(true)
       }
    }, [width])

    const handleChange = (value) => {

        setIsMap(value)
    }

    console.log(isMap)

    return (
       <Fragment>
         <div className="map-whole" style={{
            height:`${width>728 ? "100vh" : "fit-content" }`,
            overflow:`${width>728 ? "hidden" : "auto" }`
        }}>
         <HeaderMap/>
            {isMap && <MapComponent/>}
            <div>
            {((!isMap) || (width>728)) &&
            <LeftWhole/>}
            {width > 728 ? 
            <RightBottomContainer/> : 
            <BottomComponent toggleMap={isMap} handleChange={handleChange}/>}       
            </div>
         </div>
       </Fragment>
    )
}

export default MapPage