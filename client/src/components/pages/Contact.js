import React, { useState } from 'react'
import monsImage from "../../image/contact.jpg"
import "../style/style.css"
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import Rotate from "react-reveal/Rotate"
import LightSpeed from "react-reveal/LightSpeed"
import axios from "axios"
import toast from "react-hot-toast"

const Contact = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage ] = useState("")

 const handleSubmit = async(e) => {
  e.preventDefault()
  try {
     const  {data} = await  axios.post('api/v1/portfolio/sendEmail' , {name, email, message})
     if (data?.success) {
      toast.success(data?.message)
      setName("");
      setEmail("");
      setMessage("");
      console.log(data);
  }

  } catch (error) {
    console.log(error);
  }
 }


  return (
    <div className='contact-container' id='contact'>
        <div className='contact-thumbnail'>
          <LightSpeed>
             <img  className= "thumbnail-img"src={monsImage} alt='contact-thumbnail'  />
             </LightSpeed>
        </div>
        <Rotate>
        <div className='contact-input'>
      <div className='contact-icons'>
      <p className='con-icon-f'><FaFacebook/></p>
      <p className='con-icon-i'><FaInstagramSquare/></p>
      <a  href='https://github.com/Aniket-5678' target='blank'><p className='con-icon-g'><FaGithub/></p></a>
      <a href='https://www.linkedin.com/in/aniket-singh-b209792b8/' target='blank'><p className='con-icon-l'><FaLinkedin/></p></a>

      </div>
      <div className='input-container'>
      
      <div className='input-box'>
      <form onSubmit={handleSubmit}>
            <input className='input-text' type='text' placeholder='Enter your name' value={name} onChange={(e)=> setName(e.target.value)} />
            <input  className='input-text' type= 'email' placeholder='Enter your email' value={email} onChange={(e)=> setEmail(e.target.value)} />
            <textarea  className='input-textarea' type='text' placeholder='write a message' value={message} onChange={(e)=> setMessage(e.target.value)}   />
            <button  type='submit' className='contact-btn'>send a message</button>
            </form>
        </div>
        
      </div>
        
       
        </div>
        </Rotate>
    </div>
  )
}

export default Contact