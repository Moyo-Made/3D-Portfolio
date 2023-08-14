import React from 'react'
import "./experience.css"
import {BsFillPatchCheckFill} from "react-icons/bs"

const Experience = () => {
  return (
    <section id='experience'>
    <h2>My Tech Skills</h2>

    <div className='container experience__container'>
      <div className='experience__frontend'>
      <h3>Software Development</h3>
        <div className='experience__content'>
          <article className='experience__details'>
          <BsFillPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>JavaScript</h4>
          </div>
          </article>

          <article className='experience__details'>
          <BsFillPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>TypeScript</h4>
          </div>
          </article>

          <article className='experience__details'>
          <BsFillPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>React</h4>
          </div>
          </article>

          <article className='experience__details'>
          <BsFillPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>HTML</h4>
          </div>
          </article>

          <article className='experience__details'>
          <BsFillPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>CSS</h4>
          </div>
          </article>
        </div>
      </div>
    </div>
    </section>
    
  )
}

export default Experience