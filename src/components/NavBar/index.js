import React from 'react'
import "./index.scss"
// import Resume from "./files/Edgar_Fernandez_Resume.pdf"
import {Link} from "react-scroll"


function index() {
  return (
<>
<nav>
  <div className='navbar'>
    <Link to="Home" smooth={true}>Home</Link>
    <Link to="Project" smooth={true} offset={-40}>Projects</Link>
    <Link to="AboutMe" smooth={true} offset={-45}>About me</Link>
    <Link to="Contact" smooth={true} offset={-45}>Contact</Link>
    <a href="https://docs.google.com/viewer?url=https://docs.google.com/document/d/19xC7HYZEElzM0A6s8sSvS-Jsh7W-QVyMCgmYzR9CjUc/export?format=pdf" target="_blank">Resume</a>
  </div>
</nav>
</>
 
  )
}

export default index

