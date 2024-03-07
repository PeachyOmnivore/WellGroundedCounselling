import "./register.css" 
import { useState } from "react"
import { NavLink } from "react-router-dom"
import WGClogo from '../../assets/images/thumbnail-arch.png'

function Register () {

  const INITIAL_STATE = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: ""
  }

  const [registerData, setRegisterData] = useState(INITIAL_STATE)
  const [confirmPass, setConfirmPass] = useState({confirmPass: ""})


  const onInput = (event) => {
    const { name, value } = event.target

    if(name === "confirmPass"){
      console.log("confirmpass hit")
      setConfirmPass({
        [name] : value,
      })
      return
    }

    setRegisterData({
      ...registerData,
      [name]: value,
    })
  }

  const handleRegister = (event) => {

    if(registerData.password !== confirmPass.confirmPass){
      event.preventDefault()
      alert("Passwords do not match")
      return
    }

    event.preventDefault()
    event.target.reset()
    console.log(registerData)
    console.log(confirmPass)

    setRegisterData(INITIAL_STATE)
    confirmPass.confirmPass = ""
  }

  return (
    <div className="register-container">
    <section className="register-form-container">
      <div className="register-header">
        <h1>Welcome!</h1>
        <img src={WGClogo} width="70px" alt="Well grounded counselling logo" />
      </div>
        <h2>Register a new account</h2>
      <form onSubmit={handleRegister}>
        <label htmlFor="firstName">First name:</label>
        <input
          type="text"
          name="firstName"
          required={true}
          placeholder="Enter your first name"
          value={registerData.firstName}
          onChange={onInput}
        />
        <label htmlFor="lastName">Last name:</label>
        <input
          type="text"
          name="lastName"
          required={true}
          placeholder="Enter your last name"
          value={registerData.lastName}
          onChange={onInput}
        />
        <label htmlFor="email">Phone number:</label>
        <input
          type="phone"
          name="phone"
          required={true}
          placeholder="Enter your phone number"
          value={registerData.phone}
          onChange={onInput}
        />
        <br />
        <hr />
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          required={true}
          placeholder="Enter your email or username"
          value={registerData.email}
          onChange={onInput}
        />
        <label htmlFor="subject">Password:</label>
        <input
          type="password"
          name="password"
          required={true}
          placeholder="Enter your password"
          value={registerData.password}
          onChange={onInput}
        />
        <label htmlFor="confirmPass">Confirm password:</label>
        <input
          type="password"
          name="confirmPass"
          required={true}
          placeholder="Confirm your password"
          value={confirmPass.confirmPass}
          onChange={onInput}
        />
        <br />
        <button type="submit">REGISTER</button>
      </form>
      <NavLink to="/login">Login to an existing account</NavLink>
    </section>
  </div>
  )
}

export default Register