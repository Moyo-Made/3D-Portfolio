import React from 'react'
import "./services.css"
import {BiCheck} from "react-icons/bi"

const Services = () => {
  return (
    <section id='services'>
    <h5>What I Offer</h5>
    <h2>Services</h2>

    <div className='container services__container'>

      {/* Web development */}
      <article className='service'>
        <div className='service__head'>
          <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Build and host responsive websites and web apps.</p>
            </li>

            <li>
            <BiCheck className='service__list-icon'/>
            <p>Create well-designed landing pages.</p>
            </li>

            <li>
            <BiCheck className='service__list-icon'/>
            <p>Testing and fixing of bugs on websites.</p>
            </li>

            <li>
            <BiCheck className='service__list-icon'/>
            <p>Available for hiring, contracts and collaborations.</p>
            </li>
          </ul>
      </article>
    </div> 
  </section>
  )
}

export default Services