import React from 'react'
import Resume from "../../components/NavBar/files/Edgar_Fernandez_Resume.pdf"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons"

function Links() {

  return (
<div className="links">
  <div>
    <p> Send me an email, call or contact me through my social platforms. I look forward hearing from you!</p>
    
    <a href="mailto:edgar.fernand@outlook.com" target="_blank">Edgar.Fernand@outlook.com</a>||<a href="tel:36093265524"> 360.932.6524</a>
  </div>

</div>
  )
}

export default Links