import React, { useState } from "react"
import { capitalizeFirstLetter } from "../../utils/helpers"
import "./About.css"

function About() {
    const [pages] = useState([
        {
            name: "about me"
        }
    ])
    const [currentPage] = useState(pages[0])

    const Pdf = "https://docs.google.com/document/d/19xC7HYZEElzM0A6s8sSvS-Jsh7W-QVyMCgmYzR9CjUc/export?format=pdf"
    
    return (
        <section className="bg-dark contactpage aboutme">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 mx-auto text-white mb-4">
                        <h1 className="text-center">{capitalizeFirstLetter(currentPage.name)}</h1>
                        <hr className=" my-4 mx-auto warning" />
                        <p className="text-faded mb-5 container-sm">
                            Hello World!<br/>
                            A current graduate from UCSD's full-stack web development coding bootcamp, I am a junior front-end web developer passionate about creating interactive applications and experiences on the web. Coming from a healthcare setting, I am adept at working with customers, teams and project leaders to accomplish upcoming task or projects according to timelines.<br/>
                        </p>
                        <hr className=" my-4 mx-auto warning" />
                        <h3>Language and Framework</h3>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Bootstrap</li>
                        </ul>
                        <h3>Additional Skill Proficiencies</h3>
                        <ul>
                            <li>PhotoShop</li>
                            <li>Github</li>
                            <li>Debugging and Testing</li>
                            <li>Teamwork</li>
                        </ul>
                        <p className="text-center">
                            <a href={Pdf} target="_blank" className="text-faded white-link" download>Download my resume</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About