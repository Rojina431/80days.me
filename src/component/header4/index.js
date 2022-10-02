import { useState, Fragment, useEffect } from 'react'
import { TbWorld } from 'react-icons/tb'
import { IoIosArrowDown } from 'react-icons/io'
import { GiHamburgerMenu } from 'react-icons/gi'
import { CgHome } from 'react-icons/cg'
import { ImCross } from 'react-icons/im'
import '../../assets/styles/common.css'
import '../../assets/styles/navbar.css'
import useWindowsDimensions from '../windowdimension'
import { Link } from 'react-router-dom'
import LeftLogComp from '../leftlogo'

const HeaderMap = (props) => {

  const [isLogged, setIsLogged] = useState(false) 
  const [isClicked, setisClicked] = useState(false)

  const {width, height} = useWindowsDimensions()

  useEffect(() => {
    if(width > 728) {
        setisClicked(false)
    }
  }, [width])

  return (
    <Fragment>
    <div className="map navbar navbar-fixed">
      <div className="left-logo no-underline">
      <div className='toggle-home'>
      <Link to="/" className=" each-links">
        <CgHome className='black-text' size={30}/>
      </Link>
      </div>
        <LeftLogComp/>
      </div>
      <div className='mid-right'>
      <div className='mid-links'>
        {props.shuffleCity.map((city, i) => {
          return <div key={i} className='route-type' style={{borderBottom: `${props.cityNo === city ? "2px solid black" : "0px"} `}}
           onClick={() => props.handleChange(city)}>{city} <span className='route-city'>Cities</span></div>
        })}
      </div>
      <div className="right-links">
        <div className='global-logo lineh-78'>
          <TbWorld size={20} className='fontw-300' />{'  '}<IoIosArrowDown size={15} className='fontw-600' />
        </div>
        <div className='no-underline each-links lineh-78'>
          <a href="#" className=' fonts-14 fontw-500 lineh-34 black-text each-links-text'>Shuffle</a>
        </div>
        <div className='no-underline each-links lineh-78'>
           <a href="#" className=' fonts-14 fontw-500 lineh-34 black-text each-links-text'>Save</a>
        </div>
        <div className='no-underline each-links lineh-78' data-bs-toggle="modal" data-bs-target="#shareModal">
           <span style={{cursor:"pointer"}} className=' fonts-14 fontw-500 lineh-34 black-text each-links-text'>Share</span>
        </div>
        {!isLogged ? <div className='fonts-14 fontw-500 lineh-78 black-text each-links each-links-text'>
          <span className='each-links-text'>Log In</span>
        </div> :
        <div className='circle each-links lineh-78 fontw-500' style={{backgroundColor:"rgb(128, 76, 180)"}}>
          <span>N</span>
        </div>}
      </div>
      {!isClicked ? <div className='toggle-icon' onClick={() => setisClicked(true)}>
         <GiHamburgerMenu size={30}/>
      </div> : <div className='toggle-icon' onClick={() => setisClicked(false)}>
         <ImCross size={20}/>
      </div>}
      </div>
    </div>
    {isClicked && <div className="right-links" style={{
        position:"static",
        zIndex:"2", paddingTop:"10px", 
        width:"100vw", 
        display:"block", height:"100vh", 
        backgroundColor:"white"}}>
        <div className='global-logo lineh-78' style={{marginLeft:"20px"}}>
          <TbWorld size={20} className='fontw-300' />{'  '}<IoIosArrowDown size={15} className='fontw-600' />
        </div>
        <div className='no-underline each-links lineh-78'>
          <a href="#" className=' fonts-14 fontw-500 lineh-34 black-text e'>Shuffle</a>
        </div>
        <div className='no-underline each-links lineh-78'>
           <a href="#" className=' fonts-14 fontw-500 lineh-34 black-text '>Save</a>
        </div>
        <div className='no-underline each-links lineh-78'>
           <a href="#" className=' fonts-14 fontw-500 lineh-34 black-text'>Share</a>
        </div>
        {!isLogged ? <div className='fonts-14 fontw-500 lineh-78 black-text each-links'>
          <span>Log In</span>
        </div> :
        <div className='circle each-links lineh-78 fontw-500' style={{backgroundColor:"rgb(128, 76, 180)"}}>
          <span>N</span>
        </div>}
      </div>}
      </Fragment>
  )
}

export default HeaderMap