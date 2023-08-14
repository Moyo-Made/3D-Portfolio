import React from 'react'
import "./footer.css"
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {SiTwitter} from 'react-icons/si'

const Footer = () => {
  return (
    <footer>
      <h2><a href='#header'>MTB</a></h2>

      <ul className='permalinks'>
        <li><a href='#header'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://web.facebook.com/moyomade.adegbite.malz.10' target='_blank' rel='noreferrer'><BsFacebook /></a>
        <a href='https://instagram.com/made.techboy?igshid=YmMyMTA2M2Y=' target='_blank' rel='noreferrer'><BsInstagram /></a>
        <a href='https://twitter.com/Made_TechBoy' target='_blank' rel='noreferrer'><SiTwitter /></a>
        
      </div>

      <div className='footer__copyright'>
        <small>&copy; made_techboy. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer