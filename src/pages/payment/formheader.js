import { Fragment } from 'react'

const PaymentFormHeader = (props) => {
    return(
        <div className={props.class}>
            <div className="head-inner">
           <div className="sno">
              {props.sno}
           </div>
           <div className="form-head">
            {props.formHead}
           </div>
           {props.leftText !== "" &&
           props.isImage ? 
           <div style={{position:"absolute", right:"30px"}}>
           <img src={props.leftText}  height="40px" style={{marginTop:"-5px"}}/>
           <img src={props.img2} height="30px" style={{marginTop:"-5px"}}/>
           </div>
            : <div className="left-text">
              {props.leftText}
           </div>
           }
           </div>
        </div>
    )
}

export default PaymentFormHeader