const PopoverButton = (props) => {
   return (
    <div className="price-btn" data-bs-toggle="tooltip" data-bs-html="true" 
    data-bs-title="<p>Personal item is free.</p>
    <p>Personal items include bag, camera</p>
    <p>It must not exceeds 40*40*40 size</p>"
    onClick={() => props.handleCheck()}
    >
       {props.icon} 
       <span className="fonts-14 fontw-700">{props.text}</span>
       <img src={props.img} alt="img" height="14px" width="14px"/>
    </div>
   )
}

export default PopoverButton