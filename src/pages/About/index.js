import React from "react";
import Background from "./image/background.jpg"
import "./index.scss"

function About() {
  var backgroundStyle ={
    backgroundImage: `url(${Background})`,
    height:"100vh",
    backgroundPosition:"top",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "sticky",
    top:"0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex:"-1"
  }

  return (
      <>
    <div style={backgroundStyle}>
      <div className="about">
        <h1>About Me</h1>
        <p>Hello, my name is Edgar Fernandez and I am a front-end developer.</p>
        <p>I am seeking out opportunities to collaborate with you and bring my 5 years experience working in a customer service to help build your application. After completing my coding bootcamp program through the University of California- San Diego, I have found that my passion lies in creativity that comes with web development. I am here to create an application that not only looks good but is also interactive and responsive.</p>
      </div>
    </div>
    <div id="AboutMe"></div>
  </>
  )
}

export default About