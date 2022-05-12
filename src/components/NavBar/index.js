import React from 'react'
import "./index.scss"
// import Resume from "./files/Edgar_Fernandez_Resume.pdf"
import {Link} from "react-scroll"
import {faGithub} from "@fortawesome/free-brands-svg-icons"
import {faHome,faUser,faArrowUpRightFromSquare,faFilePdf} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


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
    <a href="https://docs.google.com/viewer?url=https://docs.google.com/document/d/19xC7HYZEElzM0A6s8sSvS-Jsh7W-QVyMCgmYzR9CjUc/export?format=pdf" target="_blank">
        <text>Resume</text>
        <FontAwesomeIcon icon={faFilePdf} size="xl"/>
    </a>
  </div>
</nav>
</>
 
  )
}

export default index

