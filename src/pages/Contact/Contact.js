import React, { useState } from "react"
import "./Contact.css"
import ContactForm from "./ContactForm"
import Header from "../../components/Header"

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
                        <Header name={currentPage.name} />
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