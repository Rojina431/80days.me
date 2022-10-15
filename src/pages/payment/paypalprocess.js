import { Fragment } from 'react'


//paypal process container
const Paypal = () => {
    return (
        <Fragment>
            <div className='fonts-20 fontw-700' 
             style={{color:"#4a4a4a", marginBlockEnd:"1em",
             marginBlockStart:"1em"
            }}
             >Paypal</div>
             <div className='fontw-400 fonts-18 mb-5'
               style={{color:"#4a4a4a", marginBlockEnd:"1em",
               marginBlockStart:"1em",
               marginTop:"15px"
              }}
             >
             Please select 'Pay Now' to continue with PayPal transaction. You will be redirected to PayPal web site. Don't worry we'll bring you straight back once you're finished
             </div>
        </Fragment>
    )
}

export default Paypal