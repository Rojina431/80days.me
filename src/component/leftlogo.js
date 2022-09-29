import { Link } from "react-router-dom"

const LeftLogComp = () => {
    return (
        <Link to="/" className=" each-links">
        <div className='nav-brand'>
          <div>
            <img src="https://app.eightydays.me/static/media/logo-path.468963eb.svg" alt="logo" />
          </div>
          <span className='fonts-20 fontw-500 letterspace-47 black-text nav-text'>80days.me</span>

        </div>
      </Link>
    )
}

export default LeftLogComp