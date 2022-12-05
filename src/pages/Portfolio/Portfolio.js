import "./Portfolio.css"
import React, { useState } from "react"
import ProjectDatas from "../../components/ProjectData"
import { capitalizeFirstLetter } from "../../utils/helpers"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faDesktop } from "@fortawesome/free-solid-svg-icons"
import Header from "../../components/Header"

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
        <div id="Project" className="cover">
            <Header name={currentPage.name} />
            <article >
                {ProjectDatas.map((ProjectData, index) => {
                    return (
                        <div class="major" onClick={toggler} onMouseEnter={() => setToggle(true)} key={index}>
                            <div className="fade-box">
                                <div className="fade-image" />
                                <img src={ProjectData.image} alt={ProjectData.alt} />
                                <div className="fade-text">
                                    {toggle ?
                                        <span>
                                            <header>{ProjectData.name}</header>
                                            <p>{ProjectData.description}</p>
                                            <p>...click for more information</p>
                                        </span> : <span>
                                            <header>Languages Used:</header>
                                            {ProjectData.skills.map((skills, index) => {
                                                return (
                                                    <div key={index}>
                                                        <li>{skills}</li>
                                                    </div>
                                                )
                                            })}
                                        </span>}
                                </div>
                            </div>
                            <section>
                                <a href={ProjectData.github} target="_blank" className=".svgicon">
                                    <FontAwesomeIcon icon={faGithub} size="2xl" />
                                    <text>GitHub</text>
                                </a>
                                <a href={ProjectData.deployed} target="_blank">
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

