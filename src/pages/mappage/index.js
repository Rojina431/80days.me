import { Fragment, useState, useEffect } from 'react'
import HeaderMap from "../../component/header4"
import LeftWhole from './leftpart'
import RightBottomContainer from './rightcont'
import '../../assets/styles/map.css'
import MapComponent from './map'
import BottomComponent from './bottomcomp'
import useWindowsDimensions from '../../component/windowdimension'
import { useLocation } from 'react-router'
import axios from 'axios'
import { PlaceNamesFilter } from '../../assets/constants/places'
import LoadingComponent from '../../component/loading'
import SharepopupComponent from './sharepopup'
import CitypopupComponent from './citypopup'
import RoutepopupComponent from './routepopup'


//map page
const MapPage = () => {

    const [isMap, setIsMap] = useState(true)
    const [fromCord, setFromCord] = useState({center:[], place:""})
    const [toCord, setToCord] = useState({center:[], place:""})
    const [routeCord, setRouteCord] = useState([])
    const [includeCity, setIncludeCity] = useState([])   //      //list of city that we always include
    const [shuffleCity, setShuffleCity] = useState([])       //list of city that we shuffle
    const [shuffleCityno, setShuffleCityno] = useState([2, 3, 4, 5]) 
    const [routeCity, setRouteCity] = useState([])
    const [dates, setDates] = useState([])
    const [fromCity, setFromCity] = useState([])  
    const [toCity, setToCity] = useState([])
    const [clickedRoute, setClickedRoute] = useState("")
    const [value, setValue] = useState(0)
    const [isLoading, setLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [cityNo, setCityNo] = useState(5)
    const {width, height} = useWindowsDimensions()
    const location = useLocation()

    //filter places from PlaceNamesFilter list in /assets/constants/adventuredetail.js 
    //according to around field value
    const aroundFilter = (around, from, to) => {
      const filtered = PlaceNamesFilter.filter((all) => {
         return all.name === around.value
   })

   const fil = filtered[0].places.filter((place) => {
      if(from.value === to.value) {
         return  place.value !== from.value
      } else {
         return  (place.value !== from.value && place.value !== to.value)
      }
   })
   return fil
    }

    //from around field in form page make a list 
    //excluding the exclude city if there are city to be excluded
    const compareExclude = (around, exclude, from, to) => {
      const aroundCity = aroundFilter(around, from, to)
      const filtered = aroundCity.filter((aroundfil) => {
         return !exclude.find((ex) => ex.value === aroundfil.value)
      })
      const filterexcludeCity = filtered.filter((all) => {
         if(from === to) {
            return all.name !== from
         } else {
            return (all.name !== from || all.name !== to)
         }
      })

      return filterexcludeCity
    }


    //fetch coordinates of start and end destination
    //based on if both are same or different
    const findCoordStartEnd = (from, to) => {
      if(from === to) {
         axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${from}.json?access_token=pk.eyJ1Ijoic2FlZWRjaGFjaGFyOTg3NjU0IiwiYSI6ImNsOG51ZmR4bzA1NTkzb3J1ampqcHd1cG8ifQ.K8kc1_o1iJ6J4HU88F8C2Q`).then((resp) => {
         setFromCord({center:resp.data.features[0].center, place:resp.data.features[0].text})
            setToCord({center:resp.data.features[0].center, place:resp.data.features[0].text})
         }).catch(() => {
            setIsError(true)
            setLoading(false)
            setValue(100) 
         })
      } else {
         axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${from}.json?access_token=pk.eyJ1Ijoic2FlZWRjaGFjaGFyOTg3NjU0IiwiYSI6ImNsOG51ZmR4bzA1NTkzb3J1ampqcHd1cG8ifQ.K8kc1_o1iJ6J4HU88F8C2Q`).then((resp) => {
            setFromCord({center:resp.data.features[0].center, place:resp.data.features[0].text})
         }).catch(() => {
            setIsError(true)
            setLoading(false)
            setValue(100) 
         })
         axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${to}.json?access_token=pk.eyJ1Ijoic2FlZWRjaGFjaGFyOTg3NjU0IiwiYSI6ImNsOG51ZmR4bzA1NTkzb3J1ampqcHd1cG8ifQ.K8kc1_o1iJ6J4HU88F8C2Q`).then((resp) => {
            setToCord({center:resp.data.features[0].center, place:resp.data.features[0].text})
         }).catch(() => {
            setIsError(true)
            setLoading(false)
            setValue(100) 
         })
      }
    }


    //algorithm to shuffle cities only of shuffleCity list 
    const shuffleAlgo = (array) => {
      let currentIndex = array.length,  randomIndex;
  while (currentIndex !== 0) {

   randomIndex = Math.floor(Math.random() * currentIndex);
   currentIndex--;

   [array[currentIndex], array[randomIndex]] = [
     array[randomIndex], array[currentIndex]];
 }

 return array;
}

// finding routes city excluding start and end destination
    const getRoutes = (routes, num) => {
      setValue(60)
       const shuffeledCity = shuffleAlgo(routes)
       setRouteCord([])
       setRouteCity([])
       if(includeCity.length !== 0) {
         for(let j=0; j < includeCity.length; j++) {
            setRouteCity(city => [...city, includeCity[j]])
         }
         for(let i = 0; i < num - includeCity.length ; i++) {
            setRouteCity(city=>[...city, shuffeledCity[i]])
         }
       } else {
         for(let i = 0; i < num ; i++) {
            setRouteCity(city=>[...city, shuffeledCity[i]])
         }
       }
      }


      //fetch coordinates of only routes excluding start and end destination
   const findRoutesCoord = () => {
      for(let i = 0; i < routeCity.length ; i++){
         const query = routeCity[i].value.split("(")[0].split(" ").join("").toLowerCase()
         axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=pk.eyJ1Ijoic2FlZWRjaGFjaGFyOTg3NjU0IiwiYSI6ImNsOG51ZmR4bzA1NTkzb3J1ampqcHd1cG8ifQ.K8kc1_o1iJ6J4HU88F8C2Q`).then((resp) => {
         setRouteCord((prevState) => [...prevState, {center:resp.data.features[0].center, place:resp.data.features[0].text}])   
         setValue(100) 
         setLoading(false)  
      }).catch(() => {
         setIsError(true)
         setLoading(true)
         setValue(100) 
      })
       
      }
   }

