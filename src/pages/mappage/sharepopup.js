import { useState } from 'react'


//popup to be appeared when share of navbar clicked
const SharepopupComponent = () => {

    const [isCopied, setIsCopied] = useState(false)

    return (
        <div className="modal fade" id="shareModal" tabIndex="-1" aria-labelledby="shareLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-body content">
         <div className="head-text">Share Your Adventure</div>
         <div className="text-btn">https://app.eightydays.me/magic/SVQPqeGo79Kbbfp36Wa5HQYfiVZvMDsgTihGjX6aAYtgV/5</div>
         {!isCopied ? <div className="copy-btn"><div className="btn-green fonts-16 fontw-300 btn-copy" 
         style={{height:"30px", borderRadius:"10px", width:"70%"}} onClick={() => setIsCopied(true)}>Copy</div></div> : 
         <div className="fonts-14 fontw-500" onClick={() => setIsCopied(false)}>Copied</div>}
      </div>
    </div>
  </div>
</div>
    )
}

export default SharepopupComponent