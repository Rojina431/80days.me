import { Fragment, useState } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { IoIosArrowDown, IoMdHelpCircleOutline } from 'react-icons/io'
import { BookedAdventureDetails } from '../../assets/constants/adventuredetails'
import bag from '../../assets/images/bag.png'
import luggage from '../../assets/images/luggage.png'
import trolly from '../../assets/images/trolly.png'

const RightBottomContainer = () => {

    const [isCalc, setIsCalc] = useState(false)
    const [open ,setOpen] = useState(false)
    const [userVal, setUserVal] = useState("1 passenger")

    const handleChange = (val) =>{
        setUserVal(val)
    }

    return (
        <div className="right-bottom-container">
            <div className="top-date">
                <div>
                    Fri, Oct 28 - Sat, Nov 5
                </div>
                <div style={{ textTransform: "uppercase" }}>
                    8 NIGHTS
                </div>
            </div>
            <div className="right-route">
                {BookedAdventureDetails.map((adv, i) => {
                    return (
                        <Fragment>
                            <span>{adv.fromCity}</span>
                            <BsArrowRight className='mx-2' size={15} />
                        </Fragment>
                    )
                })}
            </div>
            {isCalc ? <Fragment><div className='price-scheme'>
                <div className='price-top-left'>
                <div>
                  <div onClick={() => setOpen(!open)} className="fontw-700 fonts-12">{userVal} 
                  {' '}<IoIosArrowDown/>{' '}
                  <span ><IoMdHelpCircleOutline/></span>
                  </div>
               </div>
                </div>
                <div className='price-top-right'>
                    13 163 ₽
                </div>
            </div>
            <div style={{position:"relative"}}>
                  {open && <div className='pasng-select fonts-16 fontw-300'>
                     <div onClick={() => handleChange("1 passenger")}>1 passenger</div>
                     <div onClick={() => handleChange("2 passengers")}>2 passengers</div>
                     <div onClick={() => handleChange("3 passengers")}>3 passenger</div>
                     <div onClick={() => handleChange("4 passengers")}>4 passengers</div>
                  </div>}
                      
            <div className='price-scheme'>
            
                <div className='price-bottom-left'>
                    Taxes and Fees {' '}<span ><IoMdHelpCircleOutline/></span>
                </div>
            
                <div className='price-bottom-right'>
                    938 ₽
                </div>
                </div> 
                </div> 
            <div className='total-price'>
                Total: 14 101 ₽
            </div>
            
            <div className='personal-item'>
               <div>1x <img src={bag} alt="bag"/></div>
               <div>0x <img src={luggage} alt="luggage"/></div>
               <div>0x <img src={trolly} alt="trolly"/></div>
            </div> </Fragment> : <div className='long-para'>One of the carriers couldn’t confirm the availability of the tickets. Please, change parameters to create a trip</div>}
            <div className="btn-signup-login">
                {isCalc ? <button className='btn-green'>Continue</button> :
                <button className='btn-green' style={{backgroundColor:"#788a86"}}>Try Again</button>}
            </div>
        </div>
    )
}

export default RightBottomContainer