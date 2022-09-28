import {useState, Fragment, useEffect} from 'react'
import { IoLocationSharp } from 'react-icons/io5'
import { CgShapeCircle } from 'react-icons/cg'
import { GoCalendar } from 'react-icons/go'
import {addDays, format} from 'date-fns'
import {AiFillMinusCircle, AiFillCheckCircle} from 'react-icons/ai'
import { CountryNames, PlaceNames } from "../../assets/constants/places"
import {SelectPlace, SelectMultiplePlace} from "../../component/selectplace"

import Dashed from '../../component/dashed'
import DateRangeComp from './dateRange'

const HomePageForm = (props) => {

    const [from, setFrom] = useState("London (LON)")
    const [to, setTo] = useState("London (LON)")
    const [around, setAround] = useState("Eurotrip: Romantic Cities")
    const [state, setState] = useState([
        {
          startDate: new Date(),
          endDate: (addDays(new Date(), 7)),
          key: 'selection'
        }
      ])
    const [openDate, setOpenDate] = useState(false)
    const [checkedany, setcheckedany] = useState(true)
    const [checkedto, setcheckedto] = useState(true)
    const [checkedexthree, setcheckedexthree] = useState(false)
    const [checkedinthree, setcheckedinthree] = useState(false)

    const handleFrom = (value) => {
        console.log(value)
        setFrom(value)
    }

    const handleTo = (value) => {
        setTo(value)
    }

    const handleAround = (value) => {
        setAround(value)
    }

    const handleDatePicker = (value) => {
        console.log(format(value[0].startDate, "eee, MMM dd"))
        setState(value)
        if(value[0].startDate !== value[0].endDate){
            setOpenDate(false)
        }
    }


    const clickPlace = () => {
        
    setcheckedany(!checkedany)
    }

    const clickTo = () => {
        setcheckedto(!checkedto)
      }

const heightCalc = () => {
    if(!checkedany &&  !checkedto) {
        if(checkedexthree && checkedinthree) {
            props.handleHeight("588px")
        } else if(checkedexthree || checkedinthree){
            props.handleHeight("563px")
        } else {
            props.handleHeight("538px")
        }
    } else if(!checkedany) {
        if(checkedexthree && checkedinthree) {
            props.handleHeight("537px")
        } else if(checkedexthree || checkedinthree){
            props.handleHeight("512px")
        } else {
            props.handleHeight("487px")
        }
    } else if (!checkedto) {
        props.handleHeight("416px")
    } else {
        props.handleHeight("365px") 
    }
}

const handleNumberIn = (val1) => {
    setcheckedinthree(val1)
}

const handleNumberEx = (val1) => {
  setcheckedexthree(val1)
}

useEffect(() => {
   heightCalc()
}, [checkedany, checkedto, checkedexthree, checkedinthree])

    return (
        <div className='form-field'>
        <div className='each-field mt-3'>
              <div className='_10percent-field-icon'>
                <IoLocationSharp />
                 <Dashed number={5} color="#b6b6bc"/>
              </div>
              <div className='border-field'>
               <div className='_10percent-field fonts-14'>From</div>
              <div className='select-drop'>
              <SelectPlace value={from} data={CountryNames} handleChange={handleFrom}/>
              </div>
              </div>
        </div>
        <div className='each-field'>
        <div className='_10percent-field-icon'>
   
            <CgShapeCircle /></div>
              <div className='border-field'>
               <div className='_10percent-field fonts-14'>Around</div>
              <div className='select-drop'>
              <SelectPlace value={around} data={PlaceNames} handleChange={handleAround}/>
              </div>
              </div>
        </div>
        <div className='each-field'>
        <div className='_10percent-field-icon'><GoCalendar /></div>
              
               <div className='_10percent-field fonts-14 mt-1'>Dates</div>
              <div className='select-drop'>
                {openDate ?
                <DateRangeComp
                state={state}
                handleDatePicker={handleDatePicker}/> :
                <div nClick={() => setOpenDate(true)} className="fonts-14 fontw-700" style={{display:"flex", justifyContent:"space-around", paddingLeft:"50px"}}>
                  <div>{format(state[0].startDate, "eee, MMM dd")}</div> 
                  <div style={{backgroundColor:"black", marginTop:"11px", width:"12px", height:"2px"}}></div> 
                  <div>{format(state[0].endDate, "eee, MMM dd")}</div>
                </div>
            }
              </div>
        </div>
        <div className='each-field shadow-field' onClick={() => clickPlace()}>
        <div className='_10percent-field-check'>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked={checkedany}/>
        </div>
              
              <div className='_10percent-field fonts-14'>Anywhere</div>
        </div>
        {!checkedany && <Fragment>
            <div className='each-field-varh'>
              <div className='_10percent-field-icon'>
                <AiFillCheckCircle/>
              </div>
              <div className='border-field-one'>
              <SelectMultiplePlace handleNumber={handleNumberIn}
              placeholder="Include city (max. 3)" value={from} 
              data={CountryNames} handleChange={handleFrom}/>
              </div>
        </div>
        <div className='each-field-varh'>
              <div className='_10percent-field-icon'>
                <AiFillMinusCircle/>
              </div>
              <div className='border-field-one'>
              <SelectMultiplePlace 
              handleNumber={handleNumberEx}
              placeholder="Exclude city (max. 3)" value={from} data={CountryNames} handleChange={handleFrom}/>
              </div>
        </div>
            </Fragment>}
            <div className='each-field' onClick={() => clickTo()}>
        <div className='_10percent-field-check'>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked={checkedto}/>
        </div>
              
              <div className='_10percent-field fonts-14'>RoundTrip</div>
        </div>
        {!checkedto && <div className='each-field'>
              <div className='_10percent-field-icon'>
                <IoLocationSharp />
              </div>
               <div className='_10percent-field fonts-14'>To</div>
              <div className='select-drop'>
              <SelectPlace value={to} data={CountryNames} handleChange={handleTo}/>
              </div>
        </div>}
     </div>
    )
}

export default HomePageForm