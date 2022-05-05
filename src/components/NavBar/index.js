import React from 'react'
import "./index.scss"
import Resume from "./files/Edgar_Fernandez_Resume.pdf"
import {Link} from "react-scroll"


function index() {
  return (
<>
<nav>
  <div className='navbar'>
    <Link to="Home" smooth={true}>Home</Link>
    <Link to="Project" smooth={true} offset={-40}>Projects</Link>
    <Link to="AboutMe" smooth={true} offset={-700}>About me</Link>
    <Link to="Contact" smooth={true} offset={-45}>Contact</Link>
    <a href={Resume} target="_blank">Resume</a>
  </div>
</nav>
</>
 
  )
}

export default index

