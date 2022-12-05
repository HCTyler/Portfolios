import React from "react"
import { capitalizeFirstLetter } from "../utils/helpers"

function Header(props) {
// console.log(props.name, props, "hello")

    return (
        <>
            <h1 className="text-center text-white">{capitalizeFirstLetter(props.name)}</h1>
            <hr className=" my-4 mx-auto warning" />
        </>
    )
}

export default Header

//When adding to a new page, use <Header name={currentPage.name}/>.
//Each page uses a useState to render. We are passing parent value to child.