import React from "react"
import "./Footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedinIn, faStackOverflow } from "@fortawesome/free-brands-svg-icons"

function Footer() {

    const icons = [
        {
            name: faGithub,
            link: "https://github.com/HCTyler"
        },
        {
            name: faLinkedinIn,
            link: "https://www.linkedin.com/in/edgarvf/"
        },
        {
            name: faStackOverflow,
            link: "https://stackoverflow.com/users/16498935/hctyler"
        }
    ]

    return (
        <footer className="container bottom-0">
            <div className="row">
                <div className="col-lg-8 mx-auto text-center">
                    {icons.map(icons =>
                    (
                        <a href={icons.link} key={icons.name} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={icons.name} size= "2x" className="p-3"/></a>
                    )
                    )}
                </div>
            </div>
        </footer>
    )
}

export default Footer