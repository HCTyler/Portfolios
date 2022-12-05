import React, { useRef, useState } from "react"
import { validateEmail } from "../../utils/helpers"
import emailjs from "emailjs-com"

const serviceID = process.env.REACT_APP_EMAILTYPE
const templateID = process.env.REACT_APP_TEMPLATE_ID
const userID = process.env.REACT_APP_PUBLIC_KEY

function ContactForm() {
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
                setErrorMessage("Your email looks invalid, please recheck it.")
            } else {
                setErrorMessage("")
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`Opps! Looks like your ${e.target.name} is empty.`)
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
                setMessage("Yay! The messege has been sent!")
                form.target.reset()

            }, (error) => {
                console.log("bad data", error.text,);
                setErrorMessage("Opps! Something happened and we could not send the messege. Why not email us instead?")
                document.reset()
            });
    }

    // -------------------end of email sending function--------------

    return (
        <form id="contact-form" ref={(form)} onSubmit={handleSubmit} className="mb-5">
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
            {errorMessage && (
                <div>
                    <h6 className="error-text">{errorMessage}</h6>
                </div>
            )}
            {passMessage && (
                <div>
                    <h6 className="pass-text">{passMessage}</h6>
                </div>
            )}
            <div className="text-center">
                <button type="submit" className="btn btn-primary btn-xl js-scroll-trigger">Submit</button>
            </div>
        </form>
    )
}

export default ContactForm