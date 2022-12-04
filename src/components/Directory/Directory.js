import React from "react"
import DirectoryProps from "./DirectoryProps"
import Home from "../../pages/Home/Home"
import Portfolio from "../../pages/Portfolio/Portfolio"
import Contact from "../../pages/Contact/Contact"
import About from "../../pages/About/About"


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
      default:
        return <Home />
    }
  }

  return (
    <section>
      <DirectoryProps>{renderPage()}</DirectoryProps>
    </section>
  )
}
export default Introduction