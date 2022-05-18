import React from 'react'
import "./index.scss"
import Skills from './Skills'
import About from './About'

function index() {
  return (
    <div id="Information">
      <About/>
      <Skills />
    </div>
  )
}

export default index