//just after entering the map page
    useEffect(() => {
      setValue(20)
      setLoading(true)
      //check if the copmonent send during redirect from home page is undefined or not
       if(location.state !== undefined) {
         setFromCity(location.state.from)
         setToCity(location.state.to)
         setDates(location.state.date)
         const from = location.state.from.value.split("(")[0].split(" ").join("").toLowerCase()
         const to = location.state.to.value.split("(")[0].split(" ").join("").toLowerCase()
         //check both include and exclude have some value entered in hompage form
         if(location.state.include.length !== 0 && location.state.exclude.length !== 0) {
           const arr1= location.state.include.filter((elem1) => {
               return location.state.exclude.find((elem2) => elem1.value === elem2.value)
            })
            //arr1 is list of include and exclude cities that are same entered in home page 
            //form due to which route will be error if both include same city
            if(arr1.length > 0) {
               setValue(100)
               setIsError(true)
            } else {
                findCoordStartEnd(from, to)
                setIncludeCity(location.state.include)
                const excluded = location.state.exclude.concat(location.state.include)
                const filteredExclude = compareExclude(location.state.around, excluded, location.state.from, location.state.to)
                setShuffleCity(filteredExclude)
            }
         } else {
            
              findCoordStartEnd(from, to)
              if(location.state.include.length !== 0) {
               setIncludeCity(location.state.include)
               const filteredAround = compareExclude(location.state.around, location.state.include, location.state.from, location.state.from)
               setShuffleCity(filteredAround)
              } else if(location.state.exclude.length !== 0) {
               const filteredExclude = compareExclude(location.state.around, location.state.exclude, location.state.from, location.state.to)
               setShuffleCity(filteredExclude)
              } else {
               const filteredAround = aroundFilter(location.state.around, location.state.from, location.state.to)
               setShuffleCity(filteredAround)
              }
         }
       }
    }, [])

    //when cities in shuffleCity list changes
    useEffect(() => {
      setValue(40)
      var cities = []
        if(shuffleCity.length > 0) {
         if(includeCity.length > 0) {
           
            for(let i = includeCity.length; i < 4; i++) {
             cities.push(i+2)
            }
            setCityNo(cities[cities.length - 1])
            setShuffleCityno(cities)
            getRoutes(shuffleCity, cities[cities.length - 1])
         } else if(shuffleCity !== undefined) {
            if(shuffleCity.length >= 5) {
               setShuffleCityno([2, 3, 4, 5])
               setCityNo(5)
               getRoutes(shuffleCity, 5)
            } else {
              for(let j = 1; j < shuffleCity.length; j++) {
               cities.push(j+1)
              }
              setCityNo(cities[cities.length - 1])
              setShuffleCityno(cities)
              getRoutes(shuffleCity, cities[cities.length - 1])
            }
         }
        }
    }, [shuffleCity])

    //for toggle between map and route component of left part in mobile view
    useEffect(() => {
       if(width > 728){
         setIsMap(true)
       }
    }, [width])

//for toggle between map and route component of left part in mobile view
    const handleChange = (value) => {
        setIsMap(value)
    }


    //function to calculate when different cities no is selected in navbar
    const handleCityNo = (val) => {
      setCityNo(val)
      getRoutes(shuffleCity, val)
    }

   //when cityNo in navbar is changed 
    useEffect(() => {
      setValue(80)
      if(cityNo === routeCity.length){
        findRoutesCoord()
      }
    }, [cityNo, routeCity])

    //clicking each route city in map
    const routeChange = (val) => {
      setClickedRoute(val)
    }

if(dates.length > 0) {
   if(isLoading || isError) {
      return <LoadingComponent isError={isError} value={value} from={fromCity} to={toCity} dates={dates}/>
    } else {
       return (
          <Fragment>
            <div className="map-whole">
            <HeaderMap cityNo={cityNo} shuffleCity = {shuffleCityno} handleChange={handleCityNo}/>
               {isMap && routeCord.length >0 && routeCord.length === cityNo &&<MapComponent
               handleRouteChange={routeChange}
               from={fromCord} to={toCord} routes={routeCord}/>}
               <div>
               {((!isMap) || (width>728)) &&
               <LeftWhole/>}
               {width > 728 ? 
               <RightBottomContainer/> : 
               <BottomComponent toggleMap={isMap} handleChange={handleChange}/>}       
               </div>
            </div>
            <SharepopupComponent/>
            <CitypopupComponent route={clickedRoute}/>
            <RoutepopupComponent/>
          </Fragment>
       )
    }
} else {
   return <div></div>
}

}

export default MapPage