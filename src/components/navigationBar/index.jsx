import "./navigationBar.css"
import { NavLink } from "react-router-dom"

function NavigationBar() {
  return (
    <div className="navigation_bar">
      <ul>
        <li><NavLink className="link" to={'/'}><p>Home</p></NavLink></li>
        <li><NavLink className="link"  to={'about'}><p>About</p></NavLink></li>
        <li><NavLink className="link"  to={'my-approach'}><p>My approach</p></NavLink></li>
        <li><NavLink className="link"  to={'services-and-fees'}><p>Services and fees</p></NavLink></li>
        <li><NavLink className="link"  to={'contact'}><p>Contact</p></NavLink></li>
        <li><NavLink className="link"  to={'privacy-policy'}><p>Privacy policy</p></NavLink></li>
      </ul>
    </div>
  )
}

export default NavigationBar