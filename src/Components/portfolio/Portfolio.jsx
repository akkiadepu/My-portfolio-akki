import React, { useRef } from 'react'
import './Portfolio.scss'
import { animate, motion, useInView, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
    {
        id:1,
        title:"SN repair Application",
        img:"./SN.png",
        desc:"View and manage repair services efficiently. Users can explore various services and request repairs with ease.",
        link:"https://sn-repair-frothend-react.vercel.app/",

    },
    {
        id:2,
        title:"Doctor Application",
        img:"./Doctor.png",
        desc:"Create and manage doctors and patients effortlessly. Assign doctors to patients for seamless medical assistance.",
        link:"https://doctor-project-final-fontend.vercel.app/",
    },
    {
        id:3,
        title:"Quiz Application",
        img:"./quiz.png",
        desc:"Play a fun quiz with 10 engaging questions. Test your knowledge and enjoy a great learning experience.",
        link:"https://quiz-app-one-xi.vercel.app/"
    },
  

];

const Single = ({item})=>{
    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target:ref,
        // offset:["start start","end start"]
        
    });

    const y = useTransform(scrollYProgress,[0,1], [-300,300]);

    return(
        <section >
            <div className="containter">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                    <img src={item.img} alt=''/>
                    </div>
               
                <motion.div className="textContainer1" 
                style={{y}}
                >
                    <h2 className='h'>{item.title}</h2>
                    <p className='p1'>{item.desc}</p>
                    <button className='button1' onClick={() => window.open(item.link, "_blank")} >See Demo</button>
                </motion.div>
                </div>
            </div>
        </section>
    )
} 

function Portfolio() {

    
    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target:ref,offset:["end end","start start"]
    });

    const scaleX  = useSpring(scrollYProgress,{
        stiffness:100,
        damping:30,

    })

  return (
    <div className='portfolio' ref={ref} id="portfolio-section" >
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        </div>
        {items.map(item=>(
            <Single item={item} key={item.id}/>
        ))}

    </div>
  )
}

export default Portfolio