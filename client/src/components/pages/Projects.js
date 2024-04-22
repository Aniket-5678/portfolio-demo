import React from 'react'
import "../style/style.css"
import Spin from "react-reveal/Spin"




const Projects = () => {
  return (
    <div className='projects-container' id='projects'>
        <div className='projects-main'>
             <h3>Top Recent Projects</h3>
             <h4>here are my 3 projects with live Link and source code</h4>
             <p>Developed a full-stack e-commerce application using the MERN stack (MongoDB, Express.js, React.js,Node.js)
Implemented features such as user authentication, product listing, shopping cart functionality, and
payment integration.
Utilized React.js for the frontend, Node.js with Express.js for the backend, and MongoDB for the
database</p>
        </div>
        <div className='projects-all'>
          <Spin>
        <div className='projects-list'>
           <div>
            <h3>ecommerce project</h3> 
             <img className='projects-thumbnail' src='https://i.ytimg.com/vi/tvdFYmJEaw4/maxresdefault.jpg'alt='ecommerce website' />
            
           </div>
           <div className='projects-language'>
           <p>Node js</p>
            <p>Express js</p>
            <p>React js</p>
            <p>MongoDB</p>
           </div>
            <div className='project-view'>
              <a className='btn-view' href='https://mons-ecommerce.onrender.com' target='blank'>view</a>
            </div>
        </div>
        <div className='projects-list'>
           <div>
            <h3>ecommerce project</h3> 
             <img className='projects-thumbnail' src='https://i.ytimg.com/vi/zRIGr7GfH58/maxresdefault.jpg' alt='amzone' />
            
           </div>
           <div className='projects-language'>
            <p>Node js</p>
            <p>Express js</p>
            <p>React js</p>
            <p>MongoDB</p>
           </div>
            <div className='project-view'>
              <a className='btn-view' href='https://ecommerce-z0rt.onrender.com' target='blank'>view</a>
            </div>
        </div>
        <div className='projects-list'>
           <div>
            <h3>ecommerce project</h3> 
             <img className='projects-thumbnail' src='https://i.ytimg.com/vi/A_-fn_ij59c/sddefault.jpg' alt='ecommerce website' />
            
           </div>
           <div className='projects-language'>
           <p>Node js</p>
            <p>Express js</p>
            <p>React js</p>
            <p>MongoDB</p>
           </div>
            <div className='project-view'>
              <a className='btn-view' href='https://aniket-ecom.onrender.com' target='blank'>view</a>
            </div>
            
        </div>
        </Spin>
        </div>
    </div>
  )
}

export default Projects