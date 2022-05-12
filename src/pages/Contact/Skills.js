import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faHtml5, faCss3Alt,faJsSquare,faReact,faBootstrap} from "@fortawesome/free-brands-svg-icons"
import {faPeopleGroup,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

function Skills() {
  return (
    
<div className="skills">
    <h3>Language and Framework Proficiencies</h3>
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

    <h3>Additional Skill Proficiencies</h3>
    <ul>
    <a>
        <text>Googling</text>
        <FontAwesomeIcon icon={faMagnifyingGlass} size="2xl" bounce/>
      </a>
      <a>
        <text>Teamwork</text>
        <FontAwesomeIcon icon={faPeopleGroup} size="2xl" bounce/>
      </a>
    </ul>
</div>
  )
}

export default Skills