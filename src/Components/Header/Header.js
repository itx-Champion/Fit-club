import React, { useState } from 'react'
import './Header.css'
import logo from '../../assets/logo.png'
import bars from '../../assets/bars.png'
import { Link } from 'react-scroll'
const Header = () => {
  const mobile=window.innerWidth<=768?true:false
  const [menuOpened, setMenuOpened]=useState(false);
  return (
    <div className='header'>
      <img src={logo} alt="fit-club logo" className='logo'/>
      {
        (menuOpened===false && mobile===true)?(
          <div style={{backgroundColor:'var(--appColor)',padding:"0.5rem",borderRadius:"5px"}}
          onClick={()=>setMenuOpened(true)}
          ><img src={bars} alt="bar-img" style={{width:"1.rem",height:"1.5rem"}} /></div>
        ):(
          <ul className='header-menu'>
        <li><Link to="home" spy={true} smooth={true} onClick={()=>setMenuOpened(false)}>Home</Link></li>
        <li><Link to="program" spy={true} smooth={true} onClick={()=>setMenuOpened(false)}>Programs</Link></li>
        <li><Link to="reason" spy={true} smooth={true} onClick={()=>setMenuOpened(false)}>Why us</Link></li>
        <li><Link to="plan" spy={true} smooth={true} onClick={()=>setMenuOpened(false)}>Plans</Link></li>
        <li><Link to="testimonial" spy={true} smooth={true} onClick={()=>setMenuOpened(false)}>Testimonials</Link></li>
      </ul>
        )
      }
    </div>
  )
}

export default Header
