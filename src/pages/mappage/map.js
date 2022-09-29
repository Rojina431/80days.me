import Map from 'react-map-gl';

const MapComponent = () => {
  return (
    <div style={{position:"absolute",top:0}}>
    <Map
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14
      }}
      mapboxAccessToken="pk.eyJ1Ijoic2NvdGhpcyIsImEiOiJjaWp1Y2ltYmUwMDBicmJrdDQ4ZDBkaGN4In0.sbihZCZJ56-fsFNKHXF8YQ"
      style={{width: "100%", height: "100vh"}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    />
    </div>
  );
}

export default MapComponent