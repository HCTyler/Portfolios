import "./index.scss"
import React, { useState } from "react"
import { capitalizeFirstLetter } from "../utils/helpers"
import { validateEmail } from "../utils/helpers"

function Contact() {
  const [pages] = useState([
    {
      name: "contact"
    }
  ])

  const [currentPage] = useState(pages[0])

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [errorMessage, setErrorMessage] = useState("")

  const { name, email, message } = formState

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!errorMessage) {
      console.log("Submit Form", formState)
    }
  }

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value)
      if (!isValid) {
        setErrorMessage("Your email is invalid.")
      } else {
        setErrorMessage("")
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`)
      } else {
        setErrorMessage("")
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value })
      console.log("Handle Form", formState)
    }
  }

  return (
    <section className="bg-dark contactpage">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto text-white mb-4">
            <h1 className="text-center">{capitalizeFirstLetter(currentPage.name)}</h1>
            <hr className="light my-4" />
            <h4>
              Want to work together?<br></br>
              Send me a messege for any project ideas, or send me an <a href="mailto:edgar.fernand@outlook.com"> email</a> at: <br></br>
              <a href="mailto:edgar.fernand@outlook.com"> edgar.fernand@outlook.com</a>
            </h4>
            <hr></hr>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact