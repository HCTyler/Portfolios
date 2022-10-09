import React from "react"
import DirectoryHelper from "./DirectoryHelper"
import Homepage from "../Homepage"
import Project from "../Project"
import Contact from "../Contact"


function Directories({ currentPage }) {


  const renderPage = () => {
    switch (currentPage.name) {
      case "project":
        return <Project />
        case "contact":
          return <Contact />
      default:
        return <Homepage />
    }
  }

  return (
    <section>
      <DirectoryHelper>{renderPage()}</DirectoryHelper>
    </section>
  )
}
export default Directories