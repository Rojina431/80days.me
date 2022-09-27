import {useState, Fragment, useEffect} from 'react'
import { IoLocationSharp } from 'react-icons/io5'
import { CgShapeCircle } from 'react-icons/cg'
import { GoCalendar } from 'react-icons/go'
import {AiFillMinusCircle, AiFillCheckCircle} from 'react-icons/ai'
import { CountryNames, PlaceNames } from "../../assets/constants/places"
import {SelectPlace, SelectMultiplePlace} from "./selectplace"

import Dashed from '../../component/dashed'

const HomePageForm = (props) => {

    const [from, setFrom] = useState("London (LON)")
    const [to, setTo] = useState("London (LON)")
    const [around, setAround] = useState("Eurotrip: Romantic Cities")
    const [fromDate, setFromDate] = useState("")
    const [checkedany, setcheckedany] = useState(true)
    const [checkedto, setcheckedto] = useState(true)

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

    const clickPlace = () => {
        
    setcheckedany(!checkedany)
    }

    const clickTo = () => {
        setcheckedto(!checkedto)
      }

const heightCalc = () => {
    if(!checkedany &&  !checkedto) {
        props.handleHeight("508px")
    } else if(!checkedany) {
        props.handleHeight("457px")
    } else if (!checkedto) {
        props.handleHeight("406px")
    } else {
        props.handleHeight("355px") 
    }
}

useEffect(() => {
   heightCalc()
}, [checkedany, checkedto])

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
              {/* <DatePicker.RangePicker bordered={false}/> */}
              </div>
        </div>
        <div className='each-field shadow-field' onClick={() => clickPlace()}>
        <div className='_10percent-field-check'>
            {/* <Checkbox checked={checkedany}/> */}
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
              <SelectMultiplePlace placeholder="Include city (max. 3)" value={from} data={CountryNames} handleChange={handleFrom}/>
              </div>
        </div>
        <div className='each-field-varh'>
              <div className='_10percent-field-icon'>
                <AiFillMinusCircle/>
              </div>
              <div className='border-field-one'>
              <SelectMultiplePlace placeholder="Exclude city (max. 3)" value={from} data={CountryNames} handleChange={handleFrom}/>
              </div>
        </div>
            </Fragment>}
            <div className='each-field' onClick={() => clickTo()}>
        <div className='_10percent-field-check'>
            {/* <Checkbox checked={checkedto}/> */}
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