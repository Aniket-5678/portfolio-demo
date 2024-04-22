import React from 'react'
import "../style/style.css"
import monsImage from '../../../src/image/mons.jpeg'
import Jump from "react-reveal/Jump"

const About = () => {
  return (
    <Jump>
    <div className='About-container' id= 'about'>
      
        <div className='About-main'>
            <img className='profile' src={monsImage} alt='profile' />
        </div>
        <div className='About-content'>
        <h3>About me</h3>
            <p className='content'>
            As a MERN stack developer, I specialize in building robust and scalable web applications using cutting-edge technologies. With expertise in MongoDB, Express.js, React.js, and Node.js, I craft seamless user experiences that drive innovation. Passionate about solving complex challenges and delivering high-quality solutions, I thrive in collaborative environments to bring ideas to life.
             </p>
        </div>
        </div>
        </Jump>
  )
}

export default About