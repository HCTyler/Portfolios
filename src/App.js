import React, { useState } from "react"
import Header from "./components/Header"
import Introduction from "./components/Directory"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"


function App() {
    const [pages] = useState([
        { name: "about me" },
        { name: "portfolio" },
        { name: "contact" },
        { name: "resume" },
    ])

    const [currentPage, setCurrentPage] = useState(pages[0])

    return (
        <div className="everything">
            <Header>
                <Navbar
                    pages={pages}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                ></Navbar>
            </Header>
            <main>
                <Introduction currentPage={currentPage}></Introduction>
            </main>
            <Footer/>
        </div>
    )
}

export default App