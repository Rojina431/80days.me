import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import '../assets/styles/loading.css'


//loading component appear while redirecting to map page
const LoadingComponent = (props) => {
    const fromSplit = props.from.value.split("(")
    const toSplit = props.to.value.split("(")
    return (
        <div className="loading-page">
            <div className="load-comp">
                <div className="load-header">
                    eightydays.me
                </div>
                {!props.isError ? 
                <div className="load-body loading">
                    <div className='middle'>
                        <div className='small'>{fromSplit[0]}</div>
                        <div className='small'>{toSplit[0]}</div>
                    </div>
                    <div className='middle'>
                        <div className='big'>{fromSplit[1].split(")")[0]}</div>
                        <div className='big'>{toSplit[1].split(")")[0]}</div>
                    </div>
                    <div className='middle'>
                        <div className='small'>{format(props.dates[0].startDate, "MMM dd")}</div>
                        <div className='small'>{format(props.dates[0].endDate, "MMM dd")}</div>
                    </div>
                    <div className='spin'>
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    </div>
                </div> : <div className="load-body error-text">
                    Unfortunately, we were not able to create a convenient tour for you according to the selected parameters
                </div>}
                <div className="progress" style={{ height: "2px" }}>
                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: `${props.value}`, margin: "0 5px" }} ariaValuenow={20} ariaValuemin={0} ariaValuemax={100}></div>
                </div>
                <div className="load-footer">
                    {!props.isError ? <Link to="/" style={{ textDecoration: "none" }}><div className='black-text'>Cancel</div></Link> :
                        <Link to="/" style={{ textDecoration: "none" }}><div className='black-text no-under'>Change Parameters</div></Link>}
                </div>
            </div>
        </div>
    )
}

export default LoadingComponent