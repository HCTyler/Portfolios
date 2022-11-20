import React from "react"
import "./Footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faFileUpload } from "@fortawesome/free-solid-svg-icons"



function Footer() {

    const icons = [
        {
            name: faGithub,
            link: "https://github.com/HCTyler",
            text: "Github",
        },
        {
            name: faLinkedinIn,
            link: "https://www.linkedin.com/in/edgarvf/",
            text: "LinkedIn"
        },
        {
            name: faFileUpload,
            link: "https://docs.google.com/document/d/19xC7HYZEElzM0A6s8sSvS-Jsh7W-QVyMCgmYzR9CjUc/export?format=pdf",
            text: "Resume",
        }
    ]

    return (
        <footer className="container bottom-0">
            <div className="row">
                    <section>
                        {icons.map(icons =>
                        (
                            <a href={icons.link} key={icons.name} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={icons.name} size="2x" className="p-3" />
                                <text>{icons.text}</text>
                            </a>
                        )
                        )}
                    </section>
            </div>
        </footer>
    )
}

export default Footer