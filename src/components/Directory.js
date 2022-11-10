import React from "react"
import DirectoryProps from "./DirectoryProps"
import About from "../pages/About/About"
import Portfolio from "../pages/Portfolio/Portfolio"
import Contact from "../pages/Contact/Contact"
import Resume from "../pages/Resume/Resume"


function Introduction({ currentPage }) {

  const renderPage = () => {
    switch (currentPage.name) {
      case "about me":
        return <About />
      case "portfolio":
        return <Portfolio />
      case "contact":
        return <Contact />
      case "resume":
        return <Resume />
      default:
        return <About />
    }
  }

  return (
    <section>
      <DirectoryProps>{renderPage()}</DirectoryProps>
    </section>
  )
}
export default Introduction