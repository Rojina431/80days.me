import { Fragment, useState } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { BookedAdventureDetails } from '../../assets/constants/adventuredetails'
import '../../assets/styles/payment.css'
import HeaderPayment from '../../component/header3'
import ContactDetails from './contact'
import PayProcess from './payprocess'
import PessengerInfo from './psngrdetail'
import TripSummary from './summary'
import TotalPaymentComp from './totalpayment'

const PaymentPage = () => {

    const [firstCheck, setFirstCheck] = useState(false)
    const [secondCheck, setSecondCheck] = useState(false)

    const handleChange = (first, second) => {
        setFirstCheck(first)
        setSecondCheck(second)
    }

    return (
      <div className="payment-comp">
        <HeaderPayment/>
        <div className='payment-content'>
           <div className='route-line'>
            <h4>
                {BookedAdventureDetails.map((adv, i) => {
                    return (
                        <Fragment>
                        <span>{adv.fromCity}</span>
                        <BsArrowRight className='mx-2' size={15}/>
                        </Fragment>
                    )
                })}
                <span>{BookedAdventureDetails[0].fromCity}</span>
            </h4>
           </div>
           <div className='pay-body'>
               <div className='payment-form'>
                 <TripSummary/>
                 <PessengerInfo handleChange={handleChange}/>
                 <ContactDetails/>
                 <PayProcess/>
               </div>
               <div className='total-estimate-payment'>
                <TotalPaymentComp 
                firstCheck={firstCheck}
                secondCheck={secondCheck}
                />
               </div>
           </div>
        </div>
      </div>
    )
}

export default PaymentPage