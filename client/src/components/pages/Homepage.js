import React from 'react'
import Typewriter from 'typewriter-effect';
import Resume from "../../image/Aniket_resume.pdf"
import {useTheme} from "../../context/ThemeContext"
import { FaRegLightbulb } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import Fade from 'react-reveal/Fade'

const Homepage = () => {

  const [theme, setTheme] = useTheme()

  const handleTheme = () => {
    setTheme((prevState) => (prevState === 'light' ? 'dark' : 'light'))
  }

  return (
    <div className='container-fluid home-container' id='home'>
  <div className='btn-mode' onClick={handleTheme}>
    {theme === "light" ? (<FaRegLightbulb  color='white' size={50}/>) : (<FaLightbulb color='black' size={50}/>)}
  </div>

      <div className=' home-content'>
        <Fade right>
      <h1> Hi 👋I'm</h1>
         <h2>
        
         <Typewriter 

           options={{
            strings: ['Full stack Developer !', 'Mern stack Developer !'],
            autoStart: true,
            loop: true,
          }}
         
         />
         </h2>
         </Fade>
         <Fade bottom>
         <div className='home-button'>
          <a className='btn btn-hire' href='https://api.whatsapp.com/send?phone=8830730929' rel='noreferrer' target='blank'>Hire me</a>
          <a href={Resume} className='btn btn-resume' > My Resume</a>
         </div>
         </Fade>
      </div>
    </div>
  )
}

export default Homepage