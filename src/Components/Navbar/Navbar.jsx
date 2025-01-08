import React, { useState } from 'react'


/*
  These are icons that can be used and also found here: https://react-icons.github.io/react-icons/
*/

import './Navbar.css'

const Navbar = () => {

    const [active, setActive] = useState('#')

  return (
    /*TODO: instead of ancors we make them words*/
    <nav>
        <a href='#'
        onClick={()=> setActive('#')}
        /*when active is #, then className= active, else className will be nothing*/
        className={active === '#' ? 'active' : ''} 
        >
          Home
        </a>

        <a href='#about'
        onClick={()=> setActive('#about')}
        /*when active is #, then className= active, else className will be nothing*/
        className={active === '#about' ? 'active' : ''} 
        >
          About Me
        </a>


        <a href='#experience'
        onClick={()=> setActive('#experience')}
        /*when active is #, then className= active, else className will be nothing*/
        className={active === '#experience' ? 'active' : ''} 
        >
          Experience
        </a>

        <a href='#project'
        onClick={()=> setActive('#project')}
        /*when active is #, then className= active, else className will be nothing*/
        className={active === '#project' ? 'active' : ''} 
        >
          Projects
        </a>

        <a href='#contact'
        onClick={()=> setActive('#contact')}
        /*when active is #, then className= active, else className will be nothing*/
        className={active === '#contact' ? 'active' : ''} 
        >
          Contact Info
        </a>
    </nav>
  )
}

export default Navbar