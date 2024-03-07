import "./login.css"
import { useState } from "react"
import { NavLink } from "react-router-dom"
import WGClogo from '../../assets/images/thumbnail-arch.png'

function Login() {

  const INITIAL_STATE = {
    emailOrUsername: "",
    password: "",
    remember: false,
  }

  const [loginData, setLoginData] = useState(INITIAL_STATE)


  const onInput = (event) => {
    const { name, value } = event.target

    setLoginData({
      ...loginData,
      [name]: value,
    })
  }

  const handleLogin = (event) => {
    event.preventDefault()
    event.target.reset()
    console.log(loginData)

    setLoginData(INITIAL_STATE)
  }

  return (
    <div className="login-container">
      <section className="login-form-container">
        <div className="login-header">
          <h1>Welcome Back!</h1>
          <img src={WGClogo} width="70px" alt="Well grounded counselling logo" />
        </div>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email or Username:</label>
          <input
            type="text"
            name="emailOrUsername"
            required={true}
            placeholder="Enter your email or username"
            value={loginData.emailOrUsername}
            onChange={onInput}
          />
          <label htmlFor="subject">Password:</label>
          <input
            type="password"
            name="password"
            required={true}
            placeholder="Enter your password"
            value={loginData.password}
            onChange={onInput}
          />
          <label htmlFor="remember">Remember me?
            <input className="checkbox" type="checkbox"  checked={loginData.remember} name="remember" value={true} onChange={(event) => { onInput(event) }} />
          </label>
          <button type="submit">LOGIN</button>
        </form>
        <NavLink to="/register">Create a new account</NavLink>
      </section>
    </div>
  )
}

export default Login