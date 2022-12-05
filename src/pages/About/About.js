import React, { useState } from "react"
import "./About.css"
import Header from "../../components/Header"
import AboutSkills from "./AboutSkills"
import AboutBio from "./AboutBio"

function About() {
    const [pages] = useState([
        {
            name: "about me"
        }
    ])
    const [currentPage] = useState(pages[0])
    return (
        <section className="bg-dark contactpage aboutme">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 mx-auto text-white mb-4">
                        <Header name={currentPage.name} />
                        <AboutBio />
                        <hr className=" my-4 mx-auto warning" />
                        <AboutSkills />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About