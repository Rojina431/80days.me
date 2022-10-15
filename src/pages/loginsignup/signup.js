import { SelectCountry } from "./selectcountry"


//signup conatiner
const SignUpContainer = () => {
    return (
       <div className="main-container">
        <div className="form-signup">
           <div className="each-form-field each-field-border">
             <input type="text" placeholder="First Name"/>
           </div>
           <div className="each-form-field each-field-border">
             <input type="text" placeholder="Last Name"/>
           </div>
           <div className="each-form-field each-field-border">
             <SelectCountry/>
           </div>
           <div className="each-form-field each-field-border">
             <input type="email" placeholder="Email"/>
           </div>
           <div className="each-form-field">
             <input type="text" placeholder="Password"/>
           </div>
        </div>
        <div className="btn-signup-login">
         <button className='btn-green blue-back'>Sign up</button>
         </div>
         <div className="footer-login">
            <div className="agreement">
            By signing up, you agree to Eightydays
            </div>
            <div className="privacy">
            <a href="#">Privacy Policy and Terms of Use</a>
            </div>
         </div>
       </div>
    )
}

export default SignUpContainer