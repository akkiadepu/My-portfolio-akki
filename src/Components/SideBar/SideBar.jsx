import React, { useState } from 'react'

import "./Sidebar.scss"
import ToggleButton from './ToggleButton/ToggleButton'
import Links from './Links/Links'
import { motion, transform } from "framer-motion";

const variants ={
    open:{
        clipPath:"circle(1200px at 50px 50px )",
        transition:{
            type:"spring",
            stiffness:20,
            
        }
    },
    closed:{
        clipPath: "circle(30px at 50px 50px)",
        transition:{
            deply:0.5,
            type:"spring",
            stiffness:400,
            damping:40,
        }
    }
}

function SideBar() {
    const [open,setOpen] = useState(false);


    

    console.log("Sidebar is open:", open);
  return (
    <motion.div className='sidebar' animate={open ? "open" : "closed"} initial={false}>
        <motion.div className="bg" variants={variants}>
            <Links/>   
        </motion.div>  
        <ToggleButton setOpen={setOpen}/>  
    </motion.div>
  )
}

export default SideBar