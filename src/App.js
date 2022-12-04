import React, { useState } from "react"
import Header from "./components/Directory/Header"
import Introduction from "./components/Directory/Directory"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"



function App() {
    const [pages] = useState([
        { name: "home" },
        { name: "portfolio" },
        { name: "contact" },
        { name: "about me" },
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
            <Footer/>
        </div>
    )
}

export default App