import React, { useState } from "react"
import Header from "../components/Header"
import { capitalizeFirstLetter } from "../utils/helpers"


function Testing() {
    const [pages] = useState([
        {name: "testing"}
    ])
    const [currentPage] = useState(pages[0])


  return (
    <section className="bg-dark contactpage aboutme">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 mx-auto text-white mb-4">
                        <h1 className="text-center">{capitalizeFirstLetter(currentPage.name)}</h1>
                        <hr className=" my-4 mx-auto warning" />
                        <Header name={currentPage.name}/>
                    </div>
                </div>
            </div>
        </section>
  )
}
export default Testing
