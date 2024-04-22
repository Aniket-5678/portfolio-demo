import React from "react";
import "../style/style.css";
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { FcBiotech } from "react-icons/fc";
import { FcReading } from "react-icons/fc";
import { FcVideoProjector } from "react-icons/fc";
import { FcBusinessContact } from "react-icons/fc";
import monsimage from '../../../src/image/mons.jpeg'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade'


const Menus = ({ toggle }) => {
  return (
    <div>
      {toggle ? (
        <>
        <Zoom>
        <div className="profile-pic">
          <img
            className="profile-img"
            src={monsimage}
            alt="profile"
          />
        </div>
        </Zoom>
          
          <Fade left>
        <div className="nav-link-main">
            
        <Link to="home" spy={true} smooth={true} offset={-100} duration={100} >
            <div className="nav-icons">
             
                <p><FaHome /></p>
                  <p>Home</p>
              
                
            </div>
            </Link>
            <Link to="about" spy={true} smooth={true} offset={-100} duration={100} >
            <div className="nav-icons">
              
               <p><FcAbout/> </p>
                  <p>About</p>
              
                
            </div>
            </Link>

            <Link to="education" spy={true} smooth={true} offset={-100} duration={100} >
            <div className="nav-icons">
                 <p><FcReading /></p>
                  <p>Education</p>
            </div>
            </Link>
          
          <Link to="tech" spy={true} smooth={true} offset={-100} duration={100} >
            <div className="nav-icons">
                 <p><FcBiotech /></p>
                  <p>Tech stack</p>
            </div>
            </Link>
          
          <Link to="projects" spy={true} smooth={true} offset={-100} duration={100} >
            <div className="nav-icons">
                 <p><FcVideoProjector /></p>
                  <p>projects</p>
            </div>
            </Link>
            
            <Link to="contact" spy={true} smooth={true} offset={-100} duration={100} >
            <div className="nav-icons">
                 <p><FcBusinessContact /></p>
                  <p>contact</p>
            </div>
            </Link>
        </div>
        </Fade>
        </>
      ) : (
        <>
        <div>
        <div className="nav-link-main">
            
            <Link to="home" spy={true} smooth={true} offset={-100} duration={100} >
           
            <div className="nav-icons">
                 <p><FaHome  /></p>
             
            </div>
            </Link>
           
           <Link to="about" spy={true} smooth={true} offset={-100} duration={100} >
            <div className="nav-icons">
                 <p><FcAbout/> </p>
                  
            </div>
            </Link>

            <Link to="education" spy={true} smooth={true} offset={-100} duration={100} >
            <div className="nav-icons">
                 <p><FcReading /></p>
                 
            </div>
            </Link>
           
           <Link to="tech" spy={true} smooth={true} offset={-100} duration={100} >
            <div className="nav-icons">
                 <p><FcBiotech /></p>
                  
            </div>
            </Link>
             
             <Link to="projects" spy={true} smooth={true} offset={-100} duration={100} >
            <div className="nav-icons">
                 <p><FcVideoProjector /></p>
            
            </div>
            </Link>

            <Link to="contact" spy={true} smooth={true} offset={-100} duration={100}>
            <div className="nav-icons">
                 <p><FcBusinessContact /></p>
                 
            </div>
            </Link>
        </div>
        </div>
        </>
      )
     
          }
      
    </div>
  );
};

export default Menus;
