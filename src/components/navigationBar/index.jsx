/* eslint-disable react/prop-types */
import Hamburger from "../hamburger/hamburger"
import "./navigationBar.css"
import { NavLink, useLocation } from "react-router-dom"
import PopUpCard from '../popupCard/index'
import { useState } from "react"

function NavigationBar({ currentUser, setCurrentUser, currentlyAdmin }) {

  const [showPopup, setShowPopup] = useState(false)
  const [hamburgerOpen, setHamburgerOpen] = useState(false)
  const location = useLocation();
  const path = location.pathname;

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen)
  }

  return (
    <nav className={`navigation_bar ${hamburgerOpen ? 'open' : ''}`}>
      <div className="hamburger-nav" onClick={toggleHamburger}><Hamburger isOpen={hamburgerOpen}/></div>
        <ul className="menu-items">
          <li><NavLink className={path === "/" ? "link currentPage" : "link"} to={'/'}><p>Home</p></NavLink></li>
          <li><NavLink className={path === "/about" ? "link currentPage" : "link"} to={'/about'}><p>About</p></NavLink></li>
          <li><NavLink className={path === "/my-approach" ? "link currentPage" : "link"} to={'/my-approach'}><p>My approach</p></NavLink></li>
          <li><NavLink className={path === "/services-and-fees" ? "link currentPage" : "link"} to={'/services-and-fees'}><p>Services and fees</p></NavLink></li>
          {currentUser && <li><NavLink className={path === "/booking" ? "link currentPage" : "link"} to={'/booking'}>{!currentlyAdmin ? <p>Book a session</p> : <p>Add / Remove Sessions</p>}</NavLink></li>}
          <li><NavLink className={path === "/contact" ? "link currentPage" : "link"} to={'/contact'}><p>Contact</p></NavLink></li>
          <li><NavLink className={path === "/privacy-policy" ? "link currentPage" : "link"} to={'/privacy-policy'}><p>Privacy policy</p></NavLink></li>
        </ul>
        <ul className="menu-items">
          {currentUser.foundUser ? (
            <>
              <li><a onClick={() => setShowPopup(!showPopup)} className="link right"><p>{`Welcome ${currentUser.foundUser.firstName}`}</p></a></li>
              {showPopup ? (
                <PopUpCard>
                  <p className="closeButton" onClick={() => (setShowPopup(false))}>X</p>
                  {!currentlyAdmin ? <NavLink to={'/booking'}><p>Book a session</p></NavLink> : <NavLink className={"clientNav"} to={'/clients'}><p>Clients</p></NavLink>}
                  <NavLink to={'/myProfile'}><p>Profile / Bookings</p></NavLink>
                  <NavLink to={'/'} onClick={() => { localStorage.removeItem("token"); setCurrentUser('') }}><p>Logout</p></NavLink>
                </PopUpCard>)
                : (null)}
            </>
          ) : (
            <>
              <li><NavLink className={path === "/login" ? "link currentPage" : "link right"} to={'/login'}><p>Login</p></NavLink></li>
              <li><NavLink className={path === "/register" ? "link currentPage" : "link right"} to={'/register'}><p>Register</p></NavLink></li>
            </>
          )
          }
        </ul>
    </nav>
  )
}

export default NavigationBar