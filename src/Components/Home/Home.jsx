import React from 'react'
import './Home.css'
const Home = () => {
  return (
    <header id='home'>
      <div className="home_container">

        <h2>
          Hello, I’m 
        </h2>
        <h1>Shenuk Perera</h1>
        <h2>
          And I’m a <span className="highlight">Computer Science Student</span>
        </h2>

        <div className="cta">
          <a href="/path-to-your-resume.pdf" download className="btn">
            Download Resume
          </a>
          <a href="#contact" className="btn btn-primary">
            Contact Me
          </a>
        </div>

      </div>
      
      


    </header>
  
  )
}

export default Home