import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faHtml5, faCss3Alt,faJsSquare,faReact,faBootstrap} from "@fortawesome/free-brands-svg-icons"

function Skills() {
  return (
    
<div className="skills">
    <h1>Language and Framework Proficiencies</h1>
    <ul>
      <a>
        <text>HTML</text>
        <FontAwesomeIcon icon={faHtml5} size="2xl"  shake/>
      </a>
      <a>
        <text>CSS</text>
        <FontAwesomeIcon icon={faCss3Alt} size="2xl" fade />
      </a>
      <a>
        <text>JavaScript</text>
        <FontAwesomeIcon icon={faJsSquare} size="2xl" beat />
      </a>
      <a>
        <text>React</text>
        <FontAwesomeIcon icon={faReact} size="2xl" spin/>
      </a>
      <a>
        <text>Bootstrap</text>
        <FontAwesomeIcon icon={faBootstrap} size="2xl" bounce/>
      </a>
    </ul>

    <h2>Additional Skill Proficiencies</h2>
    <ul>
      <a>Github</a>
      <a>Googang</a>
      <a>Debugging and Testing</a>
      <a>Teamwork</a>
    </ul>
</div>
  )
}

export default Skills