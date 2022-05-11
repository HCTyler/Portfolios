import React from 'react'
import "./index.scss"
import Links from './Links'
import Skills from './Skills'
import About from './About'

function index() {
  return (
    <div id="Contact">
      <About/>
      <section class="contact">
        <Links />
        <Skills />
      </section>
    </div>
  )
}

export default index