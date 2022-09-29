import React from 'react'
import Data from "./data"
import {faGithub} from "@fortawesome/free-brands-svg-icons"
import {faDesktop} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function index() {
  return (
    <div id="Project">
<article>
{project.map(({name,image,alt,deployed,github,description}) =>{
return(
    <div class="major">
        <div className="fade-box">
            <div className="fade-image"></div>
            <img src={image} alt={alt} />
            <div className="fade-text">
                <header>{name}</header>
                <p>{description}</p>
            </div>
        </div>
        <section>
            <a href={github}>
            <FontAwesomeIcon icon={faGithub} size="xl"/>
                <text>GitHub</text>
            </a>
            <a href={deployed}>
                <FontAwesomeIcon icon={faDesktop} size="xl" />
                <text>Application</text>
            </a>
        </section>
    </div>
)
})}
</article>
    </div>
  )
}

export default index