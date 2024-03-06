import "./contact.css"
import { useState } from "react"

function Contact() {

  const INITIAL_STATE = {
    name: "",
    email: "",
    subject: "",
    message: "",
  }

  const [formData, setFormData] = useState(INITIAL_STATE)

  const onInput = (event) => {
    const { name, value } = event.target

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    event.target.reset()
    console.log(formData)

    setFormData(INITIAL_STATE)
  }

  return (
    <div className="contact-container">
      <h1>Get in Touch</h1>
      <p>If you are interested in arranging a session you can either fill in the form below or email me - <a href="mailto:fiona@wellgroundedcounselling.com">fiona@wellgroundedcounselling.com</a></p>
      <img src="insta" alt="instagram logo" />
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name *</label>
        <input
          type="text"
          name="name"
          required="true"
          placeholder="Enter your name"
          value={formData.name}
          onInput={(event) => {onInput(event)}}
        />
        <label htmlFor="email">Email *</label>
        <input
          type="email"
          name="email"
          required="true"
          placeholder="Enter your email"
          value={formData.email}
          onChange={(event) => { onInput(event) }}
        />
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          name="subject"
          placeholder="Enter a subject"
          value={formData.subject}
          onChange={(event) => { onInput(event) }}
        />
        <label htmlFor="message">Message</label>
        <textarea
          type="text"
          name="message"
          required="true"
          placeholder="Enter your message"
          value={formData.message}
          onChange={(event) => { onInput(event) }}
        />
        <button type="submit">Submit</button>
      </form>

    </div>
  )
}

export default Contact