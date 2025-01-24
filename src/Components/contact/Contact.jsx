import React, { useRef, useState } from 'react'
import './Contact.scss'
import { motion, animate, useInView } from 'framer-motion'
import { stagger } from 'framer-motion/dom'
import { unstable_renderSubtreeIntoContainer } from 'react-dom'
import emailjs from '@emailjs/browser';


const variants = {
    initial: {
        y: 500,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        },
    }
}

function Contact() {

    const ref = useRef()
    const isInView = useInView(ref, { margin: "-100px" })
    const formRef = useRef();

    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_q6bpll8', 'template_26n2a8r', formRef.current, 'sg5xpOVjbNjbThDqD')
            .then((result) => {
                console.log(result.text);
                setSuccess(true);

            }, (error) => {
                setError(true);
                console.log(error.text);
            });
    };

    return (
        <motion.div ref={ref} className='contact' variants={variants} initial="initial" whileInView="animate" id='contact-section'>
            <motion.div className="textContainer" variants={variants}>
                <motion.h1 variants={variants}>Let's work together</motion.h1>
                <motion.div className='item' variants={variants}>
                    <h2>Mail</h2>
                    <span>akhilaadepu16013@gmail.com</span>
                </motion.div>
                <motion.div className='item' variants={variants}>
                    <h2>Address</h2>
                    <span>RCM road, Vijayawada</span>
                </motion.div>
                {/* <motion.div className='item' variants={variants}>
                    <h2>Phone</h2>
                    <span>+91 123 568 85</span>
                </motion.div> */}
            </motion.div>
            <div className="formContainer">
                <motion.div className="phoneSVG" initial={{ opacity: 1 }}
                    whileInView={{ opacity: 0 }}
                    transition={{ delay: 2, duration: 1 }}>

                    {/* <svg width="450px" height="450px" viewBox="0 0 32.666 32.666" fill="none">
                        <motion.path
                            initial={{ pathLength: 0 }}
                            animate={isInView && { pathLength: 1 }}
                            transition={{ duration: 3 }}
                            strokeWidth={0.2} 
                            fill="none" 
                            d="M14.05 6C15.0268 6.19057 15.9244 6.66826 16.6281 7.37194C17.3318 8.07561 17.8095 8.97326 18 9.95M14.05 2C16.0793 2.22544 17.9716 3.13417 19.4163 4.57701C20.8609 6.01984 21.7721 7.91101 22 9.94M18.5 21C9.93959 21 3 14.0604 3 5.5C3 5.11378 3.01413 4.73086 3.04189 4.35173C3.07375 3.91662 3.08968 3.69907 3.2037 3.50103C3.29814 3.33701 3.4655 3.18146 3.63598 3.09925C3.84181 3 4.08188 3 4.56201 3H7.37932C7.78308 3 7.98496 3 8.15802 3.06645C8.31089 3.12515 8.44701 3.22049 8.55442 3.3441C8.67601 3.48403 8.745 3.67376 8.88299 4.05321L10.0491 7.26005C10.2096 7.70153 10.2899 7.92227 10.2763 8.1317C10.2643 8.31637 10.2012 8.49408 10.0942 8.64506C9.97286 8.81628 9.77145 8.93713 9.36863 9.17882L8 10C9.2019 12.6489 11.3501 14.7999 14 16L14.8212 14.6314C15.0629 14.2285 15.1837 14.0271 15.3549 13.9058C15.5059 13.7988 15.6836 13.7357 15.8683 13.7237C16.0777 13.7101 16.2985 13.7904 16.74 13.9509L19.9468 15.117C20.3262 15.255 20.516 15.324 20.6559 15.4456C20.7795 15.553 20.8749 15.6891 20.9335 15.842C21 16.015 21 16.2169 21 16.6207V19.438C21 19.9181 21 20.1582 20.9007 20.364C20.8185 20.5345 20.663 20.7019 20.499 20.7963C20.3009 20.9103 20.0834 20.9262 19.6483 20.9581C19.2691 20.9859 18.8862 21 18.5 21Z"   />
                    </svg> */}

                    <svg width="450px" height="450px" viewBox="0 0 32.666 32.666" fill="none">
                        {/* <title>phone-volume</title> */}
                        <motion.path
                            initial={{ pathLength: 0 }}
                            animate={isInView && { pathLength: 1 }}
                            transition={{ duration: 10 }}
                            strokeWidth={0.2}
                            fill="none"
                            d="M19.373 11.831c-0.138-0.154-0.337-0.25-0.559-0.25-0.414 0-0.75 0.336-0.75 0.75 0 0.195 0.074 0.373 0.197 0.506l-0-0.001c0.819 0.92 1.32 2.139 1.32 3.476 0 1.602-0.719 3.035-1.852 3.996l-0.008 0.006c-0.136 0.136-0.22 0.324-0.22 0.531 0 0.415 0.336 0.751 0.751 0.751 0.207 0 0.395-0.084 0.531-0.22v0c1.396-1.251 2.27-3.060 2.27-5.072 0-1.717-0.636-3.285-1.685-4.481l0.007 0.008zM22.428 8.776c-0.138-0.152-0.336-0.247-0.557-0.247-0.414 0-0.75 0.336-0.75 0.75 0 0.194 0.073 0.37 0.194 0.503l-0.001-0.001c1.445 1.629 2.328 3.786 2.328 6.149 0 2.819-1.256 5.345-3.24 7.047l-0.012 0.010c-0.136 0.136-0.22 0.324-0.22 0.531 0 0.415 0.336 0.751 0.751 0.751 0.207 0 0.395-0.084 0.531-0.22v0c2.244-2.002 3.65-4.901 3.65-8.129 0-2.741-1.014-5.245-2.686-7.158l0.011 0.013zM25.273 5.524c-0.137-0.146-0.331-0.236-0.546-0.236-0.414 0-0.75 0.336-0.75 0.75 0 0.198 0.077 0.378 0.202 0.512l-0-0c2.215 2.36 3.575 5.544 3.575 9.046 0 3.986-1.763 7.561-4.551 9.986l-0.016 0.014c-0.136 0.136-0.22 0.324-0.22 0.531 0 0.415 0.336 0.751 0.751 0.751 0.207 0 0.395-0.084 0.531-0.22v0c10.635-10.637 1.121-21.030 1.023-21.134zM12.378 11.725c0 0 0 0 0 0 0.248 0 0.469-0.121 0.605-0.307l0.001-0.002 4.282-5.897c0.090-0.122 0.143-0.275 0.143-0.44 0-0.064-0.008-0.127-0.023-0.187l0.001 0.005c-0.141-0.532-0.367-0.997-0.664-1.407l0.008 0.012c-0.178-0.272-0.374-0.509-0.593-0.723l-0.001-0.001-0.004-0.004c-0.952-0.94-2.261-1.52-3.706-1.52-1.446 0-2.757 0.582-3.71 1.524l0-0c-3.379 3.386-5.468 8.060-5.468 13.222s2.089 9.836 5.469 13.222l-0-0c0.943 0.942 2.245 1.525 3.683 1.525 0.006 0 0.012 0 0.018-0h-0.001c0.003 0 0.007 0 0.010 0 1.445 0 2.754-0.581 3.706-1.522l-0.001 0c0.211-0.203 0.399-0.427 0.56-0.671l0.009-0.015c0.301-0.408 0.536-0.886 0.676-1.404l0.007-0.030c0.014-0.055 0.022-0.117 0.022-0.182 0-0.166-0.054-0.319-0.145-0.443l0.001 0.002-4.282-5.899c-0.138-0.188-0.358-0.309-0.606-0.309v0c-0.798 0.001-1.553 0.187-2.224 0.517l0.030-0.013c-0.599-1.412-0.948-3.055-0.948-4.779s0.348-3.367 0.979-4.862l-0.031 0.082c0.641 0.317 1.396 0.502 2.194 0.504h0.001zM9.652 9.428c-0.216 0.057-0.39 0.202-0.485 0.393l-0.002 0.004c-0.902 1.802-1.43 3.927-1.43 6.174s0.528 4.372 1.467 6.256l-0.037-0.081c0.097 0.195 0.271 0.34 0.481 0.397l0.005 0.001c0.055 0.014 0.118 0.022 0.183 0.022 0.162 0 0.313-0.050 0.438-0.135l-0.003 0.002c0.489-0.351 1.081-0.589 1.723-0.664l0.017-0.002 3.818 5.26c-0.108 0.249-0.232 0.464-0.377 0.662l0.007-0.009c-0.113 0.17-0.237 0.317-0.375 0.45l-0.001 0.001c-0.681 0.674-1.618 1.091-2.652 1.091s-1.969-0.416-2.65-1.089l0 0c-3.108-3.114-5.030-7.413-5.030-12.161s1.922-9.047 5.030-12.161l-0 0c0.673-0.671 1.601-1.086 2.626-1.086 0.005 0 0.010 0 0.014 0h-0.001c0.002 0 0.004 0 0.006 0 1.034 0 1.972 0.415 2.655 1.088l-0-0c0.15 0.146 0.284 0.308 0.399 0.483l0.007 0.011c0.129 0.177 0.244 0.378 0.335 0.592l0.008 0.020-3.818 5.259c-0.659-0.076-1.251-0.315-1.75-0.674l0.011 0.008c-0.12-0.085-0.268-0.136-0.429-0.136-0.067 0-0.132 0.009-0.194 0.025l0.005-0.001z" />
                    </svg>


                </motion.div>
                <motion.form
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 3, duration: 1 }}
                    onSubmit={sendEmail}
                    ref={formRef}
                >

                    <input type='text' placeholder='Name' name='name' required />
                    <input type='email' placeholder='email' name='email' required />
                    <textarea name='message' id='' cols={8} placeholder='Messages' ></textarea>
                    <button>Submit</button>
                    {error && "Error"}
                    {success && "Success"}
                </motion.form>
            </div>
        </motion.div>
    )
}

export default Contact