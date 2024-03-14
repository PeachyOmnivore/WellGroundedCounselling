/* eslint-disable react/prop-types */
import './button.css'

function Button ({text, onClick, className}) {
  return (
  <button className={`${className} button` } onClick={onClick}>{text}</button>
  )
}

export default Button