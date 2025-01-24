import React, { useRef } from 'react'

import "./Services.scss";
import { animate, motion, useInView } from "framer-motion";

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    }

}

function Services() {

    const ref = useRef();

    const isInView = useInView(ref, { margin: "-100px" });


    return (
        <motion.div className='services' variants={variants} initial="initial"
            // whileInView="animate"
            ref={ref}
            // isInView &&
            animate={"animate"}
            id="service"
        >
            <motion.div className="textContainer" variants={variants}>
                <p>  I am a passionate Java Full Stack Developer dedicated to building scalable and efficient applications.<br />I thrive on solving challenges and delivering impactful solutions.</p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src='./people.webp' alt='' />
                    <h1>
                        <motion.b whileHover={{ color: "orange" }}> Unique</motion.b> Ideas

                    </h1>
                </div>
                <div className="title">
                    {/* <img src='./people.webp' alt='' /> */}
                    <h1><motion.b whileHover={{ color: "orange" }}> Empowering</motion.b> Your Business.</h1>
                    <button>WHAT WE DO?</button>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" >
                    <h2>Backend Development</h2>
                    <p>
                        Skilled in building secure and scalable backends with Java, Spring Boot, and RESTful APIs,
                        ensuring efficient data management and seamless integration with frontends.
                    </p>
                    <button onClick={() => window.open('https://github.com/akkiadepu?tab=repositories', '_blank')}>GO</button>
                </motion.div>
                <motion.div className="box"
                // whileHover={{ background: "lightgray", color: "black" }}
                >
                    <h2>Frontend Development</h2>
                    <p>
                        Proficient in creating responsive and user-friendly web interfaces using React.
                        My designs focus on enhancing user experiences and ensuring mobile responsiveness.
                    </p>
                    <button onClick={() => window.open('https://github.com/akkiadepu?tab=repositories', '_blank')}>GO</button>
                </motion.div>
                <motion.div className="box"
                // whileHover={{ background: "lightgray", color: "black" }}
                >
                    <h2>Database Management</h2>
                    <p>
                        Experience in designing and managing databases using MySQL ensuring
                        data consistency and optimizing query performance for high-traffic applications.
                    </p>
                    <button onClick={() => window.open('https://github.com/akkiadepu?tab=repositories', '_blank')}>GO</button>
                </motion.div>
                {/* <motion.div className="box" 
                // whileHover={{ background: "lightgray", color: "black" }}
                >
                    <h2>Branding</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id debitis quo, distinctio dolores, magni architecto vitae aliquid necessitatibus aut alias, quisquam quos accusantium doloribus excepturi nisi reiciendis voluptatum deserunt veniam!
                    </p>
                    <button onClick={() => window.open('https://facebook.com', '_blank')}>GO</button>
                </motion.div> */}

            </motion.div>
        </motion.div>
    )
}

export default Services