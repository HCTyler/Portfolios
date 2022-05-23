import React from 'react'
import "./index.scss"
import ContactInfoItem from './ContactInfoItem'
import ContactForm from './ContactForm'

function index() {
  return (
    <div id='Contact' className='links'>
      <h1>Contact</h1>
        <section>
        <h2>Get in touch!</h2>
          <main>
            <ContactInfoItem />
            <ContactForm />
          </main>
        </section>
    </div>
  )
}

export default index