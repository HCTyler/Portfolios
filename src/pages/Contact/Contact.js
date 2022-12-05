import React, { useState } from "react"
import { capitalizeFirstLetter } from "../../utils/helpers"
import "./Contact.css"
import ContactForm from "./ContactForm"

function Contact() {
    const [pages] = useState([
        {
            name: "contact"
        }
    ])

    const [currentPage] = useState(pages[0])


    return (
        <section className="bg-dark contactpage">
            <div className="containers">
                <div>
                    <div className="col-md-8 mx-auto text-white mb-4">
                        <h1 className="text-center">{capitalizeFirstLetter(currentPage.name)}</h1>
                        <hr className=" my-4 mx-auto" />
                        <p>
                            Want to work together?<br />
                            Send me a  messege me at: <a href="mailto:edgar.fernand@outlook.com"> Edgar.Fernand@outlook.com</a>, this form, or on my LinkedIn at the bottom of the page!
                        </p>
                        <hr className=" my-4 mx-auto" />
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact