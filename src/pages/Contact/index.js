import "./index.scss"
import React, { useState } from "react"
import { capitalizeFirstLetter } from "../../utils/helpers"
import { validateEmail } from "../../utils/helpers"
import ContactForm from "./contact-form"

function Contact() {
  const [pages] = useState([
    {
      name: "contact"
    }
  ])

  const [currentPage] = useState(pages[0])

  return (
    <section className="bg-dark contactpage">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto text-white mb-4">
            {/* <h1 className="text-center">{capitalizeFirstLetter(currentPage.name)}</h1> */}
            <hr className="light my-4" />
            <p>
              Want to work together?
              Send me a messege for any project ideas or
              <a href="mailto:edgar.fernand@outlook.com"> email</a> me at
              <a href="mailto:edgar.fernand@outlook.com"> edgar.fernand@outlook.com</a>.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact