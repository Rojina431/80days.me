import { Fragment, useState, useEffect } from 'react'
import PaymentFormHeader from './formheader'
import '../../assets/styles/psngr.css'
import { ContryNames } from '../../assets/constants/places'
import { SelectDays, SelectMonth } from '../../component/selectdays'
import PopoverButton from './popover'
import { BsCheck2 } from 'react-icons/bs'
import bag from '../../assets/images/bag.png'
import luggage from '../../assets/images/luggage.png'
import trolly from '../../assets/images/trolly.png'
import { GoPlus } from 'react-icons/go'

//psngr detail component of left part of payment page

const PessengerInfo = (props) => {

    const [firstCheck, setFirstCheck] = useState(false)
    const [secondCheck, setSecondCheck] = useState(false)
    const [firstHover, setFirstHover] = useState(false)
    const [secondHover, setSecondHover] = useState(false)
    const [thirdHover, setThirdHover] = useState(false)

    useEffect(()=> {
        props.handleChange(firstCheck, secondCheck)
    }, [firstCheck, secondCheck])

    const handleClick = () => {
        console.log("clicke")
    }

    const handleFirst=() => {
        setFirstCheck(!firstCheck)
    }

    const handleSecond = () => {
        setSecondCheck(!secondCheck)
    }

    const handleHover1=() => {
      setFirstHover(true)
  }

  const handleHover2 = () => {
      setSecondHover(true)
  }

  const handleHover3 = () => {
   setThirdHover(true)
}

const handleHoverOut = () => {
   setFirstHover(false)
   setSecondHover(false)
   setThirdHover(false)
}

   return (
      <Fragment>
         <PaymentFormHeader class="head-outer" sno="2" 
          formHead="Passenger Information" leftText="1 Passenger"/>
        <div className='body-container'>
            <div className='fonts-30 fontw-700'>1 Passenger</div>
            <div className='notice'>Use all given names and surnames exactly as per passport/ID.</div>
            <div className='form-cont'>
              <div className='form-cont-inner'>
              <div className='pay-row'>
                <div className='col-left'>
                <label className="form-label fonts-12">Given name</label>
                <input type="text" className="form-control mr-2" placeholder=""/>
                </div>
                <div className='col-right'>
                <label className="form-label fonts-12">Surname</label>
                <input type="text" className="form-control" placeholder=""/>
                </div>
              </div>
              <div className='pay-row'>
                <div className='col-left'>
                    <div className='pay-row-o-margin'>
                       <div className='col-left'>
                         
                       <label className="form-label fonts-12">Nationality</label><select className='form-select'>
                            {ContryNames.map((cont, index) => {
                                return (
                                    <option value={cont} key={index}>{cont}</option>
                                )
                            })}
                         </select>
                       </div>
                       <div className='col-right'>
                       <label className="form-label fonts-12">Gender</label>
                            <select className='form-select'>
                               <option value="Male">Male</option>
                               <option value="Female">Female</option>
                               <option value="Others">Others</option>
                            </select>
                       </div>
                    </div>
                    
                </div>
                <div className='col-right'>
                    <label className="form-label fonts-12">Date of Birth</label>
                       <div className='pay-row-o-margin'>
                          <div className='col-day'>
                            <SelectDays/>
                          </div>
                          <div className='col-month'>
                            <SelectMonth/>
                          </div>
                          <div className='col-year'>
                             <input className='form-select' type="text" placeholder="YYYY"/>
                          </div>
                       </div>
                </div>
              </div>
              <div className='pay-row'>
              <div className='col-left'>
                <label className="form-label fonts-12">Passport / National ID number</label>
                <input type="text" className="form-control mr-2" placeholder=""/>
                </div>
                <div className='col-right'>
                    <label className="form-label fonts-12">Passport / National ID number expiration date</label>
                       <div className='pay-row-o-margin'>
                          <div className='col-day'>
                            <SelectDays/>
                          </div>
                          <div className='col-month'>
                            <SelectMonth/>
                          </div>
                          <div className='col-year'>
                             <input className='form-select' type="text" placeholder="YYYY"/>
                          </div>
                       </div>
                </div>
              </div>
              </div>
              <div className='form-cont-shadow'>
                 <div className='form-shadow-text'>Baggage</div>
                  <PopoverButton
                   handleCheck={handleClick}
                   img={bag}
                   text="free"
                   open={firstHover}
                   handleHover={handleHover1}
                   handleHoverOut={handleHoverOut}
                   icon={<BsCheck2 style={{color:"#b6b6bc"}}
                   />}
                   para1="Personal item is free."
                   para2="Personal items include bag, camera, phone."
                   para3="It must not exceeds 40*40*25 cm size, 5kg."
                   />
                   <PopoverButton
                   handleCheck={handleFirst}
                   img={luggage}
                   text="2980 ₽"
                   open={secondHover}
                   handleHover={handleHover2}
                   handleHoverOut={handleHoverOut}
                   icon={firstCheck ? 
                   <BsCheck2 style={{color:"#4bd963"}} size={20}/> : <GoPlus/>}
                   para1="1 Cabin bag costs 2980 ₽."
                   para2="Personal items include bag, camera, phone."
                   para3="It must not exceeds 55 x 20 x 40 сm, 10 kg"/>
                   <PopoverButton
                   handleCheck={handleSecond}
                   img={trolly}
                   text="8841 ₽"
                   open={thirdHover}
                   handleHover={handleHover3}
                   handleHoverOut={handleHoverOut}
                   icon={secondCheck ? 
                   <BsCheck2 style={{color:"#4bd963"}} size={20}/> : <GoPlus/>}
                   para1="1 Check-in bag costs 8841 ₽."
                   para3="It must not exceeds 158 сm, 20 kg"/>
              </div>
            </div>
            <button className='btn-pay'>Add Passenger</button>
        </div>  
      </Fragment>
   )
}

export default PessengerInfo