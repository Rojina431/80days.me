import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
import { Link } from "react-router-dom"

const BottomComponent = (props) => {

    console.log(props.toggleMap)
    return (
        <div className="bottom-container">
           <div className="bottom-text">
              <div>1 ADULT</div>
             {props.toggleMap ?  
              <div onClick={() => props.handleChange(false)} style={{cursor:"pointer"}}>Trip Details <IoIosArrowUp/></div> : 
              <div onClick={() => props.handleChange(true)} style={{cursor:"pointer"}}>Maps <IoIosArrowDown/></div>
             }
           </div>
           <Link to="/payment/">
                    <button className='btn-green'>14 101 ₽</button>
            </Link> 
        </div>
    )
}

export default BottomComponent