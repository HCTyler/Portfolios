import React from 'react'
import "./index.scss"
import Resume from "./files/Edgar_Fernandez_Resume.pdf"
import {Link} from "react-scroll"
import {faHome,faUser,faArrowUpRightFromSquare,faFilePdf} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons"


function index() {
  return (
<>
<nav>
  <div className='navbar'>
    <Link to="Home" smooth={true}>
        <text>Home</text>
        <FontAwesomeIcon icon={faHome} size="xl"/>
    </Link>
    <Link to="Project" smooth={true} >
        <text>Projects</text>
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xl"/>
    </Link>
    <Link to="Contact" smooth={true} >
        <text>About</text>
        <FontAwesomeIcon icon={faUser} size="xl"/>
    </Link>
    <a href={Resume} target="_blank">
        <text>Resume</text>
        <FontAwesomeIcon icon={faFilePdf} size="xl"/>
    </a>
    <a href="https://www.linkedin.com/in/evtyler" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} size="xl"/><text>LinkedIn</text>
    </a>
    <a href="https://github.com/HCTyler" target="_blank">
          <FontAwesomeIcon icon={faGithub} size="xl"/><text>GitHub</text>
    </a>
  </div>
  <div className='navbar-hide'>
    <Link to="Home" smooth={true}>
        <p>Home</p>
    </Link>
    <Link to="Project" smooth={true} >
        <p>Projects</p>
    </Link>
    <Link to="Contact" smooth={true} >
        <p>About</p>
    </Link>
    <a href={Resume} target="_blank">
        <p>Resume</p>
    </a>
  </div>
</nav>
</>
 
  )
}

export default index

