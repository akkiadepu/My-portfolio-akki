import { stagger } from 'framer-motion';
import React from 'react'
import { motion, transform } from "framer-motion";
import { Link } from 'react-scroll';

const variants = {
  open:{
    transition:{
      staggerChildren:0.1,
    }
  },

  closed:{
    transition:{
      staggerChildren:0.05,
      staggerDirection: -1,
    }
  }
 }

 const itemVariants = {
  open:{
    y:0,
    opacity:1,
  },

  closed:{
    y:50,
    opacity:0,
  }
 }

function Links() {

  const items = [ "Homepage","Service","Portfolio","Contact"];

  return (
    <motion.div className='links' variants={variants}>
      {items.map(item=>(
      <motion.div href={`#${item}`} key={item} variants={itemVariants} whileHover={{scale:1.1}} whileTap={{scale:0.95}}
      >
        <Link
            to={item.toLowerCase()}  // This matches the section id, like "service"
            smooth={true}             // Enable smooth scrolling
            duration={500}            // Scroll duration
            offset={-70}              // Optional offset to adjust the scroll position (e.g., for fixed navbar)
          >
            {item}
          </Link>
        </motion.div>
    ))}</motion.div>
  )
}

export default Links