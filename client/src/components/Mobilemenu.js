import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import "./style/style.css"
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { FcBiotech } from "react-icons/fc";
import { FcReading } from "react-icons/fc";
import { FcVideoProjector } from "react-icons/fc";
import { FcBusinessContact } from "react-icons/fc";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { AiOutlineMenuFold } from "react-icons/ai";



const Mobilemenu = () => {

const [open ,setOpen] = useState(false)

const handleMenu  = () => {
  setOpen(!open)
}

const handleMenuClick = () => {
  setOpen(false)
}

  return (
    <div className='mobilemenu-container'>
        <div className='mobile-header'>
          {open ? (<AiOutlineMenuFold className='mobilemenu-icon' onClick={handleMenu} />) : ( <GiHamburgerMenu className='mobilemenu-icon' onClick={handleMenu}/>)}
           <span className='portfolio-span'>My portfolio App</span>
        </div>
        <div>
       {open && (
         <div className="nav-link-main">
            
         <Link to="home" spy={true} smooth={true} offset={-100} duration={100}  onClick={handleMenuClick}>
             <div className="nav-icons" >
              
                 <p><FaHome /></p>
                   <p>Home</p>
               
                 
             </div>
             </Link>
             <Link to="about" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick} >
             <div className="nav-icons" >
               
                <p><FcAbout/> </p>
                   <p>About</p>
               
                 
             </div>
             </Link>
 
             <Link to="education" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick} >
             <div className="nav-icons">
                  <p><FcReading /></p>
                   <p>Education</p>
             </div>
             </Link>
           
           <Link to="tech" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick} >
             <div className="nav-icons">
                  <p><FcBiotech /></p>
                   <p>Tech stack</p>
             </div>
             </Link>
           
           <Link to="projects" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick} >
             <div className="nav-icons">
                  <p><FcVideoProjector /></p>
                   <p>projects</p>
             </div>
             </Link>
             
             <Link to="contact" spy={true} smooth={true} offset={-100} duration={100}  onClick={handleMenuClick}>
             <div className="nav-icons">
                  <p><FcBusinessContact /></p>
                   <p>contact</p>
             </div>
             </Link>
         </div>
       )}
        </div>
    </div>
  )
}

export default Mobilemenu