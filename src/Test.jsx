import React, { useState } from 'react'
import { motion } from "framer-motion";


function Test() {

    const [open,setOpen] = useState(false);


    const variants = {
        visible:{opacity:1, x:100 , transition:{type:"spring", stiffness:100,damping:100}},
        hidden:{opacity:0},
        
    }

    const items = [
        "item1","item2","item3","item4" 
    ]

    
    return (
        <div className='course'>
            {/* <motion.div className="box" initial={{ opacity: 0.5, scale: 0.5 }} transition={{ duration: 2}}
            whileInView={{opacity:1 , scale: 2}}
            drag
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{duration:2}}
            animate={open ? "visible" : "hidden"}
            >

            <button onClick={()=>setOpen(prev=>!prev)}>Click</button>

            </motion.div> */}

                <motion.ul initial="hidden" animate="visible" variants={variants}>
                    {items.map(item=>(
                        <motion.li key={item}>
                            {item}
                        </motion.li>
                    ))}
                    
                </motion.ul>

        </div>
    )
}

export default Test