import React from "react"
import DirectoryProps from "./DirectoryProps"
import Home from "../../pages/Home/Home"
import Portfolio from "../../pages/Portfolio/Portfolio"
import Contact from "../../pages/Contact/Contact"
import About from "../../pages/About/About"
import Testing from "../../pages/Testing"


function Introduction({ currentPage }) {

  const renderPage = () => {
    switch (currentPage.name) {
      case "home":
        return <Home />
      case "portfolio":
        return <Portfolio />
      case "contact":
        return <Contact />
      case "about me":
        return <About />
      case "testing":
        return <Testing />
      default:
        return <Testing />
    }
  }

  return (
    <section>
      <DirectoryProps>{renderPage()}</DirectoryProps>
    </section>
  )
}
export default Introduction