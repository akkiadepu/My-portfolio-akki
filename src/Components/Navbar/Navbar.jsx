import React from 'react'
import "./Navbar.scss"
import { motion } from "framer-motion";
import SideBar from '../SideBar/SideBar';

function Navbar() {
  const handleEmailClick = (e) => {
    e.preventDefault(); // Prevent the default mailto behavior
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='navbar'>
      {/* Side bar */}
      <SideBar />
      <div className="wrapper">
        <motion.span inital={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Akhila Adepu
        </motion.span>
        <div className="social">
          <a href='https://github.com/akkiadepu' target='_blank' rel="noopener noreferrer">
            <img src='https://cdn.icon-icons.com/icons2/1907/PNG/512/iconfinder-github-4555889_121361.png' alt='' />
          </a>
          <a href='https://www.linkedin.com/in/akhila-adepu-8b433120a/' target='_blank' rel="noopener noreferrer">
            <img src='./linkedin1.png' alt='' />
          </a>
          <a href="#contact-section" onClick={handleEmailClick}>
            <img src="https://www.freepnglogos.com/uploads/logo-gmail-png/logo-gmail-png-gmail-icon-download-png-and-vector-1.png" alt="Gmail" />
          </a>
          <a href='https://www.facebook.com/' target='_blank' rel="noopener noreferrer">
            <img src='/facebook.png' alt='' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar;