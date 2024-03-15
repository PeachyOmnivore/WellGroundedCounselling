import "./contact.css"
import { useEffect, useState } from "react"
import insta from "../../assets/svgs/insta.svg"
import { post } from "../../client-functions"

function Contact() {

  const INITIAL_STATE = {
    name: "",
    email: "",
    subject: "",
    message: "",
  }

  const [formData, setFormData] = useState(INITIAL_STATE)
  const [contactResponse, setContactResponse] = useState()

  useEffect(() => {
    setContactResponse("")
  }, [])

  const onInput = (event) => {
    const { name, value } = event.target

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await post(formData, "send-mail");

      if (!data) {
        setContactResponse(data.message);
      } else {
        setContactResponse("Message sent, thank-you.");
        setTimeout(() => window.location.reload(), 2000)
      }
    } catch (err) {
      setContactResponse(err.message)
    }
    setFormData(INITIAL_STATE);
  }

  return (
    <div className="contact-container">
      <section className="form-container">
        <div className="form-titles">
          <h1>Get in Touch</h1>
          <p>If you are interested in arranging a session you can either fill in the form below or email me -<br /><a href="mailto:fiona@wellgroundedcounselling.com">fiona@wellgroundedcounselling.com</a></p>
          <a href="https://www.instagram.com/wellgroundedcounselling/"><img width="40px" src={insta} alt="Instagram logo" /></a>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            name="name"
            required={true}
            placeholder="Enter your name"
            value={formData.name}
            onInput={(event) => { onInput(event) }}
          />
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            name="email"
            required={true}
            placeholder="Enter your email"
            value={formData.email}
            onChange={(event) => { onInput(event) }}
          />
          <label htmlFor="subject">Subject *</label>
          <input
            type="text"
            name="subject"
            placeholder="Enter a subject"
            value={formData.subject}
            onChange={(event) => { onInput(event) }}
          />
          <label htmlFor="message">Message *</label>
          <textarea
            type="text"
            name="message"
            required={true}
            placeholder="Enter your message"
            value={formData.message}
            onChange={(event) => { onInput(event) }}
          />
          <button type="submit">Submit</button>
          {contactResponse ? <p className="contactResponse">{contactResponse}</p> : ""}
        </form>
        <p className="required">* required</p>
      </section>
    </div>
  )
}

export default Contact