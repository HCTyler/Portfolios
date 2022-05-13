import React from 'react'
import Resume from "../../components/NavBar/files/Edgar_Fernandez_Resume.pdf"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons"

function Links() {

  return (
<div className="links">
  <div>
    <p> Feel free to send me an email, call or contact me through my social platforms. I look forward to connecting!</p>
    
    <a href="mailto:edgar.fernand@outlook.com" target="_blank">Edgar.Fernand@outlook.com</a>||<a href="tel:36093265524"> 360.932.6524</a>
  </div>

  <section>
      <a href="https://www.linkedin.com/in/evtyler" target="_blank">
        <FontAwesomeIcon icon={faLinkedin} size="xl"/>
        <text>LinkedIn</text>
      </a>

      <a href="https://github.com/HCTyler" target="_blank">
        <FontAwesomeIcon icon={faGithub} size="xl"/>
        <text>GitHub</text>
      </a>
      
      <a href={Resume} target="_blank">
        <FontAwesomeIcon icon={faFilePdf} size="xl"/>
        <text>Resume</text>
      </a>
  </section>
</div>
  )
}

export default Links