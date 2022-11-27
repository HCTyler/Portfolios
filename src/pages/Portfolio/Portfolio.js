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

    const [toggle, setToggle] = useState(false)
    const toggler = () => {
        toggle ? setToggle(false) : setToggle(true);
    }

    return (
        // <hr className=" my-4 mx-auto" />
        <div id="Project" className="cover">
            <h1 className="text-center text-white">{capitalizeFirstLetter(currentPage.name)}</h1>
            <article >
                {ProjectData.map(({ name, image, alt, deployed, github, description, skills }) => {
                    return (
                        <div class="major" onClick={toggler} onMouseLeave={() => setToggle(true)}>
                            <div className="fade-box">
                                <div className="fade-image" />
                                <img src={image} alt={alt} />
                                <div className="fade-text">
                                    {/* <header>{name}</header>
                                    <p>{description}</p> */}
                                    {toggle ?
                                        <span>
                                            <header>{name}</header>
                                            <p>{description}</p>
                                        </span> : <span>
                                            <header>Languages used</header>
                                            <p>{skills}</p>
                                        </span>}

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