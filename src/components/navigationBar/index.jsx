/* eslint-disable react/prop-types */
import "./navigationBar.css"
import { NavLink, useLocation } from "react-router-dom"

function NavigationBar({ currentUser }) {

  console.log("CURRENT USER INSIDE NAVBAR",currentUser)

  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="navigation_bar">
      <ul>
        <li><NavLink className={path === "/" ? "link currentPage" : "link"} to={'/'}><p>Home</p></NavLink></li>
        <li><NavLink className={path === "/about" ? "link currentPage" : "link"} to={'/about'}><p>About</p></NavLink></li>
        <li><NavLink className={path === "/my-approach" ? "link currentPage" : "link"} to={'/my-approach'}><p>My approach</p></NavLink></li>
        <li><NavLink className={path === "/services-and-fees" ? "link currentPage" : "link"} to={'/services-and-fees'}><p>Services and fees</p></NavLink></li>
        <li><NavLink className={path === "/booking" ? "link currentPage" : "link"} to={'/booking'}><p>Book a session</p></NavLink></li>
        <li><NavLink className={path === "/contact" ? "link currentPage" : "link"} to={'/contact'}><p>Contact</p></NavLink></li>
        <li><NavLink className={path === "/privacy-policy" ? "link currentPage" : "link"} to={'/privacy-policy'}><p>Privacy policy</p></NavLink></li>
      </ul>
      <ul>
        {currentUser.foundUser ? (
          <>
            <li><NavLink className={path === "/login" ? "link currentPage" : "link right"} to={'/login'}><p>Login</p></NavLink></li>
            <li><NavLink className={path === "/register" ? "link currentPage" : "link right"} to={'/register'}><p>Register</p></NavLink></li>
          </>
        ) : (
          <>
            {/* <li>{`Welcome ${currentUser.foundUser.firstName}`}Hello</li> */}
            <li>Logout</li>
          </>
        )
        }
      </ul>
    </div>
  )
}

export default NavigationBar