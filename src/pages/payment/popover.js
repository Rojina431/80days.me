import { Fragment } from 'react'

const PopoverButton = (props) => {
   return (
      <Fragment>
   {props.open && <div className="popover-cont">
    <p>{props.para1}</p>
    <p>{props.para2}</p>
    <p>{props.para3}</p>
    </div>}
    <div className="price-btn" 
    onMouseEnter={() => props.handleHover()}
    onMouseLeave={() => props.handleHoverOut()}
    onClick={() => props.handleCheck()}
    >
       {props.icon} 
       <span className="fonts-14 fontw-700">{props.text}</span>
       <img src={props.img} alt="img" height="14px" width="14px"/>
    </div>
    </Fragment>
   )
}

export default PopoverButton