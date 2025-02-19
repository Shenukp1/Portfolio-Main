import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
        <a href='#home' className='footer_logo'>Shenuk</a>
        <ul>
          <li><a href='#home'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#skills'>Skills</a></li>
          <li><a href='#projects'>Projects</a></li>
        </ul>

        <div className="footer_social">
          <a href='www.linkedin.com/in/shenuk-perera'><BsLinkedin/></a>
          <a href='https://github.com/Shenukp1'><BsGithub/></a>
          
        </div>

        <div className="footer_copyright">
          <small>&copy; Shenuk Perera. All Rights Reserved.</small>
        </div>



    </footer>
  )
}

export default Footer