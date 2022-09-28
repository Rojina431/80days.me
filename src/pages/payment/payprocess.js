import { Fragment, useState } from 'react'
import PaymentFormHeader from './formheader'
import payImage from '../../assets/images/paymenticon.png'
import master from '../../assets/images/mastercard.svg'
import visa from '../../assets/images/visa.svg'
import american from '../../assets/images/americanexp.svg'
import stripe from '../../assets/images/stripe.svg'
import diner from '../../assets/images/diner.svg'
import paypal from '../../assets/images/paypal.svg'
import poweredBy from '../../assets/images/poweredby.png'
import '../../assets/styles/payprocess.css'
import DebitProcess from './debitprocess'
import Paypal from './paypalprocess'

const PayProcess = () => {

    const [isDebit, setIsDebit] = useState(true)

    return (
        <Fragment>
            <PaymentFormHeader isImage={true} class="head-outer"
                sno="4" formHead="Payment" leftText={payImage} img2={poweredBy} />
            <div className='body-container' style={{paddingBottom:"0px"}}>
                <div className='form-cont' style={{marginBottom:"30px"}}>
                    <div className='form-cont-inner' style={{padding:"30px 40px"}}>
                    <div className="image-pay">
                    <div className='mr-3 image-pay-left'>
                        <div className="form-check radio">
                            <input className="form-check-input"
                             onClick={() => setIsDebit(true)}
                            checked={isDebit} type="radio" />
                            <>
                            <label className="form-check-label">
                                Debit/Credit Card
                            </label>
                            <div className='pay-image'>
                            <img src={master} alt="master" className='each-image'/>
                            <img src={visa} alt="visa" className='each-image'/>
                            <img src={american} alt="american" className='each-image'/>
                            <img src={diner} alt="diner" className='each-image'/>
                            <img src={stripe} alt="stripe" className='each-image'/>
                            </div>
                            </>
                        </div>
                        
                    </div>
                    <div className='image-pay-right'>
                        <div class="form-check radio">
                            <input class="form-check-input"
                            onClick={() => setIsDebit(false)}
                             checked={!isDebit} type="radio" />
                            <>
                            <label class="form-check-label">
                                Paypal
                            </label>
                            <div className='mt-3 paypal-img' style={{height:"30px"}}>
                             <img src={paypal} alt="paypal" className='each-image'/>
                            </div>
                            </>
                        </div>
                    </div>
                </div>
                {isDebit ? <DebitProcess/> : <Paypal/>}
               <div className='card-no form-check'>
                <input type="checkbox" className="form-check-input"/>
                <label className="form-check-label fontw-300" 
                style={{marginLeft:"30px", lineHeight:"1.64", color:"#999"}}>
                I accept the <a href='#' style={{color:"#999"}}>Terms and Conditions</a> of Eightydays.me and agree with Eightydays.me's immediate performance of services. I also acknowledge that I cannot withdraw from Eightydays.me's service agreement.
                </label>
               </div>
               <button className='btn-pay-green mt-3 mb-3'>Pay Now</button>
                    </div>
                </div>
            </div>
        </Fragment>

    )
}

export default PayProcess