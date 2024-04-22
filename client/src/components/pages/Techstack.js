import React from 'react'
import "../style/style.css"
import { TechList } from '../utils/TechList';
import RubberBand from "react-reveal/RubberBand"
import Fade from 'react-reveal/Fade'

const Techstack = () => {
  return (
    <div> 
     
        <div className='tech-main' id='tech'>
        <RubberBand>
            <h2 className='tech-text'>Technologies stack</h2>
            <p >👉 including programming Languages , frameworks, database, front-end and back-end tools and APIs</p>
            </RubberBand>
            <div className='tech-icons'>
                {TechList.map((t) => (
                  <Fade left>
                  <div className='tech-content' key={t.id}>
                    <h2>{t.name}</h2>
                    <h1>{t.icons}</h1>
                     
                  </div>
                  </Fade>
                ))}
            </div> 
        </div>
    </div>
  )
}

export default Techstack