import "./Portfolio.css"
import React, { useState } from "react"
import ProjectData from "../../components/ProjectData"
import { capitalizeFirstLetter } from "../../utils/helpers"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faDesktop } from "@fortawesome/free-solid-svg-icons"

function Portfolio() {
    const [pages] = useState([
        {
            name: "portfolio"
        }
    ])
    const [currentPage] = useState(pages[0])

    return (
        <div id="Project">
            <h1 className="text-center">{capitalizeFirstLetter(currentPage.name)}</h1>
            <hr className=" my-4 mx-auto" />
            <article>
                {ProjectData.map(({ name, image, alt, deployed, github, description }) => {
                    return (
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
                                <a href={github} target="_blank" className=".svgicon">
                                    <FontAwesomeIcon icon={faGithub} size="2xl" />
                                    <text>GitHub</text>
                                </a>
                                <a href={deployed} target="_blank">
                                    <FontAwesomeIcon icon={faDesktop} size="2xl" className=".svgicon" />
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

export default Portfolio