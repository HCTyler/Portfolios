import React from "react"
import "./index.scss"
import {Link} from "react-scroll"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faCircleArrowDown,faFilePdf } from '@fortawesome/free-solid-svg-icons'


function Homepage({currentPage}) {

return (
<div className="backgroundStyle" id="Home">
  <div className="landing">
    <div>
      <h1>Hi, my name is Edgar Fernandez</h1>
      <p>I am a Junior Full Stack Developer</p>

    </div>

    <section>
      <Link to="Project" smooth={true} duration={1000}><FontAwesomeIcon icon={faCircleArrowDown} size="xl" beat/><text>Click me!</text></Link>
    </section>

  </div>
</div>
)
}

export default Homepage
