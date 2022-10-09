import "./App.scss";
import "./icons.scss"
import React, { useState } from "react"
import Directories from "./pages/Directory/Directory";
import Footer from "./components/Footer";
import './App.scss';
import Navmenu from "./components/Navbar";



function App() {
  const [pages] = useState([
    { name: "home" },
    { name: "project" },
    { name: "contact"},
  ])

  const [currentPage, setCurrentPage] = useState(pages[0])

  return (
    <div>
      <Navmenu
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />

      <main>
        <Directories currentPage={currentPage}></Directories>
      </main>
      <Footer />
    </div>
  )
}

export default App
