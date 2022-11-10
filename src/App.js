import React, { useState } from "react"
import Header from "./components/Header"
import Introduction from "./components/Directory"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import 'bootstrap/dist/css/bootstrap.css'

function App() {
    const [pages] = useState([
        { name: "about me" },
        { name: "portfolio" },
        { name: "contact" },
        { name: "resume" },
    ])

    const [currentPage, setCurrentPage] = useState(pages[0])

    return (
        <div>
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
            <Footer />
        </div>
    )
}

export default App