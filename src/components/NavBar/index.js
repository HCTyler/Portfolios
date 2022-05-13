import React from 'react'
import "./index.scss"
import Resume from "./files/Edgar_Fernandez_Resume.pdf"
import {Link} from "react-scroll"
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
    <a href={Resume} target="_blank">
        <text>Resume</text>
        <FontAwesomeIcon icon={faFilePdf} size="xl"/>
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

