import '../assets/styles/tooltip.css'

const TooltipComponent  = (props) => {
    return (
        <div className="tooltip-comp" style={{top:props.top, zIndex:2}}>
           <div>{props.para1}</div>
           <div>{props.para2}</div>
           <div>{props.para3}</div>
           <div>{props.para4}</div>
           <div>{props.para5}</div>
           <div>{props.para6}</div>
        </div>
    )
}

export default TooltipComponent