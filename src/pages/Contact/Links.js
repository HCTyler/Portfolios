import React from 'react'
import Resume from "../../components/NavBar/files/Edgar_Fernandez_Resume.pdf"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons"

function Links() {

  return (
<>
<div className="links">
  <div>
    <h1>Interested in working together?</h1>
    <p> Feel free to send me an email, call or contact me through my social platforms. I look forward to connecting!</p>
    <a onClick={()=>window.location = "mailto:edgar.fernand@outlook.com"}>Edgar.Fernand@outlook.com</a>||<a href="tel:36093265524"> 360.932.6524</a>
  </div>
</div>

<div className="links">
  <div>
    <a href="https://www.linkedin.com/in/evtyler" target="_blank">
      <FontAwesomeIcon icon={faLinkedin} size="2xl" /><text>LinkedIn</text>
    </a>
    <a href="https://github.com/HCTyler" target="_blank">
      <FontAwesomeIcon icon={faGithub} size="2xl" /><text>GitHub</text>
    </a>
    <a href={Resume} target="_blank">
      <FontAwesomeIcon icon={faFilePdf} size="2xl" /><text>Resume</text>
    </a>
  </div>
</div>
</> 
  )
}

export default Links