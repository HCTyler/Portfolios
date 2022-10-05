import React from 'react'
import "./index.scss"
import Resume from "./files/Edgar_Fernandez_Resume.pdf"
import { Link } from "react-scroll"


function index() {
  return (
    <div className='navbar'>
      <h1>Edgar Fernandez</h1>
      <div className='hide'>
      <Link to="Home">
        <p>Home</p>
      </Link>
      <Link to="Project" >
        <p>Projects</p>
      </Link>
      <Link to="Contact">
        <p>Contact</p>
      </Link>
      <a href={Resume} target="_blank">
        <p>Resume</p>
      </a>
      </div>
    </div>
  )
}

export default index

