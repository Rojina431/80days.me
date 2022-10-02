import { IoIosArrowForward } from 'react-icons/io'
import { AiOutlineClockCircle } from 'react-icons/ai'
import '../../assets/styles/chat.css'
import logo from '../../assets/images/iconmain.png'
import { IoSendSharp } from 'react-icons/io5'

const SecondChat = (props) => {


    return (<div className='chat-box hi'>
              <div className='chat-box-upper'>
                        <div className='fonts-24 fontw-700 ms-4'>Hi there 👋</div>
                        <br/>
                
              </div>
              <div className='chat-box-lower' >
              <div className='hi-comp black-text' style={{marginTop:"-60px"}}>
                   
                    <div className='fonts-20 fontw-500'>Continue the converstaion</div>
                    <div className="row reply" onClick={() => props.handleRedirect("third")}>
                        <div className="col-2 traveller-icon mt-3">
                            <img src={logo} alt="flag" height="40px" width="40px" />
                        </div>
                        <div className="col-9 mt-2" style={{ marginLeft: "10px", display:"flex",alignItems:"center"}}>
                            <div>
                            <div className='fonts-14 fontw-400'>Operator 80days.me.typically</div>
                            <div className='fonts-14 fontw-400'style={{color:"#757575"}}>80days.me14h</div>
                            </div>
                            <IoIosArrowForward  size={30} style={{color:"#757575", cursor:"pointer"}}/>
                        </div>
                    </div>
                </div>
                <div className='hi-comp black-text'>
                    <div className='fonts-20 fontw-500'>Start another converstaion</div>
                    <div className="row">
                        <div className="col-2 traveller-icon mt-3">
                            <img src={logo} alt="flag" height="40px" width="40px" />
                        </div>
                        <div className="col-8 mt-2" style={{ marginLeft: "10px" }}>
                            <div className='fonts-14 fontw-400'>Our usual reply time</div>
                            <div className='fonts-16 fontw-500'><AiOutlineClockCircle /> A few minutes</div>
                        </div>
                    </div>
                    <div className='border-btn' onClick={() => props.handleRedirect("first")}>
                        <div className='fonts-14 fontw-500'> <IoSendSharp size={20}/>  Send us a message</div>
                    </div>
                </div>
             </div>
            </div>
    )
}

export default SecondChat