import React, { useRef, useState } from "react"
import { capitalizeFirstLetter } from "../../utils/helpers"
import { validateEmail } from "../../utils/helpers"
import emailjs from "emailjs-com"
import "./Contact.css"

const serviceID = process.env.REACT_APP_EMAILTYPE
const templateID = process.env.REACT_APP_TEMPLATE_ID
const userID = process.env.REACT_APP_PUBLIC_KEY

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
    const [passMessage, setMessage] = useState("")

    // -------------------error messege function------------------------
    const { name, email, message } = formState

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!errorMessage) {
            console.log("Submit Form", formState)
            sendEmail()
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
    // -------------------end of error messege function------------------------    
    // --------------------email sending function---------------------
    const form = useRef();

    const sendEmail = () => {
        emailjs.sendForm({ serviceID }.serviceID, { templateID }.templateID, form.current, { userID }.userID)
            .then((result) => {
                console.log("good data", result.text);
                setMessage("The messege has been sent!")

            }, (error) => {
                console.log("bad data", error.text,);
                setErrorMessage("Opps! Something happened, and we could not send the messege. Why not email us instead?")
            });
    }
    // -------------------end of email sending function--------------

    return (
        <section className="bg-dark contactpage">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 mx-auto text-white mb-4">
                        <h1 className="text-center">{capitalizeFirstLetter(currentPage.name)}</h1>
                        <hr className=" my-4 mx-auto" />
                        <h4>
                            Want to work together?<br />
                            Send me a <a href="mailto:edgar.fernand@outlook.com"> messege</a> me at: <a href="mailto:edgar.fernand@outlook.com"> edgar.fernand@outlook.com</a> or just click on one of my social media at the bottom of the page!
                        </h4>
                        <hr className=" my-4 mx-auto" />
                        <form id="contact-form" ref={form} onSubmit={handleSubmit} className="mb-5">
                            <div>
                                <label htmlFor="name">Name:</label>
                                <input
                                    className="form-control"
                                    placeholder="Name"
                                    type="text"
                                    name="name"
                                    defaultValue={name}
                                    onBlur={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="email">Email address:</label>
                                <input
                                    className="form-control"
                                    placeholder="Email"
                                    type="email"
                                    name="email"
                                    defaultValue={email}
                                    onBlur={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="message">Message:</label>
                                <textarea
                                    className="form-control"
                                    placeholder="Message"
                                    name="message"
                                    rows="5"
                                    defaultValue={message}
                                    onBlur={handleChange}
                                />
                            </div>
                            {errorMessage || passMessage && (
                                <div>
                                    <p className="error-text">{errorMessage}</p>
                                    <p className="pass-text">{passMessage}</p>
                                </div>
                            )}
                            <div className="text-center">
                                <button type="submit" className="btn btn-primary btn-xl js-scroll-trigger">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact