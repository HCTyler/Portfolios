import "./App.scss";
import "./icons.scss"
import React, { useState } from "react"
import Directories from "./pages/Directory/directory";
import Navbar from "./components/NavBar"
import Footer from "./components/Footer";



function App() {
  const [pages] = useState([
    { name: "about me" },
    { name: "project" },
  ])

  const [currentPage, setCurrentPage] = useState(pages[0])

  return (
    <div>
      <Navbar
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />

      <main>
        <Directories currentPage={currentPage}></Directories>
      </main>
    </div>
  )
}

export default App
