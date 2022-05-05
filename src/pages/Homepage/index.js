import React from "react"
import "./index.scss"
import Resume from "../../components/NavBar/files/Edgar_Fernandez_Resume.pdf"
import {Link} from "react-scroll"
import Typewriter from "typewriter-effect"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faCircleArrowDown,faFilePdf } from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons"


function Homepage() {

return (
<div className="backgroundStyle" id="Home">
  <div className="landing">
    <div>
      <h1>Edgar Fernandez</h1>
      <p>
        <Typewriter
          options={{
          strings: ["I am a Front-End Developer.","I build things on the web.","Let us turn your ideas into reality!"],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
          delay: 50,
        }} >
        </Typewriter></p>
    </div>

    <div>
      <Link to="Project" smooth={true} duration={1000} offset={-40}><FontAwesomeIcon icon={faCircleArrowDown} size="2xl" beat/><text>Check out my projects!</text></Link>
    </div>
    <section>
        <a href="https://www.linkedin.com/in/evtyler" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} size="2xl"/><text>LinkedIn</text>
        </a> 

        <a href="https://github.com/HCTyler" target="_blank">
          <FontAwesomeIcon icon={faGithub} size="2xl"/><text>GitHub</text>
        </a>

        <a href={Resume} target="_blank">
          <FontAwesomeIcon icon={faFilePdf} size="2xl"/><text>Resume</text>
        </a>
    </section>
      
  </div>
</div>
)
}

export default Homepage



    