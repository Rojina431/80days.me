import { Fragment, useState } from 'react'
import HeaderLoginSignup from '../../component/header2'
import '../../assets/styles/common.css'
import '../../assets/styles/loginsignup.css'
import SignUpContainer from './signup'
import LoginContainer from './login'

const LoginSignUp = () => {

    const [isLogin, setIsLogin] = useState(true)

    const handleToggle = (login) => {
       var loginelem = document.getElementById("#login")
       var signupelem = document.getElementById("#signup")

       if(login) {
        setIsLogin(true)
        loginelem.classList.add("active")
        loginelem.classList.remove("not-active")
        signupelem.classList.remove("active")
        signupelem.classList.add("not-active")
       } else {
        setIsLogin(false)
        loginelem.classList.remove("active")
        loginelem.classList.add("not-active")
        signupelem.classList.add("active")
        signupelem.classList.remove("not-active")
       }
    }

    return (
      <Fragment>
        <div className='login-whole'>
          <HeaderLoginSignup/>
          <div className='main-center'>
             <div className='login-signup-btn'>
                 <div id="#signup" className='signup not-active' onClick={() => handleToggle(false)}>
                       signup
                 </div>
                 <div id="#login" className='login active' onClick={() => handleToggle(true)}>
                        login
                 </div>
             </div>
             {isLogin ? <LoginContainer/> :
             <SignUpContainer/>}
          </div>
        </div>
      </Fragment>
    )
}

export default LoginSignUp