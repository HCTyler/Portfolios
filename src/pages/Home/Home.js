import React, { useState } from "react"
// import { capitalizeFirstLetter } from "../../utils/helpers"
import "./Home.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowAltCircleDown} from "@fortawesome/free-solid-svg-icons"

function Home(props) {
    const [pages] = useState([
        {
            name: "home"
        }
    ])

    const [currentPage] = useState(pages[0])

    return (
        <div className="home text-center text-white d-flex">
            <div className="container my-auto">
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <h1 className="text-center">Edgar Fernandez</h1>
                        <hr className=" my-4 mx-auto" />
                        <p className="text-faded mb-5 container-sm">
                            // Junior Front-end Web Developer // Watcher of Anime // Reader of Documents
                        </p>
                        {/* <div className="transitionbutton">
                            <a onClick={() => props.setCurrentPage(pages[1])}>
                                <FontAwesomeIcon icon={faArrowAltCircleDown} size="2xl" className=".svgicon" />
                                <text>Check me out!</text>
                            </a>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home