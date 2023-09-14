import React from 'react'
import "./header.css"
import CTA from './CTA'
import ME from '../../images/me.JPG'
import HeaderSocials from './HeaderSocials'
import {motion} from 'framer-motion'



const Header = () => (
  <section id='header'>
  <header>
  
    <div className="container header_container ">
      <h3>Hello I'm</h3>
      <motion.h1 
      animate={{rotate: 360}}

      >Moyomade</motion.h1>
      <h3>Software Developer</h3>
      <CTA />
      <HeaderSocials />
      
      <div className='me'>
      <img src={ME} alt='me' />
      </div>
      <a href="#contact" className='scroll_down'>Scroll Down</a>
    </div>
  </header>
  </section>
)

export default Header;