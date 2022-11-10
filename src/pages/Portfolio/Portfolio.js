import React, { useState } from "react"
import ProjectData from "../../components/ProjectData"
import "./Portfolio.css"

function Portfolio() {
    const [pages] = useState([
        {
            name: "portfolio"
        }
    ])
    const [currentPage] = useState(pages[0])

    return (
        <section className="p-0">
            <div className="container-fluid p-0">
                <hr className="my-4" />
                <div className="row no-gutters popup-gallery">

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
                                <a href={github}>
                                    {/* <FontAwesomeIcon icon={faGithub} size="xl" /> */}
                                    <text>GitHub</text>
                                </a>
                                <a href={deployed}>
                                    {/* <FontAwesomeIcon icon={faDesktop} size="xl" /> */}
                                    <text>Application</text>
                                </a>
                            </section>
                        </div>
                    )
                })}
                </div>

            </div>
        </section>
    )
}

export default Portfolio