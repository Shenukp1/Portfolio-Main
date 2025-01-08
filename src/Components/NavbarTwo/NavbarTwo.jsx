import React, { useState } from 'react';
import './NavbarTwo.css';
import { FaHome, FaUser, FaBriefcase, FaClipboardList, FaEnvelope } from 'react-icons/fa';

const NavbarTwo = () => {

    //state to allow the button to change how it looks when clicked
    const [active, setActive] = useState('#');

    //
    const tabs = [
        { id: '#', label: 'Home', icon: <FaHome /> },
        { id: '#about', label: 'About Me', icon: <FaUser /> },
        { id: '#experience', label: 'Experience', icon: <FaBriefcase /> },
        { id: '#project', label: 'Projects', icon: <FaClipboardList /> },
        { id: '#contact', label: 'Contact Info', icon: <FaEnvelope /> }
    ];

    return (
        <nav className="navbar">
        {tabs.map((tab) => (
            <a
            key={tab.id}
            href={tab.id}
            //when clicked, it set the active to the id of the button that was clicked ex.#about
            onClick={() => setActive(tab.id)}
            className={`nav-item ${active === tab.id ? 'active' : ''}`} //if active equals the button id, then apply active as a className -> a.active 
            >
            <span className="icon">{tab.icon}</span>
            {active === tab.id && <span className="label">{tab.label}</span>}
            </a>
        ))}
        </nav>
    );
};

export default NavbarTwo;