import { BsEmojiSmile } from 'react-icons/bs'
import { IoIosArrowBack } from 'react-icons/io'
import { MdOutlineGif } from 'react-icons/md'
import { AiOutlineClockCircle, AiOutlineLink } from 'react-icons/ai'
import '../../assets/styles/chat.css'
import flag from '../../assets/images/flag.svg'
import logo from '../../assets/images/iconmain.png'

const EachChat = (props) => {
    return (
        <div className='chat-box'>
            <div className='chat-box-upper' style={{height:"80px"}}>

                <div>
                    <IoIosArrowBack size={20} style={{cursor:"pointer"}} onClick={() => props.handleRedirect("second")}/>
                </div>
                <div style={{ width: "90%", marginLeft: "40px", marginTop:"-10px" }}>
                    <div className="row">
                        <div className="col-2 traveller-icon mt-3">
                            <img src={logo} alt="flag" height="40px" width="40px" />
                        </div>
                        <div className="col-8 mt-2" style={{ marginLeft: "10px" }}>
                            <div className='fonts-14 fontw-400'>80days.me</div>
                            <div className='fonts-16 fontw-500'><AiOutlineClockCircle /> A few minutes</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='chat-box-lower'>
                <div className='chat-lower-body'>
                    <div className='sent'>
                        <div>
                            <div className='msg'>Hello</div>
                            <p className='msg-date'>12h ago</p>
                        </div>
                    </div>
                    <div className='receive'>
                        <img src={flag} alt="flag" height="20px" width="20px" style={{ margin: "10px 10px" }} />
                        <div>

                            <div className='msg'>Hello</div>
                            <p className='msg-date'>12h ago</p>
                        </div>
                    </div>
                </div>
                <div className='chat-lower-footer'>
                    <input type="text" placeholder="Write a reply..." />
                    <div className='sticker-opt' style={{ zIndex: 999 }}>
                        <div className='sticker gif'><MdOutlineGif /></div>
                        <div><BsEmojiSmile size={20} /></div>
                        <div><AiOutlineLink size={20} /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EachChat