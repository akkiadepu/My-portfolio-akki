import React from 'react'

import './Hero.scss'
import { animate, delay } from 'framer-motion'
import { motion, transform } from "framer-motion";
import Portfolio from '../portfolio/Portfolio';

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    },

    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity
        }
    }
}

const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",

        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,

        }
    },


}

function Hero() {

    const handleScroll = () => {
        const portfolioSection = document.getElementById('portfolio-section');
        if (portfolioSection) {
            portfolioSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleContactScroll = () => {
        const contactSection = document.getElementById('contact-section');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='hero' id='homepage'>
            <div className="wrapper">

                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}>Akhila Adepu </motion.h2>
                    <motion.h1 variants={textVariants}>Java Developer and Full stack Developer</motion.h1>
                    <motion.div variants={textVariants} className="buttons">

                        <motion.button
                            variants={textVariants}
                            className='heroButton'
                            onClick={handleScroll}
                        > see the latest works </motion.button>
                        <motion.button 
                        variants={textVariants} 
                        className='heroButton'
                        onClick={handleContactScroll}
                        > Contact Me</motion.button>
                    </motion.div>
                    <motion.img variants={textVariants} animate="scrollButton" src='/scroll.png' alt='' />
                </motion.div>
            </div>

            <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
                Writer Content Creator Influencer
                sdf
            </motion.div>

            <div className="imageContainer">
                <img src='./akhila1.png' alt='akhila1' />
            </div>


        </div>

    )
}

export default Hero