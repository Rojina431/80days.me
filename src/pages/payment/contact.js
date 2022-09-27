import { Fragment } from 'react'
import PaymentFormHeader from './formheader'
import '../../assets/styles/psngr.css'
import { ContryNames, CountryNames } from '../../assets/constants/places'
import { SelectDays, SelectMonth } from '../../component/selectdays'

const ContactDetails = () => {
   return (
      <Fragment>
         <PaymentFormHeader class="head-outer" sno="3" 
          formHead="Contact Details" leftText=""/>
        <div className='body-container'>
            <div className='form-cont'>
              <div className='form-cont-inner'>
              <div className='pay-row'>
                <div className='col-left'>
                <label className="form-label fonts-12">Phone</label>
                <input type="text" className="phone form-control mr-2" placeholder=""/>
                </div>
                <div className='col-right'>
                <label className="form-label fonts-12">Email</label>
                <input type="email" className="form-control" placeholder=""/>
                </div>
              </div>
              </div>
            </div>
            <button className='btn-pay-green'>Continue To The Payment</button>
        </div>  
      </Fragment>
   )
}

export default ContactDetails