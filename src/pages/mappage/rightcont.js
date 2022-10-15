import { Fragment, useState } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { IoIosArrowDown, IoMdHelpCircleOutline } from 'react-icons/io'
import { BookedAdventureDetails } from '../../assets/constants/adventuredetails'
import bag from '../../assets/images/bag.png'
import luggage from '../../assets/images/luggage.png'
import trolly from '../../assets/images/trolly.png'
import checkIcon from '../../assets/images/check-icon.svg'
import TooltipComponent from '../../component/tooltipcomp'
import { Link } from 'react-router-dom'


//right container of map page including price
const RightBottomContainer = () => {

    const [isCalc, setIsCalc] = useState(true)
    const [open ,setOpen] = useState(false)
    const [opentooltip1, setOpentooltip1] = useState(false)
    const [opentooltip2, setOpentooltip2] = useState(false)
    const [opentooltip3, setOpentooltip3] = useState(false)
    const [opentooltip4, setOpentooltip4] = useState(false)
    const [opentooltip5, setOpentooltip5] = useState(false)
    const [opentooltip6, setOpentooltip6] = useState(false)
    const [userVal, setUserVal] = useState("1 passenger")

    const handleChange = (val) =>{
        setUserVal(val)
    }

    return (
        <div className="right-bottom-container">
            <div className='check-icon-cont'>
                <img src={checkIcon} alt="checkicon" className='check-icon' 
                onMouseEnter={() => setOpentooltip1(true)} 
                onMouseLeave={() => setOpentooltip1(false)}/>
                {opentooltip1 && <TooltipComponent
                para1="Eightydays Loyalty protects you from:"
                para2="• Flight delays"
                para3="• Flight cancellations"
                para4="• Schedule changes"
                para5="In this case we will offer you alternative flight at our expense.  "/>}
            </div>
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
                        <Fragment key={i}>
                            <span>{adv.fromCity}</span>
                            <BsArrowRight className='mx-2' size={15} />
                        </Fragment>
                    )
                })}
            </div>
            {isCalc ? <Fragment><div className='price-scheme'>
                <div className='price-top-left'>
                <div style={{position:"relative"}}>
                  <div onClick={() => setOpen(!open)} className="fontw-700 fonts-12">{userVal} 
                  {' '}<IoIosArrowDown/>{' '}
                  <span onMouseEnter={() => setOpentooltip2(true)}
                    onMouseLeave={() => setOpentooltip2(false)}><IoMdHelpCircleOutline/></span>
                  {opentooltip2 && <TooltipComponent
                  top="-120px"
                para1="This helps us run our platform and offer services like 24/7 support on your trip. It includes VAT."/>}
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
            
                <div className='price-bottom-left rel-position'>
                    Taxes and Fees {' '}<span 
                    onMouseEnter={() => setOpentooltip3(true)}
                    onMouseLeave={() => setOpentooltip3(false)}><IoMdHelpCircleOutline/></span>
                    {opentooltip3 && <TooltipComponent
                    top="-120px"
                para1="This helps us run our platform and offer services like 24/7 support on your trip. It includes VAT."/>}
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
               <div className='rel-position'>
                <div
                className='blue-text-hover fonts-14 fontw-500'
                onMouseEnter={() => setOpentooltip4(true)}
                onMouseLeave={() => setOpentooltip4(false)}
                >1x <img src={bag} alt="bag"/></div>
            {opentooltip4 && <TooltipComponent
           
                para1="Personal item includes a handbag, a camera bag, a small laptop case or a purse. You can add an extra luggage item on the payment page."/>
                }
              </div>
               <div className='rel-position'>
                <div
                className='blue-text-hover fonts-14 fontw-500'
                onMouseEnter={() => setOpentooltip5(true)}
                onMouseLeave={() => setOpentooltip5(false)}
                >0x <img src={luggage} alt="luggage"/></div>
                {opentooltip5 && <TooltipComponent
                
                para1="Cabin baggage is also known as carry-on or hand luggage. You can take it on the board. You can add an extra luggage item on the payment page."/>
                }
               </div>
               <div className='rel-position'>
                <div
                 className='blue-text-hover fonts-14 fontw-500'
                 onMouseEnter={() => setOpentooltip6(true)}
                 onMouseLeave={() => setOpentooltip6(false)}
                >0x <img src={trolly} alt="trolly"/></div>
                {opentooltip6 && <TooltipComponent
                top="-200px"
                para1="Check-In baggage refers to the items that are transported in the cargo hold of the aircraft like suitcases, oversized items, sports equipment, and musical instruments. You can add an extra luggage item on the payment page."/>
                }
            </div>
            </div> </Fragment> : <div className='long-para'>One of the carriers couldn’t confirm the availability of the tickets. Please, change parameters to create a trip</div>}
            <div className="btn-signup-login">
                {isCalc ? <Link to="/payment/">
                    <button className='btn-green blue-back'>Continue</button>
                </Link> :
                <button className='btn-green' style={{backgroundColor:"#788a86"}}>Try Again</button>}
            </div>
        </div>
    )
}

export default RightBottomContainer