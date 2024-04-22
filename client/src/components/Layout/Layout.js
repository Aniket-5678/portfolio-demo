import React, { useState } from 'react'
import { RxDoubleArrowLeft,  RxDoubleArrowRight } from "react-icons/rx";
import "../style/style.css"
import Menus from '../menus/Menus';

const Layout = () => {

const [toggle ,setToggle] = useState(true)

 const handleToggle = () => {
  setToggle(!toggle)
 }

  return (
    <div className='Layout-container'>
      <div className='sidebar-section'>
      <div className={toggle ? "sidebar-toggle sidebar-main"  : 'sidebar-main'} >
            <div className='sidebar-icons' onClick={handleToggle}>

             

              {
                toggle ? (<>
                 <RxDoubleArrowLeft   size={30} />
                </>) : (<>
                   <RxDoubleArrowRight  size={30} />
                </>)
              }
             
              
            </div>
            <Menus toggle={toggle}/>
        </div>
     
      </div>
     
       
    </div>
  )
}

export default Layout