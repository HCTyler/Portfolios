import React from 'react'

export default function AboutSkills() {

    const Pdf = "https://docs.google.com/document/d/19xC7HYZEElzM0A6s8sSvS-Jsh7W-QVyMCgmYzR9CjUc/export?format=pdf"

    return (
        <>
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

        </>
    )
}
