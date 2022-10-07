import React from 'react'
import "./index.scss"
import ContactInfoItem from './ContactInfoItem'


function Contact() {
  return (
    <div id='Contact' className='links'>
      <h1>Contact</h1>
      <section>
        <h2>Get in touch!</h2>
        <main>
          <ContactInfoItem />


        </main>
      </section>
    </div>
  )
}

export default Contact