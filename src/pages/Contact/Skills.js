import React from 'react'
import "./icons.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faHtml5, faCss3Alt,faJsSquare,faReact,faBootstrap} from "@fortawesome/free-brands-svg-icons"

function Skills() {
  return (
    
<div className="skills">
    <h1>Language and Framework Proficiencies</h1>
    <ul>
      <li>
        <p>HTML</p>
        <FontAwesomeIcon icon={faHtml5} size="2xl"  shake/>
      </li>
      <li>
        <p>CSS</p>
        <FontAwesomeIcon icon={faCss3Alt} size="2xl" fade />
      </li>
      <li>
        <p>JavaScript</p>
        <FontAwesomeIcon icon={faJsSquare} size="2xl" beat />
      </li>
      <li>
        <p>React</p>
        <FontAwesomeIcon icon={faReact} size="2xl" spin/>
      </li>
      <li>
        <p>Bootstrap</p>
        <FontAwesomeIcon icon={faBootstrap} size="2xl" bounce/>
      </li>
    </ul>

    <h2>Additional Skill Proficiencies</h2>
    <ul>
      <li>Github</li>
      <li>Googling</li>
      <li>Debugging and Testing</li>
      <li>Teamwork</li>
    </ul>
</div>
  )
}

export default Skills