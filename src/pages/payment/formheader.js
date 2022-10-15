//header of each component summary, psngr detail, payment form

const PaymentFormHeader = (props) => {
    return(
        <div className={`${props.class1} ${props.class}`}>
            <div className="head-inner">
            {props.leftText !== "" &&
           props.isImage ? 
           <div className='pay-logo'>
           <img src={props.leftText}  height="40px" style={{marginTop:"-5px"}}/>
           <img src={props.img2} height="30px" style={{marginTop:"-5px"}} className="img-2"/>
           </div>
            : <div className="left-text">
              {props.leftText}
           </div>
           }
           <div className='left-head'>
           <div className="sno">
              {props.sno}
           </div>
           <div className="form-head">
            {props.formHead}
           </div>
           </div>
           </div>
        </div>
    )
}

export default PaymentFormHeader