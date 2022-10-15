import { Fragment } from 'react'
import '../../assets/styles/totalpay.css'

//right sticky component of payment page

const TotalPaymentComp = (props) => {
    return (
      <div className="total-payment-comp">
         <div className="total-pay-title">Trip Price</div>
         <div className="pay-note">
           <div className="left">
             1 × Passenger
           </div>
           <div className="right">
            19 515 ₽
           </div>
         </div>
         <Fragment>
         <div style={{lineHeight:"30px"}}>
         <div className="pay-note">
           <div className="left">
             1 × Personal Item
           </div>
           <div className="right">
            Free
           </div>
         </div>
         </div>
         <div className="pay-note">
           <div className="left" style={{marginTop:"-10px"}}>
           40 x 20 x 25 сm, 5 kg
           </div>
         </div>
         </Fragment>
         {props.firstCheck && 
         <Fragment>
         <div style={{lineHeight:"30px"}}>
         <div className="pay-note">
           <div className="left">
            1 x Cabin Bag
           </div>
           <div className="right">
            2980 ₽
           </div>
         </div>
         </div>
         <div className="pay-note">
           <div className="left" style={{marginTop:"-10px"}}>
           55 x 20 x 40 сm, 10 kg
           </div>
         </div>
         </Fragment>}
         {props.secondCheck && 
         <Fragment>
         <div style={{lineHeight:"30px"}}>
         <div className="pay-note">
           <div className="left">
            1 x Check-in Bag
           </div>
           <div className="right">
            8841 ₽
           </div>
         </div>
         </div>
         <div className="pay-note">
           <div className="left" style={{marginTop:"-10px"}}>
           158cm, 20 kg
           </div>
         </div>
         </Fragment>}
         <div className='border-pay'>
           <div className='pay-head'>
              <div className='pay-text1'>Total cost in <span className='pay-text2'>RUB</span></div>
              <div className='pay-text3'>19 515 ₽</div>
           </div>
           <div className='pay-text4'>
           Conversion into foreign currency is provided as a 
           suggestion and is not compulsory. The price of the 
           trip is converted to show you the approximate cost 
           in the currency you selected.
           </div>
           <div className='pay-text5'>
           You'll pay in USD $.
           </div>
         </div>
         <div className='border-pay'>
          <div className='pay-head'>
              <div className='pay-foot1'>Total to pay <span className='pay-text2'>USD</span></div>
              <div className='pay-foot3'>$537</div>
           </div>
         </div>
      </div>
    )
}

export default TotalPaymentComp