import React, { useRef } from 'react'
import './app.scss'
import Navbar from './Components/Navbar/Navbar'
import Test from './Test'
import Hero from './Components/hero/Hero'
import Parallax from './Components/parallax/Parallax'
import Services from './Components/Services/Services'
import Portfolio from './Components/portfolio/Portfolio'
import Contact from './Components/contact/Contact'
import Cursor from './Components/Cursor/Cursor'

function App() {
  return (
    <div>
      {/* <Cursor/>   */}
    <section id="Homepage">
      <Navbar/>
      <Hero />
    </section>
    <section id="services">
      <Parallax type="services"/>
    </section>
    <section>
      <Services/>
      </section>
    <section id="portfolio">  
      <Parallax type="portfolio"/>
    </section>
    <Portfolio  />
    <section id='contact'>
      <Contact/>
      </section>   
    </div>
  )
}

export default App