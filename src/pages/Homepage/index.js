import React from "react"
import "./index.scss"
import {Link} from "react-scroll"
// import Resume from "../../components/NavBar/files/Edgar_Fernandez_Resume.pdf"
// import Typewriter from "typewriter-effect"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faCircleArrowDown,faFilePdf } from '@fortawesome/free-solid-svg-icons'
// import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons"


function Homepage() {

return (
<div className="backgroundStyle" id="Home">
  <div className="landing">
    <div>
      <h1>Hi, my name is Edgar Fernandez</h1>
      <p>I am a Junior Full Stack Developer</p>
      {/* <p>
        <Typewriter
          options={{
          strings: ["I am a Junior Front-End Developer.","I build things on the web.","I am always trying to learn.","I want to turn your ideas into reality!"],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
          delay: 50,
          pauseFor:(500),
        }} >
        </Typewriter>
      </p> */}
    </div>

    <section>
      <Link to="Project" smooth={true} duration={1000}><FontAwesomeIcon icon={faCircleArrowDown} size="xl" beat/><text>Click me!</text></Link>
    </section>
    {/* <section>
        <a href="https://www.linkedin.com/in/evtyler" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} size="xl"/><text>LinkedIn</text>
        </a> 

        <a href="https://github.com/HCTyler" target="_blank">
          <FontAwesomeIcon icon={faGithub} size="xl"/><text>GitHub</text>
        </a>

        <a href={Resume} target="_blank">
          <FontAwesomeIcon icon={faFilePdf} size="xl"/><text>Resume</text>
        </a>
    </section> */}
      
  </div>
</div>
)
}

export default Homepage



    