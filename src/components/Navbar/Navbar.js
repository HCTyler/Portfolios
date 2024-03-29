import React, { useEffect } from "react"
import { capitalizeFirstLetter } from "../../utils/helpers"
import "./Navbar.css"


function Navbar(props) {
    const {
        pages = [],
        setCurrentPage,
        currentPage,
    } = props

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentPage.name)
    }, [currentPage])


    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand"
                onClick={() => props.setCurrentPage(pages[0])}
                >Edgar Fernandez</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        {pages.map((Page) => (
                            <li onClick={() => setCurrentPage(Page)} className={`nav-item nav-link ${currentPage.name === Page.name && "active"}`} key={Page.name} data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                                <span>
                                    {capitalizeFirstLetter(Page.name)}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar