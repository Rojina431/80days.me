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
           <div className="left-text">
              {props.leftText}
           </div>
           }
           </div>
        </div>
    )
}

export default PaymentFormHeader