import React from "react"
import { capitalizeFirstLetter } from "../utils/helpers"

function Header(props) {

    console.log(props.name, props, "hello")


    return (
        <>
            <h1 className="text-center">{capitalizeFirstLetter(props.name)}</h1>
            <hr className=" my-4 mx-auto warning" />

        </>
    )
}

export default Header

// const [pages] = useState([
//     {
//         name: "testing"
//     }
// ])
// const [currentPage] = useState(pages[0])