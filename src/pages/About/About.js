import React, { useState } from "react"
import "./About.css"


function About() {
    const [pages] = useState([
        {
            name: "about me"
        }
    ])
    const [currentPage] = useState(pages[0])

    return (
        <div className="aboutme text-center text-white d-flex contactpage">
            <div className="container my-auto">
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <h1></h1>
                        <hr className=" my-4 mx-auto" />
                        <p className="text-faded mb-5">
                            Hello World!<br></br>
                            I am front-end developer passionate about creating interactive applications and experiences on the web. After completing my coding bootcamp course at UCSD extension, I’ve found that my passion lies in designing and developing accessible and responsive websites.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About