
//login container
const LoginContainer = () => {
    return (
       <div className="main-container">
        <div className="form-signup">
           <div className="each-form-field each-field-border">
             <input type="email" placeholder="Email"/>
           </div>
           <div className="each-form-field">
             <input type="text" placeholder="Password"/>
           </div>
        </div>
        <div className="btn-signup-login">
         <button className='btn-green blue-back'>Log in</button>
         </div>
         <div style={{textAlign:"center", fontWeight:"bold"}} className="fonts-14">or</div>
         <div className="btn-signup-login">
         <button className='btn-green'>Log in with facebook</button>
         </div>
         <div className="btn-signup-login">
         <button className='btn-green' style={{backgroundColor:"#d55348"}}>Log in with google</button>
         </div>
         <div className="footer-login">
            <div className="forget">
             Forgot your password?
            </div>
            <div className="guest">
            <a href="#">Continue as guest</a>
            </div>
         </div>
       </div>
    )
}

export default LoginContainer