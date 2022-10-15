import { useState, useEffect } from 'react'
import Map, { Layer, Marker, Source } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css'
import { Colors } from '../../assets/constants/adventuredetails';
import { MdOutlineLocationOn } from 'react-icons/md';


//utilizing mapbox
const MapComponent = (props) => {

  const [coord, setcoord] = useState([])
  var arr =[]
   useEffect(() => {
    setcoord([])
    setcoord(arr=> [...arr, props.from.center])
    
   for(let i = 0; i < props.routes.length; i++){
    setcoord(arr=> [...arr, props.routes[i].center])
   }
   setcoord(arr=> [...arr, props.to.center])
   
   },[props.routes])


  const geojson = {
    type: 'FeatureCollection',
    features: [
      { type: 'Feature', geometry: { type: 'LineString', coordinates: coord } }
    ]
  };

  return (
    <div style={{height:"100vh"}}>
    <Map
    initialViewState={{
      longitude: props.from.center[0],
      latitude: props.from.center[1],
      zoom:3
}}
      mapboxAccessToken="pk.eyJ1Ijoic2FlZWRjaGFjaGFyOTg3NjU0IiwiYSI6ImNsOG51ZmR4bzA1NTkzb3J1ampqcHd1cG8ifQ.K8kc1_o1iJ6J4HU88F8C2Q"
      mapStyle="mapbox://styles/mapbox/light-v10"
      attributionControl={true}
    >
        <Marker
        longitude={props.from.center[0]}
        latitude = {props.from.center[1]}
        >
          <div className='custom-btn' style={{color:Colors[0]}}><MdOutlineLocationOn size={20}/>
          <div>
          <div>{props.from.place}</div>
          <div className='subtitle'>Start</div>
          </div>
          </div>
        </Marker>
       {props.routes.map((route, i) => {
        return (
        <Marker
        key={i}
        longitude={route.center[0]}
        latitude = {route.center[1]}
        >
          <div 
         onClick={() => {
          props.handleRouteChange(route.place)
        }} 
          className='custom-btn' style={{color:Colors[i + 1], cursor:"pointer"}}  
          data-bs-toggle="modal" data-bs-target="#cityModal"><MdOutlineLocationOn size={20}/> <div>
          <div>{route.place}</div>
          <div className='subtitle'></div>
          </div>
          </div>
        </Marker>)
       })}
        <Marker
        longitude={props.to.center[0]}
        latitude = {props.to.center[1]}
        >
          <div className='custom-btn' style={{color:Colors[0], transform:"rotate(45deg)"}}><MdOutlineLocationOn size={20}/> <div>
          <div>{props.to.place}</div>
          <div className='subtitle'>Finish</div>
          </div>
          </div>
        </Marker>
        <Source id="my-data" type="geojson" data={geojson}>
        {coord.map((c, i) => {
          return <Layer type='line' id={`id${i}`} key={i} paint={{"line-color":Colors[i],
          "line-width": 2}}/>
        })}
        </Source>
        
    </Map>
    </div>
  );
}

export default MapComponent