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
          <h2>Contact</h2>
        <main>
          <Links />
          <Skills />
        </main>
      </section>
    </div>
  )
}

export default index