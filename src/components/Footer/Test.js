import React from "react"
import { GithubIcon, LinkedinIcon, stackOverflowIcon} from "../Icons"

function Test() {
    const icons = [
        {
            logo: {GithubIcon},
            link: "https://github.com/HCTyler"
        },
        {
            logo: {LinkedinIcon},
            link: "https://www.linkedin.com/in/edgarvf/"
        },
        {
            logo: {stackOverflowIcon},
            link: "https://stackoverflow.com/users/16498935/hctyler"
        }
    ]
    const mappedIcons= icons.map((icon)=>
        <a href={icon.link} target="_blank">{icon.logo}</a>
    )
    
  return (
    <div>
        {mappedIcons}
    </div>
    )
}
export default Test